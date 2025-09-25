import type { ReactNode } from 'react';

interface QuickActionButtonProps {
  icon: ReactNode;
  label: string;
  description: string;
  onClick?: () => void;
}

const QuickActionButton = ({ icon, label, description, onClick }: QuickActionButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-1 min-w-[220px] items-start gap-3 rounded-2xl border border-dashed border-primary-light bg-white p-5 text-left transition hover:border-primary hover:shadow-lg"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">{icon}</span>
      <span className="flex flex-col">
        <span className="text-base font-semibold text-slate-900">{label}</span>
        <span className="text-sm text-slate-500">{description}</span>
      </span>
    </button>
  );
};

export default QuickActionButton;
