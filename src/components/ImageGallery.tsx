// Nos animaux à adopter

// Découvrez en images tous nos animaux qui attendent une famille aimante. Chaque photo raconte une histoire et un espoire.
// 3 lignes et 4 colonnes
export default function ImageGallery() {
  return (
    <div id="tableau entier" className=" grid grid-cols-4 grid-rows-3 gap-4  ">
      <div id="Grande Image" className=" bg-amber-900 row-span-2 ">
        Grande Image
      </div>
      <div id="Petite image" className="bg-amber-300">
        Petite image
      </div>

      <div id="Grande Image" className=" bg-amber-900 row-span-2 ">
        Grande Image
      </div>
      <div id="Petite image" className="bg-amber-300">
        Petite image
      </div>

      <div id="Grande Image" className=" bg-amber-900 row-span-2 ">
        Grande Image
      </div>
      <div id="Grande Image" className=" bg-amber-900 row-span-2 ">
        Grande Image
      </div>

      <div id="Petite image" className="bg-amber-300">
        Petite image
      </div>

      <div id="Petite image" className="bg-amber-300">
        Petite image
      </div>
    </div>
  );
}
