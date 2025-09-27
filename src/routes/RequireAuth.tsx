import { Navigate, useLocation } from 'react-router-dom';
import type { UserRole } from '../auth/users';
import { useAuth } from '../auth/AuthContext';

interface RequireAuthProps {
  role: UserRole;
  children: JSX.Element;
}

const RequireAuth = ({ role, children }: RequireAuthProps) => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (user.role !== role) {
    return <Navigate to={user.redirectPath} replace />;
  }

  return children;
};

export default RequireAuth;
