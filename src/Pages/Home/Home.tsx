import React from "react";
import ImgHome from "../../Assets/Images/imghome.png";
import "./Home.css";
import AppBar from "../../Components/Appbar/Appbar";
import Brands from "../../Components/Brands/Brands";
import Experiences from "../../Components/Experiences/Experiences";
import OptionsHome from "../../Components/OptionsHome/OptionsHome";
import Currated from "../../Components/Currated/Currated";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Limited from "../../Components/Limited/Limited";
import { Subscribe } from "../../Components/Subscribe/Subscribe";
import { Footer } from "../../Components/Footer/Footer";
import { Button } from "../../Components/Button/Button";

const Home = () => {
  return (
    <>
      <AppBar />
      <div className="div-home">
        <img className="img-home" src={ImgHome} />

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
