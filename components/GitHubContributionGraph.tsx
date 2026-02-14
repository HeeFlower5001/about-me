'use client';

import { useEffect, useState } from 'react';

interface ContributionDay {
  date: string;
  count: number;
}

interface ContributionData {
  totalContributions: number;
  contributions: ContributionDay[];
}

export function GitHubContributionGraph() {
  const [data, setData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch('/api/github/contributions');
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  if (loading) {
    return null;
  }

  if (error || !data) {
    return (
      <div className="rounded-lg p-6" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="h-40 flex items-center justify-center">
          <span style={{ color: 'var(--text-secondary)' }}>데이터를 불러올 수 없습니다</span>
        </div>
      </div>
    );
  }

  // 최근 52주 데이터
  const now = new Date();
  now.setHours(0, 0, 0, 0); // 시간 정보 제거로 정확한 날짜 비교

  const contributionMap = new Map<string, number>();
  data.contributions.forEach(({ date, count }) => {
    contributionMap.set(date, count);
  });

  // 그리드 생성: 7행(일요일~토요일) × 52열(주)
  const weeks: Array<Array<{ date: string; count: number }>> = [];

  // 오늘부터 52주 전 계산
  const startDate = new Date(now);
  startDate.setDate(now.getDate() - 364); // 52주 = 364일

  // 52주 반복
  for (let w = 0; w < 52; w++) {
    const week: Array<{ date: string; count: number }> = [];
    for (let d = 0; d < 7; d++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + w * 7 + d);
      const dateStr = currentDate.toISOString().split('T')[0];

      const count = contributionMap.get(dateStr) || 0;

      week.push({ date: dateStr, count });
    }
    weeks.push(week);
  }

  // 최대 커밋 수 (색상 강도 계산용)
  const maxCount = Math.max(...Array.from(contributionMap.values()), 1);

  // 색상 결정
  const getColor = (count: number): string => {
    if (count === 0) return 'var(--border-default)';

    const intensity = count / maxCount;
    return `hsla(215, 100%, 52%, ${0.4 + intensity * 0.6})`;
  };

  return (
    <div className="flex gap-0.5" style={{ width: 'fit-content' }}>
      {weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="flex flex-col gap-0.5">
          {week.map((day, dayIndex) => (
            <div
              key={`${weekIndex}-${dayIndex}`}
              className="rounded-sm"
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: getColor(day.count),
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
