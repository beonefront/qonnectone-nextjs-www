'use client';

import { useEffect } from 'react';
import { setupConsentListeners } from '@/utils/analytics';

export const AnalyticsProvider: React.FC = () => {
  useEffect(() => {
    setupConsentListeners();
  }, []);

  return null;
};
