'use client';

import { useI18n } from '@/app/i18n-provider';
import { localeNames } from '@/i18n.config';
import { useState, useEffect } from 'react';

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const languages = [
    { code: 'ko', label: '한국어' },
    { code: 'en', label: 'English' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all hover:scale-110"
      >
        {locale.toUpperCase()}
      </button>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div className="absolute top-full mt-3 right-0 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="rounded-lg border-2 border-zinc-400 bg-white/95 dark:bg-black/95 shadow-xl dark:border-zinc-600 backdrop-blur-md overflow-hidden">
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

