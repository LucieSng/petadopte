import { Link } from "react-router-dom";
import CtaDonation from "../components/CtaDonation";
import CtaAdopt from "../components/CtaAdopt";
import CtaBecomeVolunteer from "../components/CtaBecomeVolunteer";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-blue-200 h-16 flex items-center px-4">
      <img src="/logo.svg" alt="logo" className="h-10" />
      <Link
        to="/HomePage"
        className="text-black font-medium py-2 px-4 cursor-pointer"
      >
        Accueil
      </Link>
      <CtaAdopt />
      <Link
        to="/AdoptionGuidePage"
        className="text-black font-medium py-2 px-4 cursor-pointer"
      >
        Guide d'adoption
      </Link>
      <CtaBecomeVolunteer />
      <CtaDonation />
    </nav>
  );
};

export default Navbar;
