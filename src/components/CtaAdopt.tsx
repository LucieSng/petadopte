import "../App.css";
import { useNavigate } from "react-router-dom";
import type { PropsButtonAdopt } from "../types/PropsButtonAdopt";

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
