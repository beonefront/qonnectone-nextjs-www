import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { locales, type Locale } from './locales';

// Import all messages statically
import plMessages from '../messages/pl.json';
import enMessages from '../messages/en.json';
import uaMessages from '../messages/ua.json';

const messages = {
  pl: plMessages,
  en: enMessages,
  ua: uaMessages
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messages[locale as Locale]
  };
});

