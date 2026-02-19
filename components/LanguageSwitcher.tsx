'use client';

import { useI18n } from '@/app/i18n-provider';
import { useState } from 'react';

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'ko', label: '한국어' },
    { code: 'en', label: 'English' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 px-3 py-1.5 text-sm font-medium text-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all hover:scale-110"
      >
        {locale.toUpperCase()}
      </button>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="rounded-lg border-2 border-zinc-400 bg-white dark:bg-zinc-950 shadow-xl dark:border-zinc-600 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLocale(lang.code as 'ko' | 'en');
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2.5 text-sm font-medium text-left transition-colors whitespace-nowrap ${
                  locale === lang.code
                    ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

