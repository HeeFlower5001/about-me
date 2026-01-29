'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { locales } from '@/i18n.config';

type Locale = (typeof locales)[number];

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ko');
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    const initialLocale = savedLocale || 'ko';
    setLocaleState(initialLocale);
    loadTranslations(initialLocale);
  }, []);

  const loadTranslations = async (lang: Locale) => {
    try {
      const res = await fetch(`/locales/${lang}.json`);
      const data = await res.json();
      setTranslations(data);
    } catch (error) {
      console.error('Failed to load translations:', error);
    }
  };

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    loadTranslations(newLocale);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === 'string' ? value : key;
  };

  if (!mounted) return null;

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
