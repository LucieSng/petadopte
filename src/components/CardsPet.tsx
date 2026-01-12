interface Pet {
  name: string;
  age: string;
  breed: string;
  type: string;
  city: string;

  description: string;
  imageUrl: string;
}

interface CardsPetProps {
  pet: Pet;
}

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
        <h2 className="text-xl font-bold mb-1">{pet.name}</h2>

        <p className="text-sm text-gray-600">
          {pet.type} • {pet.breed}
        </p>

        <p className="text-sm text-gray-600">{pet.age}</p>

        <p className="text-sm text-gray-500 mt-1">{pet.city}</p>

        <p className="text-sm mt-3 pb-4">{pet.description}</p>

        <button
          onClick={printName}
          className="bg(--dark-color) hover:bg-[#333] hover:text-white text-white font-medium py-2 px-4 rounded-full cursor-pointer "
        >
          Rencontrer
        </button>
      </div>
    </div>
  );
}
