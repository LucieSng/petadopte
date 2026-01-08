// Création du composant parent

import Cards from "../components/Cards";

const ContainerCards = () => {
  return (
    <div className="text-center">
      <h1 className="text-black font-medium">Comment ça marche</h1>
      <h2 className="text-[#333] font-regular">
        Adopter un animal est un engagement sérieux et à long terme. Voici notre
        processus d'adoption en quelques étapes simples.
      </h2>
      <div className="container-cards">
        <Cards
          emoji={"🔍​"}
          title={"1. Trouver votre compagnon"}
          description={
            "Parcourez notre base de données d'animaux disponibles et utilisez nos filtres pour trouver celui qui correspond à votre mode de vie."
          }
        />
        <Cards
          emoji={"​📝​​"}
          title={"2. Remplissez une demande"}
          description={
            "Soumettez votre formulaire d'adoption pour l'animal qui vous intéresse. Nous examinons chaque demande avec soin."
          }
        />
        <Cards
          emoji={"👋​​"}
          title={"3. Rencontrez l'animal"}
          description={
            "Visitez le refuge pour rencontrer l'animal et voir si vous êtes compatibles. C'est une étape essentielle du processus."
          }
        />
        <Cards
          emoji={"🏠​"}
          title={"4. Bienvenue à la maison"}
          description={
            "Une fois votre demande approuvée, vous pouvez accueillir votre nouvel ami chez vous. Nous restons disponibles pour vous conseiller."
          }
        />
      </div>
    </div>
  );
};

export default ContainerCards;
