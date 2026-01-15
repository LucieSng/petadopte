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
        <div className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 z-20 w-full flex justify-center px-4">
          <Search></Search>
        </div>
      </div>
      <ImageGallery></ImageGallery>
      <ContainerCards />
      <ChangeLife></ChangeLife>
    </main>
  );
}
