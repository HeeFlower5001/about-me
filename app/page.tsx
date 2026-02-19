'use client';

import { useI18n } from '@/app/i18n-provider';
import { useState, useEffect } from 'react';
import { ProfileCard } from '@/components/ProfileCard';
import Header from '@/components/Header';
import { useTab } from '@/app/tab-context';
import { GitHubContributionGraph } from '@/components/GitHubContributionGraph';
import 'devicon/devicon.min.css';

export default function Home() {
  const { t, locale } = useI18n();
  const [mounted, setMounted] = useState(false);
  const { activeTab } = useTab();
  const [personalTab, setPersonalTab] = useState<'intro' | 'hobbies'>('intro');
  const [typedText, setTypedText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // 히스토리 데이터 - locale에 따라 다른 데이터 사용
  const educationData = locale === 'ko' ? [
    { school: '한국항공대학교', period: '2024. 03. - 현재', major: '소프트웨어학과', type: '일반편입' },
    { school: '군산대학교', period: '2020. 03 - 2021. 12', major: '컴퓨터정보공학과', type: '중퇴' },
    { school: '인천인제고등학교', period: '2016. 03 - 2019. 02' },
    { school: '인천성리중학교', period: '2014. 03 - 2016. 02' },
    { school: '인천성리초등학교', period: '2007. 03 - 2014. 02' },
  ] : [
    { school: 'Korea Aerospace University', period: 'Mar 2024 – Present', major: 'Software Engineering', type: 'Transfer' },
    { school: 'Kunsan National University', period: 'Mar 2020 – Dec 2021', major: 'Computer Science' },
    { school: 'Incheon Inje High School', period: 'Mar 2016 – Feb 2019' },
    { school: 'Incheon Sungri Middle School', period: 'Mar 2014 – Feb 2016' },
    { school: 'Incheon Sungri Elementary School', period: 'Mar 2007 – Feb 2014' },
  ];

  const certificationsData = locale === 'ko' ? [
    { name: '정보처리기사', date: '2025. 06.' },
  ] : [
    { name: 'Engineer Information Processing', date: 'Jun 2025' },
  ];

  const awardsData = locale === 'ko' ? [
    { title: 'AI융합 Capstone Design 우수상', date: '2025. 12.' },
    { title: '2025년 1학기 창업아이디어 경진대회 우수상', date: '2025. 06.' },
  ] : [
    { title: 'AI Convergence Capstone Design Excellence Award', date: 'Dec 2025' },
    { title: '2025 Spring Business Idea Competition Excellence Award', date: 'Jun 2025' },
  ];

  const projectsData = locale === 'ko' ? [
    {
      title: '스케치톡',
      period: '2025. 03. - 2025. 12.',
      description: '아이 대상 AI일기장 서비스',
      tech: ['-'],
      contribution: '...',
      note: 'AI융합 Capstone Design 우수상 수상',
      image: '',
      sourceCode: '',
      documentation: ''
    },
    {
      title: '똑똑',
      period: '2025. 09. - 2025. 12.',
      description: '아파트 층간소음 예방 솔루션',
      tech: ['-'],
      contribution: '...',
      note: '',
      image: '',
      sourceCode: '',
      documentation: ''
    },
    {
      title: '해드리오',
      period: '2025. 06. - 2025. 06.',
      description: '디지털 취약계층 정보 제공 애플리케이션',
      tech: ['-'],
      contribution: '...',
      note: '2025년 1학기 창업아이디어 경진대회 우수상 수상',
      image: '',
      sourceCode: '',
      documentation: ''
    },
    {
      title: '수강신청 미니 프로젝트',
      period: '2025. 06.',
      description: '어떻게 하면 수강신청을 더 빠르게 할 수 있을까?',
      tech: ['-'],
      contribution: '...',
      note: '',
      image: '',
      sourceCode: '',
      documentation: ''
    },
    {
      title: 'Checkid',
      period: '2024. 10. - 2024. 12.',
      description: '아이 대상 핸드폰 사용내역 리포트 제공 애플리케이션',
      tech: ['-'],
      contribution: '...',
      note: '',
      image: '',
      sourceCode: '',
      documentation: ''
    },
    {
      title: '자리있어',
      period: '2024. 10.',
      description: '실시간 좌석 확인 및 예약 서비스',
      tech: ['-'],
      contribution: '...',
      note: '',
      image: '',
      sourceCode: '',
      documentation: ''
    }
  ] : [
    {
      title: 'sketchTalk',
      period: '2025. 03. - 2025. 12.',
      description: 'AI diary service for children',
      tech: ['-'],
      contribution: '...',
      note: 'AI Convergence Capstone Design Excellence Award',
      image: '',
      sourceCode: '',
      documentation: ''
    },
    {
      title: 'TtokTtok',
      period: '2025. 09. - 2025. 12.',
      description: 'Apartment floor noise prevention solution',
      tech: ['-'],
      contribution: '...',
      note: '',
      image: '',
      sourceCode: '',
      documentation: ''
    },
    {
      title: 'Haedrio',
      period: '2025. 06. - 2025. 06.',
      description: 'Information app for digitally vulnerable users',
      tech: ['-'],
      contribution: '...',
      note: '2025 Spring Business Idea Competition Excellence Award',
      image: '',
      sourceCode: '',
      documentation: ''
    },
    {
      title: 'Course Registration Mini Project',
      period: '2025. 06.',
      description: 'How can course registration be made faster?',
      tech: ['-'],
      contribution: '...',
      note: '',
      image: '',
      sourceCode: '',
      documentation: ''
    },
    {
      title: 'Checkid',
      period: '2024. 10. - 2024. 12.',
      description: 'App providing phone usage reports for children',
      tech: ['-'],
      contribution: '...',
      note: '',
      image: '',
      sourceCode: '',
      documentation: ''
    },
    {
      title: 'Jari-isseo',
      period: '2024. 10.',
      description: 'Real-time seat availability and reservation service',
      tech: ['-'],
      contribution: '...',
      note: '',
      image: '',
      sourceCode: '',
      documentation: ''
    }
  ];

  const skillGroups: { title: string; items: { label: string; iconClass: string; color: string; gradient?: string }[] }[] = [
    {
      title: 'Language',
      items: [
        { label: 'Java', iconClass: 'devicon-java-plain', color: '#F89820' },
        { label: 'JavaScript', iconClass: 'devicon-javascript-plain', color: '#F7DF1E' },
        { label: 'Kotlin', iconClass: 'devicon-kotlin-plain', color: '#7F52FF' },
      ],
    },
    {
      title: 'FE',
      items: [
        { label: 'Android', iconClass: 'devicon-android-plain', color: '#3DDC84' },
        { label: 'React', iconClass: 'devicon-react-original', color: '#61DAFB' },
        { label: 'React Native', iconClass: 'devicon-react-original', color: '#61DAFB' },
        { label: 'Next.js', iconClass: 'devicon-nextjs-plain', color: '#000000' },
      ],
    },
    {
      title: 'BE',
      items: [
        { label: 'Spring Boot', iconClass: 'devicon-spring-plain', color: '#6DB33F' },
        { label: 'Express.js', iconClass: 'devicon-express-original', color: '#000000' },
        { label: 'Ktor', iconClass: 'devicon-kotlin-plain', color: '#7F52FF' },
      ],
    },
    {
      title: 'DB',
      items: [
        { label: 'MySQL', iconClass: 'devicon-mysql-plain', color: '#00758F' },
      ],
    },
    {
      title: 'Infra',
      items: [
        { label: 'AWS', iconClass: 'devicon-amazonwebservices-plain', color: '#FF9900' },
      ],
    },
    {
      title: 'Tool',
      items: [
        {
          label: 'IntelliJ',
          iconClass: 'devicon-intellij-plain',
          color: '#087CFA',
          gradient: 'linear-gradient(135deg, #000000 0%, #FE2857 22%, #FC801D 44%, #B1428A 66%, #007EFF 88%, #FFFFFF 100%)',
        },
        { label: 'Git', iconClass: 'devicon-git-plain', color: '#F1502F' },
        { label: 'VSCode', iconClass: 'devicon-vscode-plain', color: '#007ACC' },
      ],
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setTypedText('');
    setTypingIndex(0);
    setIsDeleting(false);
  }, [locale]);

  const typingPhrases = locale === 'ko'
    ? ['소프트웨어 개발자 김희승 입니다 !']
    : ['I am a software developer, Hee Seung Kim !'];

  const nameToHighlight = locale === 'ko' ? '김희승' : 'Hee Seung Kim';
  const renderTypedText = (text: string) => {
    const index = text.indexOf(nameToHighlight);
    if (index === -1) return <span>{text}</span>;
    return (
      <>
        {text.slice(0, index)}
        <span style={{ color: '#3b82f6' }}>{text.slice(index, index + nameToHighlight.length)}</span>
        {text.slice(index + nameToHighlight.length)}
      </>
    );
  };

  useEffect(() => {
    const currentText = typingPhrases[typingIndex % typingPhrases.length];
    let timeout: NodeJS.Timeout | undefined;

    if (!isDeleting && typedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1));
      }, 140);
    } else if (!isDeleting && typedText.length === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && typedText.length > 0) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length - 1));
      }, 40);
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
      setTypingIndex((prev) => (prev + 1) % typingPhrases.length);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [typedText, isDeleting, typingIndex, typingPhrases]);

  const introMessage = locale === 'ko'
    ? ['Spring 기반 서버 개발을 주력으로 하며,', '문제의 본질과 그 해결이 만들어내는 가치를 중요하게 생각합니다.']
    : ['I primarily focus on Spring-based backend development,', 'and value the impact created by addressing the core of a problem.'];

  const currentWork = locale === 'ko'
    ? ['AI를 활용한 비서 애플리케이션 개발', '과거 프로젝트 리팩토링 및 문서화']
    : ['Building an AI-powered assistant app', 'Refactoring and documenting past projects'];

  const personalTimeline = locale === 'ko'
    ? [
        { date: '2025. 09 ~ 현재', title: '키즈카페 근무', description: '' },
        { date: '2024. 05 ~ 2025. 02', title: '봉사활동', description: '인천시 지역아동센터' },
        { date: '2022. 06 ~ 2024. 02', title: '사회복무요원 근무', description: '인천시 지역아동센터' },
        { date: '2021. 03 ~ 2021. 12', title: '봉사활동', description: '군산대학교 봉사동아리 꼼지락\n군산시 지역아동센터' },
      ]
    : [
        { date: 'Sep 2025 ~ Present', title: 'Kids Cafe Staff', description: '' },
        { date: 'May 2024 ~ Feb 2025', title: 'Volunteer', description: 'Incheon Community Child Care Center' },
        { date: 'Jun 2022 ~ Feb 2024', title: 'Social Service Personnel', description: 'Incheon Community Child Care Center' },
        { date: 'Mar 2021 ~ Dec 2021', title: 'Volunteer', description: 'Kunsan University Volunteer Club "Ggomjirak"\nKunsan Community Child Care Center' },
      ];

  const hobbies = [
    { label: locale === 'ko' ? '자기개발' : 'Self Development', icon: '📚' },
    { label: locale === 'ko' ? '게임' : 'Game', icon: '🎮' },
    { label: locale === 'ko' ? 'OTT/애니메이션' : 'OTT/Animation', icon: '📺' },
    { label: locale === 'ko' ? '음악' : 'Music', icon: '🎧' },
    { label: locale === 'ko' ? '기타' : 'Guitar', icon: '🎸' },
  ];

  const personalTags = [
    { key: 'intro' as const, label: t('personal.tags.intro') },
    { key: 'hobbies' as const, label: t('personal.tags.hobbies') },
  ];

  const renderSkillItem = (item: { label: string; iconClass: string; color: string; gradient?: string }) =>
    item.gradient ? (
      <div key={item.label} className="rounded-lg p-[2px]" style={{ backgroundImage: item.gradient }}>
        <div
          className="flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-lg min-w-[100px]"
          style={{ backgroundColor: 'var(--surface)' }}
        >
          <i
            className={`${item.iconClass} text-4xl`}
            style={{
              backgroundImage: item.gradient,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}
          ></i>
          <span className="text-xs font-medium text-center" style={{ color: 'var(--text-secondary)' }}>
            {item.label}
          </span>
        </div>
      </div>
    ) : (
      <div
        key={item.label}
        className="flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-lg min-w-[100px]"
        style={{
          backgroundColor: 'var(--surface)',
          border: `2px solid ${item.color}`,
        }}
      >
        <i className={`${item.iconClass} text-4xl`} style={{ color: item.color }}></i>
        <span className="text-xs font-medium text-center" style={{ color: 'var(--text-secondary)' }}>
          {item.label}
        </span>
      </div>
    );

  if (!mounted) return null;

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 mt-20">
      {/* 데스크톱 레이아웃 고정 */}
      <div className="grid grid-cols-12 gap-8 items-start">
        {/* 왼쪽: 프로필 카드 (모바일에서는 상단) */}
        <div className="col-span-4 self-start h-fit">
          <ProfileCard />
        </div>

        {/* 오른쪽: 헤더 & 컨텐츠 */}
        <div className="col-span-8">
          {/* 헤더 */}
          <Header />

          {/* 컨텐츠 영역 */}
          <div className="mt-6 rounded-2xl border-2 p-8 shadow-xl" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--card)' }}>
            {activeTab === 'about' && (
              <div className="animate-in fade-in duration-300">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row items-center gap-6">
                  <div className="w-[220px] shrink-0">
                    <div className="rounded-2xl border-2 p-4 shadow-xl" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--surface)' }}>
                      <svg viewBox="0 0 240 160" className="w-full h-auto">
                        <rect x="28" y="22" width="184" height="104" rx="10" fill="var(--card)" stroke="var(--border-default)" strokeWidth="3" />
                        <rect x="42" y="36" width="156" height="76" rx="6" fill="var(--surface)" />
                        <rect x="18" y="128" width="204" height="12" rx="6" fill="var(--border-default)" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--foreground)' }}>
                        {t('home.title')}
                      </h2>
                      <div className="mt-3 text-3xl sm:text-4xl font-bold">
                        <span style={{ color: 'var(--foreground)' }}>{renderTypedText(typedText)}</span>
                        <span className="ml-1 inline-block w-[2px] h-8 align-[-0.2em] animate-pulse" style={{ backgroundColor: 'var(--accent-primary)' }} />
                      </div>
                    </div>
                    </div>
                  </div>

                  <div className="text-sm sm:text-base space-y-1" style={{ color: 'var(--text-secondary)' }}>
                    {introMessage.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                      {locale === 'ko' ? '현재 진행 중' : 'Currently working on'}
                    </h3>
                    <ul className="space-y-1 text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
                      {currentWork.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* GitHub Contribution Graph */}
                  <div className="mt-8">
                    <GitHubContributionGraph />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="animate-in fade-in duration-300">

                <div className="space-y-6">
                  {/* Education 카드 */}
                  <div className="p-6 rounded-xl border-2" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--card)' }}>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                      {t('history.education.title')}
                    </h3>
                    <div className="space-y-3">
                      {educationData.map((item: any, idx: number) => (
                        <div key={idx} className="p-3 rounded-lg" style={{ backgroundColor: 'var(--surface)' }}>
                          <div className="flex items-start gap-4">
                            <div className="min-w-0">
                              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                <span className="font-semibold" style={{ color: 'var(--foreground)' }}>{item.school}</span>
                                {item.major && (
                                  <>
                                    {'  '}
                                    {item.major}
                                    {item.type && ` (${item.type})`}
                                  </>
                                )}
                              </p>
                            </div>
                            <span className="ml-auto text-sm text-right whitespace-nowrap" style={{ color: 'var(--text-secondary)' }}>
                              {item.period}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications 카드 */}
                  <div className="p-6 rounded-xl border-2" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--card)' }}>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                      {t('history.certifications.title')}
                    </h3>
                    <div className="space-y-3">
                      {certificationsData.map((item: any, idx: number) => (
                        <div key={idx} className="p-3 rounded-lg" style={{ backgroundColor: 'var(--surface)' }}>
                          <div className="flex items-start gap-4">
                            <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{item.name}</p>
                            <span className="ml-auto text-sm text-right whitespace-nowrap" style={{ color: 'var(--text-secondary)' }}>
                              {item.date}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Awards 카드 */}
                  <div className="p-6 rounded-xl border-2" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--card)' }}>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                      {t('history.awards.title')}
                    </h3>
                    <div className="space-y-3">
                      {awardsData.map((item: any, idx: number) => (
                        <div key={idx} className="p-3 rounded-lg" style={{ backgroundColor: 'var(--surface)' }}>
                          <div className="flex items-start gap-4">
                            <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{item.title}</p>
                            <span className="ml-auto text-sm text-right whitespace-nowrap" style={{ color: 'var(--text-secondary)' }}>
                              {item.date}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="animate-in fade-in duration-300">
                
                <div className="space-y-6">
                  {skillGroups.map((group) => (
                    <div key={group.title} className="p-5 rounded-xl border-2" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--card)' }}>
                      <h3 className="font-semibold mb-4" style={{ color: 'var(--foreground)' }}>{group.title}</h3>
                      {group.title === 'BE' || group.title === 'FE' || group.title === 'Language' ? (
                        <div className="flex flex-wrap items-center gap-3">
                          {group.items
                            .filter((item) =>
                              group.title === 'BE'
                                ? item.label === 'Spring Boot'
                                : group.title === 'FE'
                                  ? item.label === 'Android'
                                  : item.label === 'Java'
                            )
                            .map(renderSkillItem)}
                          {group.items.some((item) =>
                            group.title === 'BE'
                              ? item.label === 'Spring Boot'
                              : group.title === 'FE'
                                ? item.label === 'Android'
                                : item.label === 'Java'
                          ) && group.items.some((item) =>
                            group.title === 'BE'
                              ? item.label !== 'Spring Boot'
                              : group.title === 'FE'
                                ? item.label !== 'Android'
                                : item.label !== 'Java'
                          ) && (
                            <span className="h-10 w-[2px] rounded-full" style={{ backgroundColor: 'var(--border-default)' }} />
                          )}
                          {group.items
                            .filter((item) =>
                              group.title === 'BE'
                                ? item.label !== 'Spring Boot'
                                : group.title === 'FE'
                                  ? item.label !== 'Android'
                                  : item.label !== 'Java'
                            )
                            .map(renderSkillItem)}
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-3">
                          {group.items.map(renderSkillItem)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="animate-in fade-in duration-300">
                
                <div className="space-y-6">
                  {projectsData.map((project, idx) => (
                    <div key={idx} className="p-6 rounded-xl border-2" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--card)' }}>
                      <div className="grid grid-cols-3 gap-6">
                        {/* 이미지 영역 */}
                        <div className="col-span-1">
                          <div className="w-full h-48 rounded-lg border-2 overflow-hidden bg-black" style={{ borderColor: 'var(--border-default)' }}>
                            {project.image && (
                              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            )}
                          </div>
                        </div>
                        
                        {/* 정보 영역 */}
                        <div className="col-span-2 flex flex-col justify-between">
                          {/* 내용 영역 */}
                          <div>
                            {/* 제목 및 기간 */}
                            <div>
                              <div className="flex items-start justify-between mb-3">
                                <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>{project.title}</h3>
                                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{project.period}</span>
                              </div>
                              
                              {/* 설명 */}
                              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
                            </div>

                            {/* 기술 스택 */}
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, tidx) => (
                                  <span key={tidx} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--surface)', color: 'var(--text-secondary)' }}>
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* 기여한 부분 */}
                          <div className="mb-3">
                            <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>👨‍💻 {t('projects.labels.contribution')}</p>
                            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{project.contribution}</p>
                          </div>

                          {/* 특이사항 */}
                          {project.note && (
                            <>
                              <hr style={{ borderColor: 'var(--border-default)', margin: '1rem 0' }} />
                              <div className="mb-4">
                                <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>⭐ {t('projects.labels.note')}</p>
                                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{project.note}</p>
                              </div>
                            </>
                          )}

                          {/* 링크 아이콘 - 맨 아래 오른쪽 */}
                          <div className="flex gap-2 mt-6 justify-end">
                            {project.sourceCode ? (
                              <a 
                                href={project.sourceCode} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-2 rounded-md border-2 transition-all cursor-pointer"
                                style={{ 
                                  borderColor: 'var(--accent-primary)', 
                                  color: 'var(--accent-primary)',
                                  backgroundColor: 'transparent'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
                                  e.currentTarget.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'transparent';
                                  e.currentTarget.style.color = 'var(--accent-primary)';
                                }}
                                aria-label="Source Code"
                                title="소스 코드"
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                              </a>
                            ) : (
                              <button 
                                disabled
                                className="p-2 rounded-md border-2 cursor-not-allowed opacity-50"
                                style={{ 
                                  borderColor: 'var(--accent-primary)', 
                                  color: 'var(--accent-primary)'
                                }}
                                aria-label="Source Code"
                                title="준비 중"
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                              </button>
                            )}
                            
                            {project.documentation ? (
                              <a 
                                href={project.documentation} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-2 rounded-md border-2 transition-all cursor-pointer"
                                style={{ 
                                  borderColor: 'var(--accent-primary)', 
                                  color: 'var(--accent-primary)',
                                  backgroundColor: 'transparent'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
                                  e.currentTarget.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'transparent';
                                  e.currentTarget.style.color = 'var(--accent-primary)';
                                }}
                                aria-label="Documentation"
                                title="문서"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </a>
                            ) : (
                              <button 
                                disabled
                                className="p-2 rounded-md border-2 cursor-not-allowed opacity-50"
                                style={{ 
                                  borderColor: 'var(--accent-primary)', 
                                  color: 'var(--accent-primary)'
                                }}
                                aria-label="Documentation"
                                title="준비 중"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'personal' && (
              <div className="animate-in fade-in duration-300">

                <div className="flex gap-2 mb-6">
                  {personalTags.map((tag) => (
                    <button
                      key={tag.key}
                      onClick={() => setPersonalTab(tag.key)}
                      className="px-4 py-3 rounded-lg border-2 text-sm sm:text-base font-semibold transition-all whitespace-nowrap min-w-[96px] text-center"
                      style={
                        personalTab === tag.key
                          ? { backgroundColor: 'var(--accent-primary)', borderColor: 'var(--accent-primary)', color: 'white' }
                          : { backgroundColor: 'var(--surface)', borderColor: 'var(--border-default)', color: 'var(--foreground)' }
                      }
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  {personalTab === 'intro' && (
                    <div>
                      {/* 소개 문구 */}
                      <div className="space-y-4 mb-10">
                        {locale === 'ko' ? (
                          <>
                            <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                              우연히 시작한 아이들과의 시간이 깊이 있는 성장과 경험으로 이어졌습니다.
                            </p>
                            <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                              아이들과의 시간을 더 잘 만들어가기 위해,
                              아이들 앞에서 어떤 어른으로 서야 하는지 계속해서 고민하고 있습니다.
                            </p>
                            <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                              이러한 고민과 경험을 바탕으로,
                              아이들과 관련된 다양한 프로젝트에도 도전해보고 싶습니다.
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                              The time I spent with children, which began by chance,
                              has led to deep and meaningful growth and experience.
                            </p>
                            <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                              To create better moments with children,
                              I continuously reflect on what kind of adult I should be in front of them.
                            </p>
                            <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                              Based on these reflections and experiences,
                              I want to take on diverse projects related to children.
                            </p>
                          </>
                        )}
                      </div>

                      {/* 통계 */}
                      <div className="flex mb-12">
                        <div className="flex items-end gap-4">
                          {/* SVG 별 아이콘 */}
                          <svg 
                            width="64" 
                            height="64" 
                            viewBox="0 0 24 24"
                            style={{ color: 'var(--foreground)' }}
                          >
                            <path
                              fill="currentColor"
                              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                            />
                          </svg>
                          
                          {/* +4 YEARS와 +180 VOLUNTEER HOURS */}
                          <div className="flex gap-8">
                            <div className="flex flex-col items-end">
                              <div className="text-4xl font-bold leading-none" style={{ color: 'var(--foreground)' }}>
                                +4
                              </div>
                              <div className="text-xs font-semibold tracking-wide mt-1" style={{ color: 'var(--text-secondary)' }}>
                                Years
                              </div>
                            </div>
                            
                            <div className="flex flex-col items-end">
                              <div className="text-4xl font-bold leading-none" style={{ color: 'var(--foreground)' }}>
                                +180
                              </div>
                              <div className="text-xs font-semibold tracking-wide mt-1" style={{ color: 'var(--text-secondary)' }}>
                                Volunteer Time
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 타임라인 */}
                      <div className="relative">
                        {/* 타임라인 아이템들 */}
                        <div className="space-y-12">
                          {personalTimeline.map((item, idx) => (
                            <div key={idx} className="relative flex gap-6">
                              {/* 세로 라인 (현재 별에서 다음 별까지, 마지막 제외) */}
                              {idx < personalTimeline.length - 1 && (
                                <div 
                                  className="absolute w-0.5" 
                                  style={{ 
                                    backgroundColor: 'var(--border-default)',
                                    left: '9px',
                                    top: '20px',
                                    height: 'calc(100% + 3rem)'
                                  }}
                                />
                              )}
                              
                              {/* 별 */}
                              <div className="flex items-start pt-1">
                                <svg 
                                  className="relative z-10 flex-shrink-0" 
                                  width="20" 
                                  height="20" 
                                  viewBox="0 0 24 24"
                                  style={{ color: 'var(--foreground)' }}
                                >
                                  <path
                                    fill="currentColor"
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                  />
                                </svg>
                              </div>
                              
                              {/* 컨텐츠 */}
                              <div className="flex-1">
                                <h4 className="text-lg font-bold mb-1" style={{ color: 'var(--foreground)' }}>
                                  {item.title}
                                </h4>
                                <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                                  {item.date}
                                </p>
                                {item.description && (
                                  <p className="text-sm" style={{ color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {personalTab === 'hobbies' && (
                    <div className="space-y-6">
                      {/* 자기개발 (1열) */}
                      <div className="flex justify-start">
                        <div
                          className="flex flex-col items-center justify-center gap-2 px-8 py-6 rounded-lg border-2 w-[180px] h-[150px]"
                          style={{
                            borderColor: 'var(--border-default)',
                            backgroundColor: 'var(--surface)',
                          }}
                        >
                          <span className="text-4xl">{hobbies[0].icon}</span>
                          <span className="text-sm font-medium text-center" style={{ color: 'var(--text-secondary)' }}>
                            {hobbies[0].label}
                          </span>
                        </div>
                      </div>
                      
                      {/* 나머지 취미 (4열) */}
                      <div className="grid grid-cols-4 gap-8">
                        {hobbies.slice(1).map((hobby) => (
                          <div
                            key={hobby.label}
                            className="flex flex-col items-center justify-center gap-2 px-8 py-6 rounded-lg border-2 w-[180px] h-[150px]"
                            style={{
                              borderColor: 'var(--border-default)',
                              backgroundColor: 'var(--surface)',
                            }}
                          >
                            <span className="text-4xl">{hobby.icon}</span>
                            <span className="text-sm font-medium text-center" style={{ color: 'var(--text-secondary)' }}>
                              {hobby.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
