import "../App.css";
import { useNavigate } from "react-router-dom";

export default function CtaBecomeVolunteer() {
  const nav = useNavigate();
  const navigate = () => {
    nav("/BecomeVolunteerPage");
  };

  return (
    <button
      onClick={navigate}
      className="text-black font-medium py-2 pl-0 pr-4 cursor-pointer"
    >
      Devenir bénévole
    </button>
  );
}
