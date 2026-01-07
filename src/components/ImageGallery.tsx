// Nos animaux à adopter

// Découvrez en images tous nos animaux qui attendent une famille aimante. Chaque photo raconte une histoire et un espoire.
// 3 lignes et 4 colonnes
export default function ImageGallery() {
  return (
    <div id="tableau entier" className=" grid grid-cols-4 grid-rows-3 gap-4  ">
      <div id="Grande Image 1 - Boulldog" className=" bg-amber-900 row-span-2 ">
        Grande Image
      </div>
      <div id="Petite image 1 - Hamster herbe" className="bg-amber-300">
        Petite image
      </div>

      <div
        id="Grande Image 2 - Chat bandana jaune"
        className=" bg-amber-900 row-span-2 "
      >
        Grande Image
      </div>
      <div id="Petite image 2 - Lapin" className="bg-amber-300">
        Petite image
      </div>

      <div
        id="Grande Image 3 - Chien lunette"
        className=" bg-amber-900 row-span-2 "
      >
        Grande Image
      </div>
      <div
        id="Grande Image 4 - Chien Merlin"
        className=" bg-amber-900 row-span-2 "
      >
        Grande Image
      </div>

      <div id="Petite image 3 - Chat noir et blanc" className="bg-amber-300">
        Petite image
      </div>

      <div id="Petite image 4 - Hamster pas herbe" className="bg-amber-300">
        Petite image
      </div>
    </div>
  );
}
