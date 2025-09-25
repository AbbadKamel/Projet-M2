import { useMemo, useState } from 'react';
import AdminNavigationTabs from '../components/AdminNavigationTabs';
import DashboardCard from '../components/DashboardCard';
import QuickActionButton from '../components/QuickActionButton';
import UpcomingCourseCard from '../components/UpcomingCourseCard';
import FormateurLayout from '../templates/FormateurLayout';

const IconOverview = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 3.333C5.833 3.333 2.275 6.108 1 10c1.275 3.892 4.833 6.667 9 6.667s7.725-2.775 9-6.667c-1.275-3.892-4.833-6.667-9-6.667Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 6.667c-1.842 0-3.333 1.492-3.333 3.333"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconBook = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.333 4.167A1.667 1.667 0 0 1 5 2.5h9.167a1.667 1.667 0 0 1 1.666 1.667v11.666A1.667 1.667 0 0 0 14.167 17.5H5A1.667 1.667 0 0 0 3.333 15.833V4.167Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M3.333 6.667H16.667" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.5 10h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCalendar = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="2.5"
      y="3.333"
      width="15"
      height="14.167"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path d="M2.5 7.5h15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M6.667 2.5v2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M13.333 2.5v2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconNotes = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 2.5h7.5L15 5v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 15V5A2.5 2.5 0 0 1 5 2.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7.5 10H12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M7.5 13.333h2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconUsers = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8.333" cy="7.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M12.5 17.5c0-2.301-1.866-4.167-4.167-4.167C6.033 13.333 4.167 15.199 4.167 17.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.75 8.75a2.083 2.083 0 1 0 0-4.166"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.833 17.5a3.333 3.333 0 0 0-3.333-3.333"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 2.5 11.944 7l4.389.333-3.333 3 1 4.5L10 12.917 6 14.833l1-4.5-3.333-3L8.056 7 10 2.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconPlus = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 4.167v11.667" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.167 10h11.666" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconEdit = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m11.667 4.167 4.166 4.166-8.333 8.334H3.333v-4.167l8.334-8.333Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="m10 5.833 4.167 4.167" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconClipboard = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.333 3.333h.834a1.667 1.667 0 0 1 1.666 1.667v10a1.667 1.667 0 0 1-1.666 1.667H5.833A1.667 1.667 0 0 1 4.167 15V5A1.667 1.667 0 0 1 5.833 3.333h.834"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="7.5" y="2.5" width="5" height="2.5" rx="1.25" stroke="currentColor" strokeWidth="1.6" />
    <path d="M7.5 9.167h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M7.5 12.5h3.333" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const FormateurPage = () => {
  const [activeTab, setActiveTab] = useState('Aperçu');

  const navigationTabs = useMemo(
    () => [
      { label: 'Aperçu', icon: <IconOverview />, active: activeTab === 'Aperçu', onClick: () => setActiveTab('Aperçu') },
      { label: 'Mes cours', icon: <IconBook />, active: activeTab === 'Mes cours', onClick: () => setActiveTab('Mes cours') },
      { label: 'Notes', icon: <IconNotes />, active: activeTab === 'Notes', onClick: () => setActiveTab('Notes') },
      {
        label: 'Apprenants',
        icon: <IconUsers />,
        active: activeTab === 'Apprenants',
        onClick: () => setActiveTab('Apprenants'),
      },
    ],
    [activeTab],
  );

  const headerContent = useMemo(() => {
    if (activeTab === 'Mes cours') {
      return {
        eyebrow: 'Mes cours',
        title: 'Gestion de vos sessions',
        description:
          'Consultez vos cours programmés, accédez à l’historique des sessions passées et préparez les prochaines animations.',
      } as const;
    }

    if (activeTab === 'Notes') {
      return {
        eyebrow: 'Notes',
        title: 'Suivi des évaluations',
        description:
          'Retrouvez les copies corrigées, assurez le suivi des notes attribuées et identifiez les apprenants à relancer.',
      } as const;
    }

    if (activeTab === 'Apprenants') {
      return {
        eyebrow: 'Apprenants',
        title: 'Accompagnement des apprenants',
        description:
          'Analysez la progression des apprenants, organisez des points individuels et planifiez vos actions de coaching.',
      } as const;
    }

    return {
      eyebrow: 'Bonjour Sophie',
      title: 'Espace Formateur',
      description:
        'Retrouvez vos indicateurs clés, vos prochaines sessions et accédez rapidement aux actions les plus fréquentes pour vos apprenants.',
    } as const;
  }, [activeTab]);

  const stats = useMemo(
    () => [
      { title: 'Cours créés', value: 12, description: 'Cours publiés cette année', accent: '#F59E0B', icon: <IconBook /> },
      { title: 'Mes cours', value: 5, description: 'Cours actifs dans votre planning', accent: '#F97316', icon: <IconCalendar /> },
      { title: 'Cours à venir', value: 3, description: 'Sessions prévues cette semaine', accent: '#FBBF24', icon: <IconCalendar /> },
      { title: 'Notes attribuées', value: 48, description: 'Copies évaluées ce mois-ci', accent: '#FDBA74', icon: <IconStar /> },
      { title: 'Apprenants', value: 87, description: 'Apprenants suivis actuellement', accent: '#FB923C', icon: <IconUsers /> },
    ],
    [],
  );

  const quickActions = useMemo(
    () => [
      { label: 'Créer un cours', description: 'Ajoutez un nouveau module à votre catalogue', icon: <IconPlus /> },
      { label: 'Gérer les notes', description: 'Attribuez ou modifiez les notes des apprenants', icon: <IconClipboard /> },
      { label: 'Mettre à jour un cours', description: 'Actualisez le contenu d’une session', icon: <IconEdit /> },
    ],
    [],
  );

  const upcomingCourses = useMemo(
    () => [
      {
        title: 'Atelier UX Design',
        date: 'Mercredi 10 Avril',
        time: '09:00 - 11:30',
        location: 'Salle B - Campus Lyon',
        participants: 18,
        accentColor: '#F59E0B',
      },
      {
        title: 'Sprint Agile Avancé',
        date: 'Jeudi 11 Avril',
        time: '14:00 - 17:00',
        location: 'Visio Microsoft Teams',
        participants: 22,
        accentColor: '#F97316',
      },
      {
        title: 'Coaching individuel',
        date: 'Vendredi 12 Avril',
        time: '10:00 - 11:00',
        location: 'Bureau 3.2',
        participants: 1,
        accentColor: '#FBBF24',
      },
    ],
    [],
  );

  const myCourses = useMemo(
    () => ({
      upcoming: [] as Array<{ title: string; date: string; time: string; location: string; participants: number }>,
      past: [
        {
          title: 'Introduction aux composants React',
          module: 'Sous bloc React',
          nextSession: {
            label: 'Premier cours : Les composants React',
            date: '15/03/2024',
            time: '10:00 - 12:00',
          },
          description:
            'Introduction aux composants React, props et JSX. Création de premiers composants fonctionnels.',
          location: 'Salle de formation A',
          participants: 13,
          resources: 'Slides de formation A',
        },
        {
          title: 'Les Hooks React',
          module: 'Sous bloc React',
          nextSession: {
            label: 'Premier cours : Les Hooks React',
            date: '18/03/2024',
            time: '09:30 - 11:30',
          },
          description: 'Comprendre useState et useEffect pour gérer l’état et les effets de bord dans vos applications.',
          location: 'Salle de formation B',
          participants: 16,
          resources: 'Supports interactifs & quiz de révision',
        },
      ],
    }),
    [],
  );

  const notesData = useMemo(
    () => ({
      courses: [
        {
          id: 'react-hooks',
          title: 'Les Hooks React',
          completedOn: '18/03/2024',
          average: 15.6,
          median: 16,
          pending: 2,
          bestPerformer: 'Camille Dupont',
          improvement: '+1.2 vs précédente session',
          distribution: {
            excellent: 5,
            good: 8,
            needsSupport: 3,
          },
          notes: [
            {
              student: 'Camille Dupont',
              grade: '18/20',
              status: 'Validée',
              comment: 'Excellente maîtrise des hooks personnalisés et mise en pratique impeccable.',
            },
            {
              student: 'Louis Martin',
              grade: '15/20',
              status: 'Validée',
              comment: 'Bonne compréhension globale, quelques pistes d’optimisation à approfondir.',
            },
            {
              student: 'Amélie Girard',
              grade: '12/20',
              status: 'À réviser',
              comment: 'Des difficultés sur useEffect. Prévoir une session de rattrapage ciblée.',
            },
          ],
        },
        {
          id: 'intro-react',
          title: 'Introduction aux composants React',
          completedOn: '15/03/2024',
          average: 16.2,
          median: 16,
          pending: 1,
          bestPerformer: 'Nora Lefèvre',
          improvement: '+0.8 vs précédente session',
          distribution: {
            excellent: 7,
            good: 6,
            needsSupport: 2,
          },
          notes: [
            {
              student: 'Nora Lefèvre',
              grade: '19/20',
              status: 'Validée',
              comment: 'Participation active et restitution parfaite des concepts de base.',
            },
            {
              student: 'Sofiane Haddad',
              grade: '14/20',
              status: 'Validée',
              comment: 'Bonnes notions générales, renforcer la pratique sur les props.',
            },
            {
              student: 'Lucie Bernard',
              grade: '11/20',
              status: 'À réviser',
              comment: 'Notions de JSX à consolider. Proposition d’un atelier supplémentaire.',
            },
          ],
        },
      ],
    }),
    [],
  );

  const [selectedNotesCourseId, setSelectedNotesCourseId] = useState(notesData.courses[0]?.id ?? '');

  const selectedNotesCourse = useMemo(
    () => notesData.courses.find((course) => course.id === selectedNotesCourseId),
    [notesData, selectedNotesCourseId],
  );


  return (
    <FormateurLayout>
      <section className="flex flex-col gap-8">
        <header className="rounded-3xl bg-white/80 p-8 shadow-sm backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-500">{headerContent.eyebrow}</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">{headerContent.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">{headerContent.description}</p>
        </header>

        <AdminNavigationTabs items={navigationTabs} />

        {activeTab === 'Aperçu' ? (
          <>
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {stats.map((item) => (
                <DashboardCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  value={item.value}
                  description={item.description}
                  accentColor={item.accent}
                />
              ))}
            </section>

            <section className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">Actions rapides</h2>
                  <p className="text-sm text-slate-500">Gagnez du temps sur les tâches essentielles de votre quotidien.</p>
                </div>
                <button
                  type="button"
                  className="rounded-full border border-amber-200 bg-white px-5 py-2 text-sm font-medium text-amber-600 shadow-sm transition hover:border-amber-300 hover:text-amber-700"
                >
                  Historique des actions
                </button>
              </div>
              <div className="flex flex-wrap gap-4">
                {quickActions.map((action) => (
                  <QuickActionButton
                    key={action.label}
                    icon={action.icon}
                    label={action.label}
                    description={action.description}
                    onClick={() => console.log(`${action.label} clicked`)}
                  />
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">Prochains cours</h2>
                  <p className="text-sm text-slate-500">Gardez une longueur d’avance sur vos prochaines interventions.</p>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white shadow transition hover:bg-amber-600"
                >
                  Voir le planning complet
                </button>
              </div>
              <div className="grid gap-4 lg:grid-cols-3">
                {upcomingCourses.map((course) => (
                  <UpcomingCourseCard key={course.title} {...course} />
                ))}
              </div>
            </section>
          </>
        ) : null}

        {activeTab === 'Mes cours' ? (
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">Cours à venir</h2>
                  <p className="text-sm text-slate-500">Visualisez les prochaines sessions prévues dans votre agenda.</p>
                </div>
                <button
                  type="button"
                  className="rounded-full border border-amber-200 bg-white px-5 py-2 text-sm font-medium text-amber-600 shadow-sm transition hover:border-amber-300 hover:text-amber-700"
                >
                  Programmer un cours
                </button>
              </div>
              {myCourses.upcoming.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {myCourses.upcoming.map((course) => (
                    <article
                      key={`${course.title}-${course.date}`}
                      className="relative overflow-hidden rounded-3xl border border-amber-100 bg-white/80 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <span className="absolute inset-y-0 left-0 w-1 rounded-full bg-amber-400" />
                      <div className="pl-4">
                        <h3 className="text-lg font-semibold text-slate-900">{course.title}</h3>
                        <p className="mt-1 text-sm text-slate-500">{course.date}</p>
                        <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 5h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
                              <path d="M8 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              <path d="M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            {course.time}
                          </span>
                          <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M12 21s7-5.686 7-11a7 7 0 0 0-14 0c0 5.314 7 11 7 11Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            {course.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            {course.participants} apprenants
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-amber-200 bg-white/70 p-10 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                    <IconCalendar />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-slate-900">Aucun cours programmé</p>
                    <p className="mt-1 text-sm text-slate-500">Ajoutez une nouvelle session ou consultez vos cours passés.</p>
                  </div>
                  <button
                    type="button"
                    className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white shadow transition hover:bg-amber-600"
                  >
                    Créer une session
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Cours passés</h2>
                <p className="text-sm text-slate-500">Retrouvez les détails de vos dernières interventions.</p>
              </div>
              <div className="flex flex-col gap-4">
                {myCourses.past.map((course) => (
                  <article
                    key={course.title}
                    className="rounded-3xl border border-amber-100 bg-white/80 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">{course.module}</p>
                        <h3 className="mt-1 text-lg font-semibold text-slate-900">{course.title}</h3>
                        <p className="mt-2 text-sm text-slate-500">{course.nextSession.label}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
                          {course.participants} apprenants
                        </span>
                        <span className="flex items-center gap-2 text-xs text-slate-400">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12 21s7-5.686 7-11a7 7 0 0 0-14 0c0 5.314 7 11 7 11Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                          {course.location}
                        </span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-slate-600">{course.description}</p>
                    <div className="mt-4 grid gap-4 text-sm text-slate-500 md:grid-cols-3">
                      <span className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3 5h18"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <rect
                            x="4"
                            y="5"
                            width="16"
                            height="15"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path d="M8 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        {course.nextSession.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 7v5l3 3"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        {course.nextSession.time}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 3h6l1 2h4v2h-1v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7H4V5h4l1-2Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path d="M9 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M9 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        {course.resources}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {activeTab === 'Notes' ? (
          <section className="flex flex-col gap-6">
            <div className="rounded-3xl border border-amber-100 bg-white/80 p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">Gestion des notes</h2>
                  <p className="text-sm text-slate-500">
                    Sélectionnez un cours terminé pour consulter les résultats et finaliser les copies restantes.
                  </p>
                </div>
                <label className="flex w-full flex-col gap-2 text-sm text-slate-600 md:w-80">
                  <span className="font-medium text-slate-700">Choisir un cours</span>
                  <select
                    value={selectedNotesCourseId}
                    onChange={(event) => setSelectedNotesCourseId(event.target.value)}
                    className="w-full rounded-xl border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  >
                    {notesData.courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            {selectedNotesCourse ? (
              <div className="flex flex-col gap-6">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <DashboardCard
                    icon={<IconStar />}
                    title="Moyenne de la session"
                    value={`${selectedNotesCourse.average.toString().replace('.', ',')}/20`}
                    description={selectedNotesCourse.improvement}
                    accentColor="#F59E0B"
                  />
                  <DashboardCard
                    icon={<IconBook />}
                    title="Médiane"
                    value={`${selectedNotesCourse.median}/20`}
                    description="Stabilité des résultats"
                    accentColor="#F97316"
                  />
                  <DashboardCard
                    icon={<IconClipboard />}
                    title="Copies en attente"
                    value={selectedNotesCourse.pending}
                    description="À corriger ou valider"
                    accentColor="#FBBF24"
                  />
                  <DashboardCard
                    icon={<IconUsers />}
                    title="Meilleure progression"
                    value={selectedNotesCourse.bestPerformer}
                    description="Apprenant à féliciter"
                    accentColor="#FB923C"
                  />
                </div>

                <div className="rounded-3xl border border-amber-100 bg-white/80 p-6 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Répartition des résultats</h3>
                      <p className="text-sm text-slate-500">
                        Session clôturée le {selectedNotesCourse.completedOn}.
                      </p>
                    </div>
                    <span className="rounded-full bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-amber-600">
                      {selectedNotesCourse.notes.length} apprenants évalués
                    </span>
                  </div>
                  <div className="mt-4 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-amber-100 bg-white p-4">
                      <p className="text-sm font-semibold text-amber-600">Excellent (&ge; 16)</p>
                      <p className="mt-2 text-2xl font-semibold text-slate-900">{selectedNotesCourse.distribution.excellent}</p>
                      <p className="text-xs text-slate-500">Apprenants à valoriser</p>
                    </div>
                    <div className="rounded-2xl border border-amber-100 bg-white p-4">
                      <p className="text-sm font-semibold text-amber-600">Bon (12-15)</p>
                      <p className="mt-2 text-2xl font-semibold text-slate-900">{selectedNotesCourse.distribution.good}</p>
                      <p className="text-xs text-slate-500">Résultats satisfaisants</p>
                    </div>
                    <div className="rounded-2xl border border-amber-100 bg-white p-4">
                      <p className="text-sm font-semibold text-amber-600">À suivre (&lt; 12)</p>
                      <p className="mt-2 text-2xl font-semibold text-slate-900">{selectedNotesCourse.distribution.needsSupport}</p>
                      <p className="text-xs text-slate-500">Prévoir un accompagnement</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-amber-100 bg-white/80 p-6 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-900">Détails par apprenant</h3>
                    <button
                      type="button"
                      className="rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow transition hover:bg-amber-600"
                    >
                      Exporter les notes
                    </button>
                  </div>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-amber-100">
                    <table className="min-w-full divide-y divide-amber-100 text-left text-sm">
                      <thead className="bg-amber-50/80 text-xs font-semibold uppercase tracking-wide text-amber-700">
                        <tr>
                          <th scope="col" className="px-4 py-3">Apprenant</th>
                          <th scope="col" className="px-4 py-3">Note</th>
                          <th scope="col" className="px-4 py-3">Statut</th>
                          <th scope="col" className="px-4 py-3">Commentaire</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-amber-50 bg-white/60">
                        {selectedNotesCourse.notes.map((note) => (
                          <tr key={note.student} className="transition hover:bg-amber-50/60">
                            <td className="px-4 py-3 font-medium text-slate-800">{note.student}</td>
                            <td className="px-4 py-3 text-slate-700">{note.grade}</td>
                            <td className="px-4 py-3">
                              <span
                                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                                  note.status === 'Validée'
                                    ? 'bg-emerald-100 text-emerald-700'
                                    : 'bg-amber-100 text-amber-700'
                                }`}
                              >
                                {note.status}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-slate-600">{note.comment}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-amber-200 bg-white/70 p-10 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                  <IconClipboard />
                </span>
                <div>
                  <p className="text-base font-semibold text-slate-900">Aucune session sélectionnée</p>
                  <p className="mt-1 text-sm text-slate-500">Choisissez un cours pour consulter les copies corrélées.</p>
                </div>
              </div>
            )}

          </section>
        ) : null}
      </section>
    </FormateurLayout>
  );
};

export default FormateurPage;
