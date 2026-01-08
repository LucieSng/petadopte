// Création du composant enfant

// Je type mes props
interface PropsCards {
  emoji: string;
  title: string;
  description: string;
}

const Cards = (props: PropsCards) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex mb-4 gap-8">
      <div className="px-6 py-4">
        {props.emoji}
        {props.title}
        {props.description}
      </div>
    </div>
  );
};

export default Cards;
