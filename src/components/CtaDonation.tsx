import "../App.css";
import { useNavigate } from "react-router-dom";

export default function CtaDonation() {
  const nav = useNavigate();
  const navigate = () => {
    nav("/DonationPage");
  };

  return (
    <button
      onClick={navigate}
      className="w-full bg-(--secondary-color) hover:bg-(--dark-color) hover:text-white text-white font-medium py-2 px-4 rounded-full cursor-pointer"
    >
      Faire un don 🫶​
    </button>
  );
}
