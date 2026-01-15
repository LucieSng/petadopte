// import { useNavigate } from "react-router-dom";
import Search from "../components/Search";
import HomeImage from "../components/HomeImage";
import ImageGallery from "../components/ImageGallery";

import ContainerCards from "../components/ContainerCards";
import ChangeLife from "../components/ChangeLife";

export default function Homepage() {
  return (
    <main>
      {/* Wrapper relatif pour le positionnement du Search */}
      <div className="relative">
        <HomeImage></HomeImage>
        <Search></Search>
      </div>
      <ImageGallery></ImageGallery>
      <ContainerCards />
      <ChangeLife></ChangeLife>
    </main>
  );
}
