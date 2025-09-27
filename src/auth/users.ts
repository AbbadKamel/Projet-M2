export type UserRole = 'admin' | 'formateur' | 'apprenant';

export interface RegisteredUser {
  email: string;
  password: string;
  role: UserRole;
  displayName: string;
  redirectPath: string;
}

export type AuthenticatedUser = Omit<RegisteredUser, 'password'>;

export const USERS: RegisteredUser[] = [
  {
    email: 'admin@unicaen.fr',
    password: 'admin',
    role: 'admin',
    displayName: 'Administrateur',
    redirectPath: '/admin',
  },
  {
    email: 'formateur@unicaen.fr',
    password: 'formateur',
    role: 'formateur',
    displayName: 'Formateur',
    redirectPath: '/formateur',
  },
  {
    email: 'apprenant@unicaen.fr',
    password: 'apprenant',
    role: 'apprenant',
    displayName: 'Apprenant',
    redirectPath: '/apprenant',
  },
];
