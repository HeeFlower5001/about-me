'use client';

import { useI18n } from '@/app/i18n-provider';
import { useEffect } from 'react';

export function LocaleHandler() {
  const { locale } = useI18n();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
