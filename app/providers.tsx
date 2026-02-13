'use client';

import { ThemeProvider, useTheme } from 'next-themes';
import { ReactNode, useEffect } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;

    const update = () => {
      const styles = getComputedStyle(root);

      const getNumber = (name: string, fallback: number) => {
        const value = styles.getPropertyValue(name).trim();
        const parsed = Number.parseFloat(value);
        return Number.isFinite(parsed) ? parsed : fallback;
      };

      const getCount = (name: string, fallback: number) => {
        const value = styles.getPropertyValue(name).trim();
        const parsed = Number.parseInt(value, 10);
        return Number.isFinite(parsed) ? parsed : fallback;
      };

      const random = (min: number, max: number) => min + Math.random() * (max - min);

      const buildLayer = (
        count: number,
        sizeMin: number,
        sizeMax: number,
        opacityMin: number,
        opacityMax: number
      ) => {
        const gradients: string[] = [];
        for (let i = 0; i < count; i += 1) {
          const x = random(0, 100).toFixed(2);
          const y = random(0, 100).toFixed(2);
          const size = random(sizeMin, sizeMax).toFixed(2);
          const opacity = random(opacityMin, opacityMax).toFixed(2);
          gradients.push(
            `radial-gradient(${size}px ${size}px at ${x}% ${y}%, rgba(var(--star-color), ${opacity}), transparent 60%)`
          );
        }
        return gradients.join(',');
      };

      const layer1 = buildLayer(
        getCount('--star-count-sm', 90),
        getNumber('--star-size-sm-min', 1.6),
        getNumber('--star-size-sm-max', 2.4),
        getNumber('--star-opacity-sm-min', 0.4),
        getNumber('--star-opacity-sm-max', 0.9)
      );

      const layer2 = buildLayer(
        getCount('--star-count-lg', 45),
        getNumber('--star-size-lg-min', 2.8),
        getNumber('--star-size-lg-max', 4.2),
        getNumber('--star-opacity-lg-min', 0.3),
        getNumber('--star-opacity-lg-max', 0.7)
      );

      root.style.setProperty('--star-layer-1', layer1);
      root.style.setProperty('--star-layer-2', layer2);
    };

    const frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [resolvedTheme]);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="theme">
      {children}
    </ThemeProvider>
  );
}
