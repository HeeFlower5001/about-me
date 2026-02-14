"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/app/i18n-provider";
import { useTab } from "@/app/tab-context";

export default function Header() {
  const { activeTab, setActiveTab } = useTab();
  const { t } = useI18n();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { 
      name: "Home", 
      tab: "about" as const,
      label: t("nav.home"),
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      name: "History", 
      tab: "history" as const,
      label: t("nav.history"),
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3v5h5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13h8" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17h8" />
        </svg>
      )
    },
    { 
      name: "Skills", 
      tab: "skills" as const,
      label: t("nav.skills"),
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      name: "Projects", 
      tab: "projects" as const,
      label: t("nav.projects"),
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      )
    },
  ];

  const auxItem = {
    name: "Personal",
    tab: "personal" as const,
    label: t("nav.personal"),
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20a8 8 0 0116 0" />
      </svg>
    )
  };

  return (
    <div className="rounded-2xl border-2 p-2 shadow-xl" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--card)' }}>
      <nav className="flex items-center gap-3">
        <ul className="flex gap-2 w-full">
          {navItems.map((item) => (
            <li 
              key={item.tab}
              className="relative flex-1"
              onMouseEnter={() => setHoveredItem(item.tab)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button
                onClick={() => setActiveTab(item.tab)}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                  activeTab === item.tab
                    ? 'text-white dark:text-white shadow-lg'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                }`}
                style={activeTab === item.tab ? { backgroundColor: 'var(--accent-primary)' } : {}}
              >
                <span className="flex items-center justify-center w-7 h-7">{item.icon}</span>
              </button>
              
              {/* 커스텀 툴팁 */}
              {hoveredItem === item.tab && (
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-2 duration-200 z-50 pointer-events-none">
                  <div className="whitespace-nowrap rounded-md border-2 border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 px-3 py-1.5 text-sm font-medium text-zinc-900 dark:text-white shadow-lg">
                    {item.label}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div
          className="relative"
          onMouseEnter={() => setHoveredItem(auxItem.tab)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button
            onClick={() => setActiveTab(auxItem.tab)}
            className={`grid grid-cols-[16px_1fr] items-center gap-2 px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all w-[112px] ${
              activeTab === auxItem.tab
                ? 'text-white shadow-md'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800'
            }`}
            style={
              activeTab === auxItem.tab
                ? { backgroundColor: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }
                : { borderColor: 'var(--border-default)' }
            }
          >
            <span className="flex items-center justify-center w-4 h-4">{auxItem.icon}</span>
            <span className="inline whitespace-nowrap text-center">{auxItem.label}</span>
          </button>

          {hoveredItem === auxItem.tab && (
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-2 duration-200 z-50 pointer-events-none">
              <div className="whitespace-nowrap rounded-md border-2 border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 px-3 py-1.5 text-sm font-medium text-zinc-900 dark:text-white shadow-lg">
                {auxItem.label}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
