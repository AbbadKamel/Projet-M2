import { useMemo } from 'react';
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
  const navigationTabs = useMemo(
    () => [
      { label: 'Aperçu', icon: <IconOverview />, active: true },
      { label: 'Mes cours', icon: <IconBook /> },
      { label: 'Notes', icon: <IconNotes /> },
      { label: 'Apprenants', icon: <IconUsers /> },
    ],
    [],
  );

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

  return (
    <FormateurLayout>
      <section className="flex flex-col gap-8">
        <header className="rounded-3xl bg-white/80 p-8 shadow-sm backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-500">Bonjour Sophie</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Espace Formateur</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Retrouvez vos indicateurs clés, vos prochaines sessions et accédez rapidement aux actions les plus fréquentes pour vos
            apprenants.
          </p>
        </header>

        <AdminNavigationTabs items={navigationTabs} />

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
      </section>
    </FormateurLayout>
  );
};

export default FormateurPage;
