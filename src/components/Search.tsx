export default function Search() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    console.log(new URLSearchParams(formData).toString());
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
            name="selectedType"
            className="h-11 rounded-md border px-3 focus:outline-none focus:ring-2 focus:ring-black "
          >
            <option value="dog">Chien</option>
            <option value="cat">Chat</option>
            <option value="rodent">Rongeur</option>
            <option value="rabbit">Lapin</option>
          </select>
        </div>

        {/* Localisation */}
        <div className="flex flex-col flex-1">
          <label className="text-sm font-medium mb-1">Localisation</label>
          <input
            name="location"
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
