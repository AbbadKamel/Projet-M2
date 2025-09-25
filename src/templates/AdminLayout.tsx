import type { PropsWithChildren } from 'react';

const AdminLayout = ({ children }: PropsWithChildren) => {
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
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-500">
            <a className="rounded-full bg-primary-light px-4 py-2 text-primary" href="#">Apprenant</a>
            <a className="hover:text-primary" href="#">Formateur</a>
            <a className="hover:text-primary" href="#">Admin</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-900">Jean Administrateur</p>
              <p className="text-xs text-slate-500">Administrateur</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-semibold">
              JA
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
};

export default AdminLayout;
