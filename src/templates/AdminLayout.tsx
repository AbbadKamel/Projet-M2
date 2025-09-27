import type { PropsWithChildren } from 'react';
import SignOutButton from '../components/SignOutButton';
import { useAuth } from '../auth/AuthContext';

const getInitials = (label: string) =>
  label
    .trim()
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2) || 'AD';


const AdminLayout = ({ children }: PropsWithChildren) => {
  const { user } = useAuth();
  const displayName = user?.displayName ?? 'Administrateur';
  const email = user?.email ?? 'admin@unicaen.fr';
  const initials = getInitials(displayName);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-semibold">A</div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-slate-900">Abieo Admin</span>
              <span className="text-sm text-slate-500">Panel Administrateur</span>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-primary-light px-4 py-2 text-sm font-semibold text-primary">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">
              {initials}
            </span>
            <span>{displayName}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-900">{displayName}</p>
              <p className="text-xs text-slate-500">{email}</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-semibold">
              {initials}
            </div>
            <SignOutButton />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
};

export default AdminLayout;
