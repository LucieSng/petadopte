// Donnons-leur autant qu'ils nous apportent

// Chaque jour, des milliers d'animaux attendent une famille aimante. Trouvez votre compagnon idéal parmi nos animaux disponibles à l'adoption

export default function HomeImage() {
  return (
    <div
      className="h-screen bg-cover bg-center "
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="pt-60 text-center  text-[var(--primary-color)]">
        <h1> Donnons-leur autant qu'ils nous apportent</h1>
        <br />
        <p>
          Chaque jour, des milliers d'animaux attendent une famille aimante.
          Trouvez votre compagnon idéal parmi nos animaux disponibles à
          l'adoption
        </p>
      </div>
    </div>
  );
}

// Je ne sais pas comment on va faire pour que le Search soir sur l'HomeImage ??
