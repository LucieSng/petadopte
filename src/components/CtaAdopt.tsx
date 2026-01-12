import "../App.css";
import { useNavigate } from "react-router-dom";

// Je type mes props

interface PropsButtonAdopt {
  text: string;
  className: string;
}

export default function CtaAdopt(props: PropsButtonAdopt) {
  const nav = useNavigate();
  const navigate = () => {
    nav("/adopte");
  };

  return (
    <main>
      <div>
        <button
          onClick={navigate}
          className={props.className}
          //"text-black font-medium py-2 gap-2 cursor-pointer"
        >
          {props.text}
          {/* J'adopte */}
        </button>
      </div>
    </main>
  );
}
