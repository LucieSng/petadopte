// import { useNavigate } from "react-router-dom";
import Search from "../components/Search";
import HomeImage from "../components/HomeImage";
import ImageGallery from "../components/ImageGallery";
export default function Homepage() {
  return (
    <main>
      <HomeImage></HomeImage>
      <Search></Search>
      <ImageGallery></ImageGallery>
    </main>
  );
}
