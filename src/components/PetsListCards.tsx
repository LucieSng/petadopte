import { useSearchParams } from "react-router-dom";
import pets from "../data/data.json";
import CardsPet from "./CardsPet";

export default function PetsListCards() {
  // 1️⃣ Va regarder l'URL et filtre en fonction des paramètres de celui-ci.
  // Lire les paramètres présents dans l'URL
  const [searchParams] = useSearchParams();

  // Extraire type et city et retourner null si inexistant
  const type = searchParams.get("type") as string | null;
  const city = searchParams.get("city") as string | null;

  // Variable qui contient tous les animaux par défaut
  // Elle est remplacée si filtre appliqué, let car elle peut être réassignée
  let petsToDisplay = pets;

  // 2️⃣ Si l'URL a des paramètres changés tu filtres.
  // Si au moins un paramètre est valide, on applique ce qu'il a dans le if
  if ((type && type.trim() !== "") || (city && city.trim() !== ""))
    petsToDisplay = pets.filter((pet) => {
      return (
        // Vérification du type et de la city
        // Si type n'existe pas, est vide, ou correspond au type filtré on garde
        (!type || !type.trim() || pet.type === type) &&
        // Si city n'existe pas, est vide, ou correspond au type filtré on garde
        (!city ||
          !city.trim() ||
          // On vérifie si la ville contient la recherche
          pet.city.toLowerCase().includes(city.toLowerCase()))
      );
    });

  // 3️⃣ Map classiquement
  return (
    <div className="grid grid-cols-4 gap-4 m-4">
      {petsToDisplay.map((pet) => (
        <CardsPet key={pet.name} pet={pet} />
      ))}
    </div>
  );
}

// /adopte?type=cat&city=Lyon
