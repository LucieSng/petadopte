import type { CardsPetProps } from "../types/pet";

export default function CardsPet({ pet }: CardsPetProps) {
  function printName() {
    console.log(`Nom de l'animal : ${pet.name}, Type de l'animal ${pet.type} `);
  }
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-70">
      <img
        src={pet.imageUrl}
        alt={pet.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <p className="text-sm">{pet.type}</p>
        <h2 className="text-xl font-bold mb-1 text-[var(--accent-color)]">
          {pet.name}
        </h2>

        <p className="text-sm">
          {pet.breed} - {pet.age}
        </p>

        <p className="text-sm mt-1">{pet.city}</p>

        <p className="text-sm mt-3 pb-4">{pet.description}</p>

        <button
          onClick={printName}
          className="bg-(--dark-color) hover:bg-[var(--dark-color)] hover:text-[var(--primary-color)] text-[var(--primary-color)] font-medium py-2 px-4 rounded-full cursor-pointer "
        >
          Rencontrer
        </button>
      </div>
    </div>
  );
}
