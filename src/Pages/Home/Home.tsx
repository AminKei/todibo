import AppBar from "../../Components/Appbar/Appbar";
import Brands from "../../Components/Brands/Brands";
import { Button } from "../../BaseComponents/Button/Button";
import Currated from "../../Components/Currated/Currated";
import Experiences from "../../Components/Experiences/Experiences";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import { Footer } from "../../Components/Footer/Footer";
import Limited from "../../Components/Limited/Limited";
import OptionsHome from "../../Components/OptionsHome/OptionsHome";
import { Subscribe } from "../../Components/Subscribe/Subscribe";
import "./Home.css";

const Home = () => {
  return (
    <>
      <AppBar />
      <div className="div-home">
        <img className="img-home" src={"/Assets/Images/imghome.png"} />

        <h1 className="text-home">
          Your Online Shop, the best online shopping destination with special
          discounts. Join us and take advantage of our exclusive discounts.
        </h1>
        <Button
          bgColor="#252525"
          border="#252525 solid 1px "
          color="white"
          height={60}
          width={350}
          radius="10px"
          className="btn-home"
          onClick={() => (document.location = "/AllProduct")}
        >
          Order Now
        </Button>
      </div>

      <Brands />
      <Experiences />
      <Currated />
      <FeaturedProducts />
      <Limited />
      <Subscribe />
      <OptionsHome />
      <Footer />
    </>
  );
};
export default Home;
