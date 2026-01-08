import "../App.css";
import { useNavigate } from "react-router-dom";

export default function CtaDonation() {
  const nav = useNavigate();
  const navigate = () => {
    nav("/DonationPage");
  };

  return (
    <main>
      <div>
        <button
          onClick={navigate}
          className="bg-[#d65645] hover:bg-[#333] hover:text-white text-white font-medium py-2 px-4 rounded-full cursor-pointer"
        >
          Faire un don 🫶​
        </button>
      </div>
    </main>
  );
}
