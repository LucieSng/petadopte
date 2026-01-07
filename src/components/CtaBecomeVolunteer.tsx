import "../App.css";
import { useNavigate } from "react-router-dom";

export default function CtaBecomeVolunteer() {
  const nav = useNavigate();
  const navigate = () => {
    nav("/BecomeVolunteerPage");
  };

  return (
    <main>
      <div>
        <button
          onClick={navigate}
          className="text-black font-medium py-2 px-4 cursor-pointer"
        >
          Devenir bénévole
        </button>
      </div>
    </main>
  );
}
