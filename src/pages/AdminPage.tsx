import { useMemo, useState } from 'react';
import AdminNavigationTabs from '../components/AdminNavigationTabs';
import DashboardCard from '../components/DashboardCard';
import QuickActionButton from '../components/QuickActionButton';
import AdminLayout from '../templates/AdminLayout';

// Composant icône pour l'aperçu (œil)
const IconOverview = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 3.3335C5.83333 3.3335 2.275 6.1085 1 10.0002C2.275 13.8918 5.83333 16.6668 10 16.6668C14.1667 16.6668 17.725 13.8918 19 10.0002C17.725 6.1085 14.1667 3.3335 10 3.3335Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 6.6665C8.15833 6.6665 6.66666 8.15817 6.66666 9.99984"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Composant icône pour les programmes (pile)
const IconStack = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 6.5L12 11L21 6.5L12 2Z" opacity="0.8" />
    <path d="M3 12L12 16.5L21 12" opacity="0.5" />
    <path d="M3 17.5L12 22L21 17.5" opacity="0.2" />
  </svg>
);

// Composant icône pour les modules (grille)
const IconModule = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="2" />
    <rect x="14" y="3" width="7" height="7" rx="2" opacity="0.6" />
    <rect x="3" y="14" width="7" height="7" rx="2" opacity="0.4" />
    <rect x="14" y="14" width="7" height="7" rx="2" opacity="0.2" />
  </svg>
);

// Composant icône pour les utilisateurs/apprenants
const IconUsers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" />
    <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22" opacity="0.6" />
  </svg>
);

// Composant icône pour les badges (étoile)
const IconBadge = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

// Composant icône pour ajouter (plus)
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


