import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const SignOutButton = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
    navigate('/login', { replace: true });
  }, [navigate, signOut]);

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-primary hover:text-primary"
    >
      Se déconnecter
    </button>
  );
};

export default SignOutButton;
