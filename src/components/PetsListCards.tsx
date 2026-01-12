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
