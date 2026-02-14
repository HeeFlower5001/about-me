import { NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

const query = `
  query {
    user(login: "${GITHUB_USERNAME}") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  if (!GITHUB_TOKEN || !GITHUB_USERNAME) {
    return NextResponse.json(
      { error: 'GitHub credentials not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    if (data.errors) {
      return NextResponse.json(
        { error: data.errors[0].message },
        { status: 400 }
      );
    }

    const contributionData =
      data.data.user.contributionsCollection.contributionCalendar;

    // 데이터 변환: 날짜별 커밋 수 추출
    const contributions: { date: string; count: number }[] = [];
    contributionData.weeks.forEach((week: any) => {
      week.contributionDays.forEach((day: any) => {
        contributions.push({
          date: day.date,
          count: day.contributionCount,
        });
      });
    });

    return NextResponse.json({
      totalContributions: contributionData.totalContributions,
      contributions,
    });
  } catch (error) {
    console.error('GitHub API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub contributions' },
      { status: 500 }
    );
  }
}
