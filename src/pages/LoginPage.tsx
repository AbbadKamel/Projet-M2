import { FormEvent, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { USERS } from '../auth/users';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn, user } = useAuth();

  const availableRoles = useMemo(() => USERS.map((account) => account.displayName), []);

  useEffect(() => {
    if (user) {
      navigate(user.redirectPath, { replace: true });
    }
  }, [navigate, user]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = signIn(email, password);

    if (!result.success) {
      setError(result.error);
      return;
    }

    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-slate-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40 p-10">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl font-semibold">
            U
          </div>
          <h1 className="text-3xl font-semibold text-slate-900">Connexion</h1>
          <p className="mt-2 text-sm text-slate-500">
            Accédez à votre espace {availableRoles.join(', ')} avec vos identifiants.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-slate-900 shadow-sm transition focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="admin@unicaen.fr"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-slate-900 shadow-sm transition focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Mot de passe"
            />
          </div>

          {error && (
            <div className="rounded-2xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2"
          >
            Se connecter
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-slate-400">
          Comptes disponibles :{' '}
          {USERS.map((account) => `${account.email} / ${account.password}`).join(' • ')}.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
