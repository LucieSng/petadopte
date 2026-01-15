import { useNavigate, useSearchParams } from "react-router-dom";
import type { SearchProps } from "../types/SearchProps";

export default function Search({ showReset = false }: SearchProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const searchParams = new URLSearchParams();

    const type = formData.get("type") as string | null;
    const city = formData.get("city") as string | null;

    if (type && type.trim() !== "") {
      searchParams.set("type", type);
    }

    if (city && city.trim() !== "") {
      searchParams.set("city", city);
    }

    const queryString = searchParams.toString();
    navigate(queryString ? `/adopte?${queryString}` : "/adopte");
  }

  function handleReset() {
    // Réinitialise l'URL sans paramètres
    navigate("/adopte");

    // Réinitialise les champs du formulaire
    const form = document.querySelector("form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  }

  // Vérifie s'il y a des filtres actifs
  const hasActiveFilters = searchParams.get("type") || searchParams.get("city");

  return (
    <div>
      <div className="m-3">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white rounded-xl shadow-lg p-6 gap-4  md:grid grid-cols-3 md:items-end md:gap-6"
        >
          {/* Type d'animal */}
          <div className="mt-5 flex flex-col flex-1">
            <label className="text-sm font-medium mb-1">Type d'animal</label>
            <select
              aria-label="type"
              name="type"
              defaultValue={searchParams.get("type") || ""}
              className="h-11 rounded-md border px-3 focus:outline-none focus:ring-2 focus:ring-black"
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
          <div className="mt-5 flex flex-col flex-1">
            <label className="text-sm font-medium mb-1">Localisation</label>
            <input
              name="city"
              type="text"
              placeholder="Votre ville"
              defaultValue={searchParams.get("city") || ""}
              className="h-11 rounded-md border border-[var(--dark-color)] px-3 focus:outline-none focus:ring-2 focus:ring-[var(--dark-color)]"
            />
          </div>

          {/* Bouton Rechercher */}
          <button
            type="submit"
            className="mt-10 h-11 px-8 rounded-md bg-[var(--dark-color)] text-[var(--light-color)] font-medium hover:bg-[var(--dark-color)] transition-colors"
          >
            Rechercher
          </button>

          {/* Bouton Réinitialiser - DANS le formulaire avec type="button" */}
          <div className="col-start-3 text-right">
            {showReset && hasActiveFilters && (
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 text-[var(--btn-accent-bg)] hover:text-[var(--dark-color)] underline transition-colors"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
