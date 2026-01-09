// import { useNavigate } from "react-router-dom";
import Search from "../components/Search";
import HomeImage from "../components/HomeImage";
import ImageGallery from "../components/ImageGallery";
import ContainerCards from "../components/ContainerCards";

export default function HomePage() {
  return (
    <main>
      <HomeImage></HomeImage>
      <Search></Search>
      <ImageGallery></ImageGallery>
      <ContainerCards />
    </main>
  );
}
