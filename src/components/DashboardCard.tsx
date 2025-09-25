import type { ReactNode } from 'react';

interface DashboardCardProps {
  icon: ReactNode;
  title: string;
  value: number | string;
  description: string;
  accentColor?: string;
}

const DashboardCard = ({ icon, title, value, description, accentColor = '#6C5DD3' }: DashboardCardProps) => {
  return (
    <article className="flex flex-1 min-w-[220px] rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1">
      <div
        className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ backgroundColor: `${accentColor}1a`, color: accentColor }}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-slate-500">{title}</span>
        <span className="mt-1 text-2xl font-semibold text-slate-900">{value}</span>
        <span className="text-xs text-slate-400">{description}</span>
      </div>
    </article>
  );
};

export default DashboardCard;
