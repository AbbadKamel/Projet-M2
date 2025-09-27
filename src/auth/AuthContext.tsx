import { createContext, useContext, useMemo, useState, useCallback, type PropsWithChildren } from 'react';
import type { AuthenticatedUser, RegisteredUser } from './users';
import { USERS } from './users';

interface AuthContextValue {
  user: AuthenticatedUser | null;
  signIn: (email: string, password: string) => { success: true; user: AuthenticatedUser } | { success: false; error: string };
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const mapToAuthenticatedUser = ({ password: _password, ...rest }: RegisteredUser): AuthenticatedUser => rest;

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<AuthenticatedUser | null>(null);

  const signIn: AuthContextValue['signIn'] = useCallback((email, password) => {
    const trimmedEmail = email.trim().toLowerCase();
    const matchingUser = USERS.find((candidate) => candidate.email.toLowerCase() === trimmedEmail);

    if (!matchingUser || matchingUser.password !== password) {
      return {
        success: false,
        error: 'Identifiants incorrects. Veuillez vérifier votre adresse e-mail et votre mot de passe.',
      } as const;
    }

    const authenticatedUser = mapToAuthenticatedUser(matchingUser);
    setUser(authenticatedUser);

    return { success: true, user: authenticatedUser } as const;
  }, []);

  const signOut = useCallback(() => setUser(null), []);

  const value = useMemo(() => ({ user, signIn, signOut }), [user, signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
