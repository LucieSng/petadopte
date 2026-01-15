import { useNavigate, useSearchParams } from "react-router-dom";
import type { SearchProps } from "../types/SearchProps";

export default function Search({
  showReset = false,
  resultCount,
}: SearchProps) {
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
    navigate("/adopte");
    const form = document.querySelector("form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  }

  const hasActiveFilters = searchParams.get("type") || searchParams.get("city");

  return (
    <div className="w-full px-4 ">
      <div className="w-full max-w-5xl ">
        <form
          onSubmit={handleSubmit}
          className=" p-10 gap-5 w-full bg-white rounded-xl shadow-lg text-center md:grid grid-cols-3 md:items-end "
        >
          {/* Type d'animal */}
          <div className="flex flex-col flex-1 ">
            <label className="text-sm font-medium p-2">Type d'animal</label>
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
          <div className="flex flex-col flex-1 ">
            <label className="text-sm font-medium p-2 ">Localisation</label>
            <input
              name="city"
              type="text"
              placeholder="Votre ville"
              defaultValue={searchParams.get("city") || ""}
              className="h-11 rounded-md border border-[var(--dark-color)] px-3 focus:outline-none focus:ring-2 focus:ring-[var(--dark-color)]"
            />
          </div>

          {/* Bouton Rechercher */}
          <div className="pt-5 md:pt-0">
            <button
              type="submit"
              className="h-11 px-8  rounded-md bg-[var(--dark-color)] text-[var(--light-color)] font-medium hover:bg-[var(--dark-color)] transition-colors"
            >
              Rechercher
            </button>
          </div>
          <div className="   md:col-start-1">
            {" "}
            {/* Affichage du nombre de résultats */}
            {showReset && resultCount !== undefined && (
              <div className=" pt-5 md:text-left text-sm md:pt-0">
                {resultCount}{" "}
                {resultCount > 1 ? "animaux trouvés" : "animal trouvé"}
              </div>
            )}
          </div>
          {/* Bouton Réinitialiser */}
          <div className=" md:col-start-3 md:text-right">
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
