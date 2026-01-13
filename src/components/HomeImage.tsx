// Donnons-leur autant qu'ils nous apportent

// Chaque jour, des milliers d'animaux attendent une famille aimante. Trouvez votre compagnon idéal parmi nos animaux disponibles à l'adoption

export default function HomeImage() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />

      {/* Contenu */}
      <div className="relative z-10 pt-60 text-center text-[var(--primary-color)]">
        <h1
          style={{ fontFamily: "var(--font-family-heading)" }}
          className="text-6xl font-semibold"
        >
          Donnons-leur autant qu'ils nous apportent
        </h1>

        <br />

        <p className="p-4">
          Chaque jour, des milliers d'animaux attendent une famille aimante.
          Trouvez votre <br />
          compagnon idéal parmi nos animaux disponibles à l'adoption
        </p>
      </div>
    </div>
  );
}

// Je ne sais pas comment on va faire pour que le Search soir sur l'HomeImage ??
