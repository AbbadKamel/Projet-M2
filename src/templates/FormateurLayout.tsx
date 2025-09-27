import type { PropsWithChildren } from 'react';
import SignOutButton from '../components/SignOutButton';
import { useAuth } from '../auth/AuthContext';

const getInitials = (label: string) =>
  label
    .trim()
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2) || 'FO';


const FormateurLayout = ({ children }: PropsWithChildren) => {
  const { user } = useAuth();
  const displayName = user?.displayName ?? 'Formateur';
  const email = user?.email ?? 'formateur@unicaen.fr';
  const initials = getInitials(displayName);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white">
      <header className="border-b border-amber-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white text-lg font-semibold">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-slate-900">Abieo</span>
              <span className="text-sm font-medium text-amber-600">Espace Formateur</span>
            </div>
          </div>

          <div className="hidden items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary md:flex">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">
              {initials}
            </span>
            <span>{displayName}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-100 bg-white text-amber-500 shadow-sm transition hover:text-amber-600"
              aria-label="Notifications"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2Zm8-6v-5a8 8 0 0 0-16 0v5l-2 2v1h20v-1l-2-2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-900">{displayName}</p>
              <p className="text-xs text-amber-600">{email}</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-sm font-semibold text-white">
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

export default FormateurLayout;
