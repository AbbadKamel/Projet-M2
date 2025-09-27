import SignOutButton from '../components/SignOutButton';
import { useAuth } from '../auth/AuthContext';

const getInitials = (label: string) =>
  label
    .trim()
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2) || 'AP';

const ApprenantPage = () => {
  const { user } = useAuth();
  const displayName = user?.displayName ?? 'Apprenant';
  const email = user?.email ?? 'apprenant@unicaen.fr';
  const initials = getInitials(displayName);
  const firstName = displayName.trim().split(/\s+/)[0] || displayName;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-100 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white/80 px-10 py-12 shadow-xl backdrop-blur">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-emerald-700">Espace Apprenant</h1>
            <p className="mt-4 text-slate-600">
              Bienvenue {firstName}, cet espace centralise vos parcours de formation, vos modules et toutes les informations qui
              vous sont dédiées.
            </p>
          </div>
          <div className="flex flex-col items-end gap-4 md:pt-2">
            <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-base font-semibold text-white">
                {initials}
              </span>
              <div className="text-right">
                <p className="font-semibold text-slate-900">{displayName}</p>
                <p className="text-xs text-emerald-600">{email}</p>
              </div>
            </div>
            <SignOutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprenantPage;
