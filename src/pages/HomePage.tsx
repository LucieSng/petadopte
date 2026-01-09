// import { useNavigate } from "react-router-dom";
import Search from "../components/Search";
import HomeImage from "../components/HomeImage";
import ImageGallery from "../components/ImageGallery";
import ChangeLife from "../components/ChangeLife";
export default function Homepage() {
  return (
    <main>
      <HomeImage></HomeImage>
      <Search></Search>
      <ImageGallery></ImageGallery>
      <ChangeLife></ChangeLife>
    </main>
  );
}
