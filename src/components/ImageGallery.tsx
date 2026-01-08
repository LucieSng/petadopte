// Nos animaux à adopter

// Découvrez en images tous nos animaux qui attendent une famille aimante. Chaque photo raconte une histoire et un espoire.
// 3 lignes et 4 colonnes
export default function ImageGallery() {
  return (
    <div
      id="tableau entier"
      className=" grid grid-cols-4 grid-rows-3 gap-4 p-3 m-4"
    >
      <div
        id=" 1 - Boulldog"
        className="row-span-2 h-screen bg-cover bg-center rounded-md "
        style={{ backgroundImage: "url('/GrandeImage1.jpg')" }}
      ></div>
      <div
        id="Petite image 1 - Hamster herbe"
        className="bg-cover bg-center rounded-md "
        style={{ backgroundImage: "url('/PetiteImage1.jpg')" }}
      ></div>

      <div
        id=" 2 - Chat bandana jaune"
        className="row-span-2 h-screen bg-cover bg-center rounded-md "
        style={{ backgroundImage: "url('/GrandeImage2.jpg')" }}
      ></div>
      <div
        id=" 2 - Lapin"
        className="bg-cover bg-center rounded-md "
        style={{ backgroundImage: "url('/PetiteImage2.jpg')" }}
      ></div>

      <div
        id=" 3 - Chien lunette"
        className="row-span-2 h-screen bg-cover bg-center rounded-md "
        style={{ backgroundImage: "url('/GrandeImage3.jpg')" }}
      ></div>
      <div
        id=" 4 - Chien Merlin"
        className="row-span-2 h-screen bg-cover bg-center rounded-md "
        style={{ backgroundImage: "url('/GrandeImage4.jpg')" }}
      ></div>

      <div
        id=" 3 - Chat noir et blanc"
        className="bg-cover bg-center rounded-md "
        style={{ backgroundImage: "url('/PetiteImage3.jpg')" }}
      ></div>

      <div
        id=" 4 - Hamster pas herbe"
        className="bg-cover bg-center rounded-md "
        style={{ backgroundImage: "url('/PetiteImage4.jpg')" }}
      ></div>
    </div>
  );
}

// Ajouter le bouton "Voir tous les animaux"
// Renommer les id
