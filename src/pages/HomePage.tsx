// import { useNavigate } from "react-router-dom";
import Search from "../components/Search";
import HomeImage from "../components/HomeImage";
import ImageGallery from "../components/ImageGallery";

import ContainerCards from "../components/ContainerCards";
import ChangeLife from "../components/ChangeLife";

export default function Homepage() {
  return (
    <main>
      <HomeImage></HomeImage>
      <Search></Search>
      <ImageGallery></ImageGallery>

      <ContainerCards />

      <ChangeLife></ChangeLife>

      <ContainerCards />
      <ChangeLife></ChangeLife>
    </main>
  );
}
