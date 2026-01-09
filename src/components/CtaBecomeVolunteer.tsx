import "../App.css";
import { useNavigate } from "react-router-dom";

// Je type mes props

interface PropsButtonVolunteer {
  text: string;
  className: string;
}

export default function CtaBecomeVolunteer(props: PropsButtonVolunteer) {
  const nav = useNavigate();
  const navigate = () => {
    nav("/BecomeVolunteerPage");
  };

  return (
    <button
      onClick={navigate}
      className={props.className}
      // className="text-black font-medium py-2 pl-0 pr-4 cursor-pointer"
    >
      {props.text}
      {/* Devenir bénévole */}
    </button>
  );
}
