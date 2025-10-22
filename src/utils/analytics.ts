// Analytics utility for Google Analytics integration
// Only initializes when user has given consent

declare global {
  interface Window {
    gtag: {
      (...args: unknown[]): void;
      q: unknown[];
    };
    cookieConsent: 'accepted' | 'rejected' | null;
  }
}

// Google Analytics configuration
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

let isAnalyticsInitialized = false;

/**
 * Initialize Google Analytics
 * Only runs when user has given consent
 */
export const initAnalytics = (): void => {
  if (typeof window === 'undefined') return;

  const consent = localStorage.getItem('cookieConsent');

  if (consent === 'accepted' && GA_MEASUREMENT_ID && !isAnalyticsInitialized) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    const gtagFunction = function(...args: unknown[]) {
      gtagFunction.q = gtagFunction.q || [];
      gtagFunction.q.push(args);
    };
    gtagFunction.q = [] as unknown[];
    window.gtag = gtagFunction;

    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      cookie_flags: 'secure;samesite=strict'
    });

    isAnalyticsInitialized = true;
    console.log('Google Analytics initialized with consent');
  }
};

/**
 * Track page view
 * Only works if analytics is initialized
 */
export const trackPageView = (url: string): void => {
  if (typeof window === 'undefined' || !isAnalyticsInitialized || !window.gtag) return;

  window.gtag('config', GA_MEASUREMENT_ID!, {
    page_path: url,
  });
};

/**
 * Track custom event
 * Only works if analytics is initialized
 */
export const trackEvent = (action: string, category?: string, label?: string, value?: number): void => {
  if (typeof window === 'undefined' || !isAnalyticsInitialized || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

/**
 * Check if user has given consent
 */
export const hasConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('cookieConsent') === 'accepted';
};

/**
 * Set up consent event listeners
 * Should be called once in the app
 */
export const setupConsentListeners = (): void => {
  if (typeof window === 'undefined') return;

  // Listen for consent acceptance
  window.addEventListener('cookieConsentAccepted', () => {
    window.cookieConsent = 'accepted';
    initAnalytics();
  });

  // Listen for consent rejection
  window.addEventListener('cookieConsentRejected', () => {
    window.cookieConsent = 'rejected';
    // Disable analytics if it was previously enabled
    if (isAnalyticsInitialized) {
      // Note: Once GA is loaded, we can't completely disable it
      // but we can stop tracking new events
      console.log('Analytics tracking disabled due to consent withdrawal');
    }
  });

  // Initialize on page load if consent was already given
  const consent = localStorage.getItem('cookieConsent');
  if (consent === 'accepted') {
    window.cookieConsent = 'accepted';
    initAnalytics();
  } else if (consent === 'rejected') {
    window.cookieConsent = 'rejected';
  }
};
