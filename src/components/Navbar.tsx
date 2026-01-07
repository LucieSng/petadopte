// import logo from "public/logo.svg";
// import HomePage from "../pages/HomePage";
import CtaDonation from "../components/CtaDonation";
import CtaAdopt from "../components/CtaAdopt";
import CtaBecomeVolunteer from "../components/CtaBecomeVolunteer";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-blue-200 h-16 flex items-center px-4">
      {/* <img src={logo} alt="logo" /> */}
      {/* <HomePage /> */}
      <CtaAdopt />
      <CtaBecomeVolunteer />
      <CtaDonation />
    </nav>
  );
};

export default Navbar;
