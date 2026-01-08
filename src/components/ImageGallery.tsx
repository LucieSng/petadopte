import { useNavigate } from "react-router-dom";

export default function ImageGallery() {
  function CtaAdopt() {
    const nav = useNavigate();
    const navigate = () => {
      nav("/AdoptPage");
    };

    return (
      <main>
        <div>
          <button
            onClick={navigate}
            className="bg-[#333] hover:bg-[#333] hover:text-white text-white font-medium py-2 px-4 rounded-full cursor-pointer"
          >
            Voir tous les animaux
          </button>
        </div>
      </main>
    );
  }
  return (
    <div id="petAdopte">
      <div id="text" className="text-center">
        <h1> Nos animaux à adopter</h1>

        <p className="m-10">
          Découvrez en images tous nos animaux qui attendent une famille
          aimante. Chaque photo raconte une histoire et un espoire.
        </p>
      </div>
      <div id="array" className=" grid grid-cols-4 grid-rows-3 gap-4 p-3 m-4">
        <div
          className="row-span-2 h-screen bg-cover bg-center rounded-md "
          style={{ backgroundImage: "url('/GrandeImage1.jpg')" }}
        ></div>
        <div
          className="bg-cover bg-center rounded-md "
          style={{ backgroundImage: "url('/PetiteImage1.jpg')" }}
        ></div>

        <div
          className="row-span-2 h-screen bg-cover bg-center rounded-md "
          style={{ backgroundImage: "url('/GrandeImage2.jpg')" }}
        ></div>
        <div
          className="bg-cover bg-center rounded-md "
          style={{ backgroundImage: "url('/PetiteImage2.jpg')" }}
        ></div>

        <div
          className="row-span-2 h-screen bg-cover bg-center rounded-md "
          style={{ backgroundImage: "url('/GrandeImage3.jpg')" }}
        ></div>
        <div
          className="row-span-2 h-screen bg-cover bg-center rounded-md "
          style={{ backgroundImage: "url('/GrandeImage4.jpg')" }}
        ></div>

        <div
          className="bg-cover bg-center rounded-md "
          style={{ backgroundImage: "url('/PetiteImage3.jpg')" }}
        ></div>

        <div
          className="bg-cover bg-center rounded-md "
          style={{ backgroundImage: "url('/PetiteImage4.jpg')" }}
        ></div>
      </div>
      <div className="text-center"> {CtaAdopt()}</div>
    </div>
  );
}

// Possibilité de stocker le className dans une variable pour les petites et grandes images afin de ne pas avoir à le réécrire à chaque fois

// Même chose pour le style qui appelle l'image.
