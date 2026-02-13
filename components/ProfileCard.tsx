'use client';

import { useI18n } from '@/app/i18n-provider';
import { useState } from 'react';

export function ProfileCard() {
  const { t } = useI18n();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('HeeFlower5001@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <div className="sticky top-24 h-fit">
        <div className="rounded-2xl border-2 p-8 shadow-xl" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--card)' }}>
          {/* 프로필 이미지 */}
          <div className="mb-6 flex justify-center">
            <button
              onClick={() => setIsImageModalOpen(true)}
              className="relative w-full aspect-square max-w-[256px] rounded-2xl overflow-hidden group cursor-pointer border-2"
              style={{ borderColor: 'var(--border-default)' }}
            >
              <img 
                src="https://picsum.photos/512/512" 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform group-hover:scale-105" 
              />
              {/* 호버 오버레이 */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <svg 
                  className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </button>
          </div>

        {/* 이름 & 직책 */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
            {t('profile.name')}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Software Developer
          </p>
        </div>

        {/* 프로필 정보 */}
        <div className="space-y-3">
          {/* 생년월일 */}
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-secondary)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{t('profile.birthDate')}</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {t('profile.birthDateValue')}
              </p>
            </div>
          </div>

          {/* MBTI */}
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-secondary)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20a8 8 0 0116 0" />
            </svg>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{t('profile.mbti')}</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                INFJ
              </p>
            </div>
          </div>

          {/* 소속 조직 */}
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-secondary)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.5m0 0H9m11 0v-3.5a6.5 6.5 0 00-13 0V21" />
            </svg>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{t('profile.organization')}</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {t('profile.organizationName')}
              </p>
            </div>
          </div>

          {/* 위치 */}
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-secondary)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Location</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Incheon, South Korea
              </p>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="my-6 h-px" style={{ backgroundColor: 'var(--border-default)' }}></div>

        {/* 이메일 (구분선 아래) */}
        <div className="mb-6">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-secondary)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Email</p>
              <div className="flex items-center gap-2">
                <a href="mailto:HeeFlower5001@gmail.com" className="text-sm break-all" style={{ color: 'var(--text-secondary)' }}>
                  HeeFlower5001@gmail.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1 rounded-md border-2 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer"
                  style={{ 
                    borderColor: 'var(--border-default)', 
                    color: copied ? 'var(--accent-primary)' : 'var(--text-secondary)'
                  }}
                  aria-label="Copy email"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7a2 2 0 012-2h7a2 2 0 012 2v10a2 2 0 01-2 2h-7a2 2 0 01-2-2V7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9H5a2 2 0 00-2 2v8a2 2 0 002 2h7a2 2 0 002-2v-1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 링크 버튼들 */}
        <div className="flex flex-col gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg border-2 transition-colors hover:text-white"
            style={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)', backgroundColor: 'transparent' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--accent-primary)';
            }}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="font-medium w-20 text-left">GitHub</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg border-2 transition-colors hover:text-white"
            style={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)', backgroundColor: 'transparent' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--accent-primary)';
            }}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="font-medium w-20 text-left">Instagram</span>
          </a>
        </div>
      </div>
    </div>

    {/* 이미지 확대 모달 */}
    {isImageModalOpen && (
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={() => setIsImageModalOpen(false)}
      >
        <div 
          className="relative max-w-3xl max-h-[90vh] p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src="https://picsum.photos/512/512" 
            alt="Profile" 
            className="w-full h-full object-contain rounded-2xl shadow-2xl" 
          />
          
          {/* X 버튼 - 이미지 우측 상단 */}
          <button
            onClick={() => setIsImageModalOpen(false)}
            className="absolute -top-4 -right-4 p-1 rounded-full bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white shadow-lg transition-colors border-2 border-zinc-300 dark:border-zinc-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    )}
  </>
  );
}
