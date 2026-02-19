import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Providers } from "./providers";
import { I18nProvider } from "./i18n-provider";
import { TabProvider } from "./tab-context";
import { LocaleHandler } from "./locale-handler";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

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
      <head>
        <meta name="viewport" content="width=2005" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.addEventListener('load', () => {
                  // 2005px 콘텐츠의 중앙 기준으로 초기 스크롤 위치 설정
                  const scrollPos = (2005 - window.innerWidth) / 2;
                  window.scrollTo(Math.max(0, scrollPos), 0);
                });
              }
            `,
          }}
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          as="style"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <I18nProvider>
            <TabProvider>
              <LocaleHandler />
              {/* 우측 상단 컨트롤 버튼 */}
              <div className="fixed top-6 right-6 z-50">
                <div className="flex items-center gap-4 rounded-2xl border-2 p-2 shadow-xl" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--card)' }}>
                  <ThemeToggle />
                  <div className="h-6 w-px" style={{ backgroundColor: 'var(--border-default)' }} />
                  <LanguageSwitcher />
                </div>
              </div>
              
              {children}
            </TabProvider>
          </I18nProvider>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
