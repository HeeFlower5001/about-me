'use client';

import { useI18n } from '@/app/i18n-provider';

export default function SkillsPage() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold text-foreground">
        {t('skills.title')}
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        {t('skills.description')}
      </p>
    </div>
  );
}
