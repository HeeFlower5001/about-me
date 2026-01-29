'use client';

import { useI18n } from '@/app/i18n-provider';
import { useState, useEffect } from 'react';

export default function Home() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h1 className="text-5xl font-bold text-foreground mb-6">
          {t('home.title')}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
          {t('home.description')}
        </p>
      </div>
    </div>
  );
}
