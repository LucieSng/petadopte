import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // 1️⃣ Empêche le rechargement de la page
    e.preventDefault();

    // 2️⃣ Récupère le formulaire typé correctement
    const form = e.currentTarget;

    // 3️⃣ Récupère toutes les valeurs du formulaire
    const formData = new FormData(form);

    // 4️⃣ Objet spécial pour créer les paramètres d’URL
    const searchParams = new URLSearchParams();

    // 5️⃣ Récupération explicite des champs (avec cast TypeScript)
    const type = formData.get("type") as string | null;
    const city = formData.get("city") as string | null;

    // 6️⃣ Ajout des paramètres UNIQUEMENT s’ils existent
    if (type && type.trim() !== "") {
      searchParams.set("type", type);
    }

    if (city && city.trim() !== "") {
      searchParams.set("city", city);
    }

    // 7️⃣ Transformation en query string
    const queryString = searchParams.toString();

    // 8️⃣ Navigation avec ou sans paramètres
    navigate(queryString ? `/adopte?${queryString}` : "/adopte");
  }

  return (
    <div className="w-full flex justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-[var(--primary-color)] rounded-xl shadow-lg p-6 flex flex-col gap-4 md:flex-row md:items-end md:gap-6"
      >
        {/* Type d'animal */}
        <div className="flex flex-col flex-1">
          <label className="text-sm font-medium  mb-1">Type d’animal</label>
          <select
            aria-label="type"
            name="type"
            className="h-11 rounded-md border px-3 focus:outline-none focus:ring-2 focus:ring-black "
          >
            <option value="">Pas de préférence</option>
            <option value="Chien">Chien</option>
            <option value="Chat">Chat</option>
            <option value="Rongeur">Rongeur</option>
            <option value="Lapin">Lapin</option>
            <option value="Oiseau">Oiseau</option>
          </select>
        </div>

        {/* Localisation */}
        <div className="flex flex-col flex-1">
          <label className="text-sm font-medium mb-1">Localisation</label>
          <input
            name="city"
            type="text"
            placeholder="Votre ville"
            className="h-11 rounded-md border border-[var(--dark-color)] px-3 focus:outline-none focus:ring-2 focus:ring-[var(--dark-color)]"
          />
        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="h-11 px-8 rounded-md bg-[var(--dark-color)] text-[var(--light-color)] font-medium hover:bg-[var(--dark-color)]transition-colors"
        >
          Rechercher
        </button>
      </form>
    </div>
  );
}
