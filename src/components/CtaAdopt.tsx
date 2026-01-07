import "../App.css";
import { useNavigate } from "react-router-dom";

export default function CtaAdopt() {
  const nav = useNavigate();
  const navigate = () => {
    nav("/AdoptPage");
  };

  return (
    <main>
      <div>
        <button
          onClick={navigate}
          className="text-black font-medium py-2 gap-2 cursor-pointer"
        >
          J'adopte
        </button>
      </div>
    </main>
  );
}
