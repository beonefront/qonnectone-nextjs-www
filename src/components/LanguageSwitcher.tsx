'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { locales, type Locale } from '@/i18n/locales';

const localeNames: Record<Locale, string> = {
  pl: 'PL',
  en: 'EN',
  ua: 'UA',
};

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            locale === loc
              ? 'bg-primary text-white'
              : 'bg-white/60 text-gray-700 hover:bg-white/80'
          }`}
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  );
}

