'use client';

import { useI18n } from '@/app/i18n-provider';
import { useState, useEffect } from 'react';
import { ProfileCard } from '@/components/ProfileCard';
import Header from '@/components/Header';
import { useTab } from '@/app/tab-context';

export default function Home() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const { activeTab } = useTab();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 mt-20">
      {/* 데스크톱: 좌우 레이아웃, 모바일: 세로 스택 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 왼쪽: 프로필 카드 (모바일에서는 상단) */}
        <div className="lg:col-span-4">
          <ProfileCard />
        </div>

        {/* 오른쪽: 헤더 & 컨텐츠 */}
        <div className="lg:col-span-8">
          {/* 헤더 */}
          <Header />

          {/* 컨텐츠 영역 */}
          <div className="mt-6 rounded-2xl border-2 border-zinc-300 bg-white dark:bg-zinc-900 dark:border-zinc-700 p-8 shadow-xl min-h-[500px]">
            {activeTab === 'about' && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                  {t('home.title')}
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {t('home.description')}
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">🎯 목표</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      사용자 경험을 최우선으로 생각하는 개발자가 되고자 합니다.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">💡 관심사</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      웹 프론트엔드 개발, UI/UX 디자인, 성능 최적화
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                  {t('skills.title')}
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                  {t('skills.description')}
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'].map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'GitHub', 'VS Code', 'Figma'].map((tool) => (
                        <span
                          key={tool}
                          className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                  {t('projects.title')}
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                  {t('projects.description')}
                </p>
                
                <div className="space-y-6">
                  <div className="p-6 rounded-xl border-2 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                      Portfolio Website
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                      Next.js와 Tailwind CSS를 사용한 개인 포트폴리오 사이트
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-1 bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded">Next.js</span>
                      <span className="text-xs px-2 py-1 bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded">TypeScript</span>
                      <span className="text-xs px-2 py-1 bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded">Tailwind</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'detail' && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                  {t('detail.title')}
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                  {t('detail.description')}
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">📧 연락처</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">contact@example.com</p>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">📍 위치</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">Seoul, South Korea</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
