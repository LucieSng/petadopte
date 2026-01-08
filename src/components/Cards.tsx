// Création du composant enfant

// Je type mes props
interface PropsCards {
  emoji: string;
  title: string;
  description: string;
}

const Cards = (props: PropsCards) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-sm mb-4">
      <div className="px-6 py-4">
        {props.emoji}
        <h1>{props.title}</h1>
        <p className="text-[#333]">{props.description}</p>
      </div>
    </div>
  );
};

export default Cards;
