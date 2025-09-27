import SignOutButton from '../components/SignOutButton';


const ApprenantPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-100 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white/80 px-10 py-12 shadow-xl backdrop-blur">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-emerald-700">Espace Apprenant</h1>
            <p className="mt-4 text-slate-600">
              Bienvenue dans votre espace personnel. Vous trouverez ici vos ressources, modules et informations dédiées aux
              apprenants.
            </p>
          </div>
          <div className="md:pt-2">
            <SignOutButton />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ApprenantPage;
