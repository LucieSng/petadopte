import pets from "../data/data.json";
import CardsPet from "./CardsPet";

export default function PetsListCards() {
  return (
    <div className="grid grid-cols-4 gap-4 m-4">
      {pets.map((pet) => (
        <CardsPet key={pet.name} pet={pet} />
      ))}
    </div>
  );
}
// Va regarder l'URL et filtre en fonction des paramètres de celui-ci.
// Si l'URL a des paramètres changé tu filtres et sinon fais map classiquement.
