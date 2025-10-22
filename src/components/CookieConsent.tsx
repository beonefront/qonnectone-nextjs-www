'use client';

import React, { useState, useEffect } from 'react';
import { PrimaryButton } from './ui/PrimaryButton';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');

    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsAnimating(false);

    // Emit custom event for analytics integration
    window.dispatchEvent(new CustomEvent('cookieConsentAccepted'));

    // Hide banner after animation
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsAnimating(false);

    // Emit custom event for analytics integration
    window.dispatchEvent(new CustomEvent('cookieConsentRejected'));

    // Hide banner after animation
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transform transition-transform duration-300 ease-out ${
        isAnimating ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white/60 backdrop-blur-sm border-t border-white/20 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Content */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm text-gray-700 leading-relaxed">
                Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym poziomie.
                Dalsze korzystanie ze strony oznacza, że akceptujesz&nbsp;
                <a
                  href="/polityka-prywatnosci"
                  className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  regulamin
                </a>.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
              <button
                onClick={handleReject}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200 border border-gray-300 rounded-md hover:border-gray-400 hover:bg-gray-50"
              >
                Odrzuć
              </button>
              <PrimaryButton onClick={handleAccept}>
                Akceptuj wszystkie
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
