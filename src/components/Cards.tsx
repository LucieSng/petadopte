// Création du composant enfant

// Je type mes props
interface PropsCards {
  emoji: string;
  title: string;
  description: string;
}

const Cards = (props: PropsCards) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-(--shadow-sm) mb-4">
      <div className="px-6 py-4">
        <div className="text-3xl p-2">{props.emoji}</div>
        <h1 className="text-1xl font-bold text-(--dark-color)">
          {props.title}
        </h1>
        <p className="text-(--dark-color) p-4">{props.description}</p>
      </div>
    </div>
  );
};

export default Cards;
