import type { ReactNode } from 'react';

type TabItem = {
  label: string;
  icon: ReactNode;
  active?: boolean;
  onClick?: () => void;
};

type AdminNavigationTabsProps = {
  items: TabItem[];
};

const AdminNavigationTabs = ({ items }: AdminNavigationTabsProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-primary-light/40 to-primary-light/10 p-2 shadow-sm">
      <nav className="flex flex-wrap items-center gap-2">
        {items.map(({ label, icon, active, onClick }) => {
          const baseButtonClasses =
            'group relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40';
          const stateClasses = active
            ? 'bg-white text-primary shadow-sm'
            : 'text-slate-500 hover:bg-white/70 hover:text-primary';
          const iconClasses = active ? 'text-primary' : 'text-slate-400 group-hover:text-primary';

          return (
            <button key={label} type="button" onClick={onClick} className={`${baseButtonClasses} ${stateClasses}`}>
              <span className={`text-base ${iconClasses}`}>{icon}</span>
              <span>{label}</span>
              {active ? <span className="absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-primary" /> : null}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default AdminNavigationTabs;
