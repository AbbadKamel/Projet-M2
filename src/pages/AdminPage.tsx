import { useMemo } from 'react';

import DashboardCard from '../components/DashboardCard';
import QuickActionButton from '../components/QuickActionButton';
import AdminLayout from '../templates/AdminLayout';

const IconStack = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 6.5L12 11L21 6.5L12 2Z" opacity="0.8" />
    <path d="M3 12L12 16.5L21 12" opacity="0.5" />
    <path d="M3 17.5L12 22L21 17.5" opacity="0.2" />
  </svg>
);

const IconModule = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="2" />
    <rect x="14" y="3" width="7" height="7" rx="2" opacity="0.6" />
    <rect x="3" y="14" width="7" height="7" rx="2" opacity="0.4" />
    <rect x="14" y="14" width="7" height="7" rx="2" opacity="0.2" />
  </svg>
);

const IconUsers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" />
    <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22" opacity="0.6" />
  </svg>
);

const IconBadge = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const IconPlus = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 4.16669V15.8334"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.16663 10H15.8333"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


  const stats = useMemo(
    () => [
      {
        title: 'Programmes',
        value: 12,
        description: 'Programmes actifs dans la plateforme',
        accent: '#6C5DD3',
        icon: <IconStack />,
      },
      {
        title: 'Modules',
        value: 28,
        description: 'Modules disponibles pour les apprenants',
        accent: '#56CCF2',
        icon: <IconModule />,
      },
      {
        title: 'Apprenants',
        value: 97,
        description: 'Apprenants inscrits cette semaine',
        accent: '#27AE60',
        icon: <IconUsers />,
      },
      {
        title: 'Badges',
        value: 7,
        description: 'Badges certifiants actifs',
        accent: '#F2994A',
        icon: <IconBadge />,
      },
    ],
    [],
  );

  const quickActions = useMemo(
    () => [
      {
        label: 'Nouveau Programme',
        description: 'Créer un nouveau parcours de formation',
        icon: <IconPlus />,
      },
      {
        label: 'Nouveau Module',
        description: 'Ajouter un module de formation',
        icon: <IconPlus />,
      },
      {
        label: 'Nouvel Apprenant',
        description: 'Inscrire un nouvel apprenant',
        icon: <IconPlus />,
      },
      {
        label: 'Nouveau Badge',
        description: 'Créer un badge de reconnaissance',
        icon: <IconPlus />,
      },
    ],
    [],
  );

  return (
    <AdminLayout>
      <section className="flex flex-col gap-8">
        <AdminNavigationTabs items={navigationTabs} />


        <header>
          <p className="text-sm font-medium uppercase tracking-wide text-primary">Aperçu</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Panel Administrateur</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Gestion centralisée de La Ruche Académie. Visualisez les indicateurs clés et préparez les actions à réaliser pour
            vos apprenants, formateurs et contenus.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Actions rapides</h2>
              <p className="text-sm text-slate-500">Créez du contenu ou gérez les apprenants en un clic.</p>
            </div>
            <button
              type="button"
              className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:border-primary hover:text-primary"
            >
              Historique
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
      </section>
    </AdminLayout>
  );
};

export default AdminPage;
