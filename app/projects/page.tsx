'use client';

import { useI18n } from '@/app/i18n-provider';
import { useState, useEffect } from 'react';

export default function ProjectsPage() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold text-foreground">
        {t('projects.title')}
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        {t('projects.description')}
      </p>
    </div>
  );
}
