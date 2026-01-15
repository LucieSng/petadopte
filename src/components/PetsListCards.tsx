import { useSearchParams } from "react-router-dom";
import pets from "../data/data.json";
import CardsPet from "./CardsPet";
import Search from "./Search";

export default function PetsListCards() {
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type") as string | null;
  const city = searchParams.get("city") as string | null;

  let petsToDisplay = pets;

  if ((type && type.trim() !== "") || (city && city.trim() !== ""))
    petsToDisplay = pets.filter((pet) => {
      return (
        (!type || !type.trim() || pet.type === type) &&
        (!city ||
          !city.trim() ||
          pet.city.toLowerCase().includes(city.toLowerCase()))
      );
    });

  return (
    <div>
      <div className="pt-15 pb-15">
        <Search showReset={true} />
      </div>
      <div className="grid grid-cols-4 gap-4 m-4">
        {petsToDisplay.map((pet) => (
          <CardsPet key={pet.name} pet={pet} />
        ))}
      </div>
    </div>
  );
}
