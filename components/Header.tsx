"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useI18n } from "@/app/i18n-provider";

export default function Header() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { 
      name: "Home", 
      path: "/",
      label: t("nav.home"),
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      name: "Skills", 
      path: "/skills",
      label: t("nav.skills"),
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      name: "Projects", 
      path: "/projects",
      label: t("nav.projects"),
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      )
    },
    { 
      name: "Detail", 
      path: "/detail",
      label: t("nav.detail"),
      icon: (
        <svg className="w-7 h-7" viewBox="0 -960 960 960" fill="currentColor">
          <path d="M838-393q5-23 0-46t-15-45q-17 16-30 35.5T775-406q-5 23 .5 45.5T790-316q17-16 30-35t18-42ZM207-626q19 19 43.5 25t47.5-2l-19-19q-18-18-43-24.5t-48 1.5l19 19Zm73-180-79 78q36-3 71.5 9t63.5 40l19 19q8-23 3-48t-25-44l-53-54ZM823-80 357-544q-49 30-107 23.5T150-569L40-680l240-239 110 110q43 43 48.5 101T414-601l289 289q-8-26-10-54t3-56q6-30 20.5-56t34-48.5q19.5-22.5 44.5-41t52-32.5q39 48 60 105t9 117q-11 51-42.5 91T797-218l82 82-56 56ZM310-650Zm334 166-56-57 212-212v-47h-47L541-588l-57-56 236-236h160v160L644-484ZM142-92l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 48-48 57 56-48 48 47 47 48-48 56 57-48 48 5 4q23 23 23 57t-23 57l-28 28-88-88L198-92q-12 12-28 12t-28-12Z"/>
        </svg>
      )
    },
  ];

  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-10 rounded-full border-2 border-zinc-400 bg-white/90 px-10 py-5 shadow-xl backdrop-blur-md dark:border-zinc-600 dark:bg-black/90">
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li 
              key={item.path}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.path)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={item.path}
                className={`flex items-center gap-2 text-sm font-medium transition-all hover:scale-110 ${
                  pathname === item.path
                    ? "text-zinc-900 dark:text-zinc-50"
                    : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                {item.icon}
              </Link>
              
              {/* 커스텀 툴팁 */}
              {hoveredItem === item.path && (
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="whitespace-nowrap rounded-md border-2 border-zinc-400 dark:border-zinc-600 bg-white dark:bg-zinc-900 px-3 py-1.5 text-sm font-medium text-zinc-900 dark:text-white shadow-lg">
                    {item.label}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
