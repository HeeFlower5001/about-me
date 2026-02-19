'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { locales } from '@/i18n.config';
import koTranslations from '@/public/locales/ko.json';
import enTranslations from '@/public/locales/en.json';

type Locale = (typeof locales)[number];
type TranslationTree = Record<string, unknown>;

const translationsByLocale: Record<Locale, TranslationTree> = {
  ko: koTranslations as TranslationTree,
  en: enTranslations as TranslationTree,
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'ko';
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    return savedLocale || 'ko';
  });
  const translations = translationsByLocale[locale] ?? translationsByLocale.ko;

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations;

    for (const k of keys) {
      if (typeof value === 'string' || !value || typeof value !== 'object') {
        return key;
      }
      value = (value as Record<string, unknown>)[k];
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
