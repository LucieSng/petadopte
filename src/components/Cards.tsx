// Création du composant enfant

// Je type mes props
interface PropsCards {
  emoji: string;
  title: string;
  description: string;
}

const Cards = (props: PropsCards) => {
  return (
    <div className="props">
      {props.emoji}
      {props.title}
      {props.description}
    </div>
  );
};

export default Cards;
