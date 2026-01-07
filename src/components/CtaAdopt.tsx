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
          className="bg-blue-500 hover:bg-blue-700 hover:text-white text-white font-medium py-2 px-4 rounded-full cursor-pointer"
        >
          J'adopte
        </button>
      </div>
    </main>
  );
}
