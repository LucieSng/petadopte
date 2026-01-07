import "../App.css";
import { useNavigate } from "react-router-dom";

export default function CtaDon() {
  const nav = useNavigate();
  const navigate = () => {
    nav("/DonPage");
  };

  return (
    <main>
      <div>
        <button
          onClick={navigate}
          className="bg-blue-500 hover:bg-blue-700 hover:text-white text-white font-medium py-2 px-4 rounded-full cursor-pointer"
        >
          Faire un don
        </button>
      </div>
    </main>
  );
}