// Composant icône pour les signets/badges (marque-page)
const IconBookmarks = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.00033 17.5002L10.0003 14.5835L15.0003 17.5002V4.5835C15.0003 3.66299 14.2549 2.91683 13.3337 2.91683H6.667C5.74578 2.91683 5.00033 3.66299 5.00033 4.5835V17.5002Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.75 12.75L5.25 5.25"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.75 12.75H12.75V6.75"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconEdit = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.75 3.375H4.5C3.67157 3.375 3 4.04657 3 4.875V13.125C3 13.9534 3.67157 14.625 4.5 14.625H12.75C13.5784 14.625 14.25 13.9534 14.25 13.125V7.875"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.75 2.625L15.375 5.25L9 11.625H6.375V9L12.75 2.625Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('Aperçu');


  const navigationTabs = useMemo(
    () => [
      { label: 'Aperçu', icon: <IconOverview />, active: activeTab === 'Aperçu', onClick: () => setActiveTab('Aperçu') },
      { label: 'Programmes', icon: <IconStack />, active: activeTab === 'Programmes', onClick: () => setActiveTab('Programmes') },
      { label: 'Modules', icon: <IconModule />, active: activeTab === 'Modules', onClick: () => setActiveTab('Modules') },
      { label: 'Apprenants', icon: <IconUsers />, active: activeTab === 'Apprenants', onClick: () => setActiveTab('Apprenants') },
      { label: 'Badges', icon: <IconBookmarks />, active: activeTab === 'Badges', onClick: () => setActiveTab('Badges') },
    ],
    [activeTab],
  );

  const headerContent = useMemo(() => {
    if (activeTab === 'Programmes') {
      return {
        eyebrow: 'Programmes',
        title: 'Gestion des Programmes',
        description:
          'Suivez vos parcours de formation, planifiez les nouvelles sessions et assurez la cohérence de vos contenus pédagogiques.',
      } as const;
    }

    if (activeTab === 'Modules') {
      return {
        eyebrow: 'Modules',
        title: 'Gestion des Modules',
        description:
          'Suivez le catalogue des modules, ajustez les niveaux de difficulté et mettez à jour les ressources pédagogiques en quelques clics.',
      } as const;
    }


    return {
      eyebrow: 'Aperçu',
      title: 'Panel Administrateur',
      description:
        'Gestion centralisée de La Ruche Académie. Visualisez les indicateurs clés et préparez les actions à réaliser pour vos apprenants, formateurs et contenus.',
    } as const;
  }, [activeTab]);

  const stats = useMemo(
    () => [
      { title: 'Programmes', value: 12, description: 'Programmes actifs dans la plateforme', accent: '#6C5DD3', icon: <IconStack /> },
      { title: 'Modules', value: 28, description: 'Modules disponibles pour les apprenants', accent: '#56CCF2', icon: <IconModule /> },
      { title: 'Apprenants', value: 97, description: 'Apprenants inscrits cette semaine', accent: '#27AE60', icon: <IconUsers /> },
      { title: 'Badges', value: 7, description: 'Badges certifiants actifs', accent: '#F2994A', icon: <IconBadge /> },
    ],
    [],
  );

  // Configuration des boutons d'actions rapides
  const quickActions = useMemo(
    () => [
      { label: 'Nouveau Programme', description: 'Créer un nouveau parcours de formation', icon: <IconPlus /> },
      { label: 'Nouveau Module', description: 'Ajouter un module de formation', icon: <IconPlus /> },
      { label: 'Nouvel Apprenant', description: 'Inscrire un nouvel apprenant', icon: <IconPlus /> },
      { label: 'Nouveau Badge', description: 'Créer un badge de reconnaissance', icon: <IconPlus /> },
    ],
    [],
  );

  const programmes = useMemo(
    () => [
      {
        title: 'Développement Frontend',
        description: "Formation complète sur le développement d'interfaces utilisateurs modernes",
        modules: 6,
        nextSession: '01/11/2023',
      },
      {
        title: 'Développement Backend',
        description: 'Maîtrise du développement côté serveur et bases de données',
        modules: 5,
        nextSession: '06/11/2023',
      },
    ],
    [],
  );

  const modules = useMemo(
    () => [
      {
        title: 'Les Bases de React',
        description: 'Apprends les fondamentaux de React pour créer des interfaces utilisateur modernes',
        level: 'Débutant',
        duration: '4h',
        category: 'Frontend',
        programme: 'Programme Développement Frontend',
      },
      {
        title: 'JavaScript Avancé',
        description: 'Maîtrise les concepts avancés de JavaScript pour devenir un développeur expert',
        level: 'Avancé',
        duration: '6h',
        category: 'Programmation',
        programme: 'Programme Développement Frontend',
      },
      {
        title: 'Maîtrise CSS',
        description: 'Deviens expert en CSS et animations pour créer des interfaces époustouflantes',
        level: 'Intermédiaire',
        duration: '5h',
        category: 'Frontend',
        programme: 'Programme Développement Frontend',
      },
    ],
    [],
  );


  return (
    <AdminLayout>
      <section className="flex flex-col gap-8">
        {/* Section d'en-tête avec titre et description */}
        <header>
          <p className="text-sm font-medium uppercase tracking-wide text-primary">{headerContent.eyebrow}</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">{headerContent.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">{headerContent.description}</p>
        </header>

        {/* Onglets de navigation du panel administrateur */}
        <AdminNavigationTabs items={navigationTabs} />

        {activeTab === 'Aperçu' ? (
          <>
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
          </>
        ) : null}

        {activeTab === 'Programmes' ? (
          <section className="flex flex-col gap-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Gestion des Programmes</h2>
                <p className="text-sm text-slate-500">Retrouvez vos parcours de formation et préparez les prochaines sessions.</p>
              </div>
              <button
                type="button"
                className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
              >
                <span className="text-base text-white">
                  <IconPlus />
                </span>
                Nouveau Programme
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {programmes.map((programme) => (
                <article
                  key={programme.title}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="max-w-2xl">
                    <h3 className="text-lg font-semibold text-slate-900">{programme.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{programme.description}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                      <span className="mr-2 rounded-full bg-primary-light/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                        {programme.modules} modules
                      </span>
                      <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
                      <span>Prochaine session le {programme.nextSession}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-primary hover:text-primary"
                    >
                      <span className="text-base text-slate-400">
                        <IconEdit />
                      </span>
                      Gérer
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
                    >
                      Consulter
                      <span className="text-base text-white">
                        <IconArrowUpRight />
                      </span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {activeTab === 'Modules' ? (
          <section className="flex flex-col gap-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Gestion des Modules</h2>
                <p className="text-sm text-slate-500">
                  Retrouvez vos ressources pédagogiques, suivez leurs niveaux et tenez vos apprenants informés.
                </p>
              </div>
              <button
                type="button"
                className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
              >
                <span className="text-base text-white">
                  <IconPlus />
                </span>
                Nouveau Module
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {modules.map((module) => (
                <article
                  key={module.title}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">{module.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{module.description}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500 sm:text-sm">
                      <span className="mr-1 rounded-full bg-primary-light/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                        {module.level}
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">{module.duration}</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">{module.category}</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">{module.programme}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
                    <button
                      type="button"
                      className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-primary hover:text-primary"
                    >
                      <span className="text-base text-slate-400">
                        <IconEdit />
                      </span>
                      Modifier
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
                    >
                      Consulter
                      <span className="text-base text-white">
                        <IconArrowUpRight />
                      </span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

      </section>
    </AdminLayout>
  );
};

// Exportation par défaut du composant
export default AdminPage;
