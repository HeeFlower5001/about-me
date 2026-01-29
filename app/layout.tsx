import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Providers } from "./providers";
import { I18nProvider } from "./i18n-provider";
import { TabProvider } from "./tab-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "About Me",
  description: "나를 소개하는 포트폴리오 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <I18nProvider>
            <TabProvider>
              {/* 우측 상단 컨트롤 버튼 */}
              <div className="fixed top-6 right-6 z-50">
                <div className="flex items-center gap-4 rounded-full border-2 border-zinc-400 bg-white/90 px-6 py-3 shadow-xl backdrop-blur-md dark:border-zinc-600 dark:bg-black/90">
                  <ThemeToggle />
                  <div className="h-6 w-px bg-zinc-300 dark:bg-zinc-700" />
                  <LanguageSwitcher />
                </div>
              </div>
              
              {children}
            </TabProvider>
          </I18nProvider>
        </Providers>
      </body>
    </html>
  );
}
