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
          <div className="wrapper-text">
            <svg>
              <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                Level up your style with our spring collections<br/> See and send to your friend
              </text>
            </svg>
          </div>
        </h1>
        <Button
          bgColor="#252525"
          border="#252525 solid 1px "
          color="white"
          height={60}
          width={320}
          radius="10px"
          className="btn-home"
          onClick={() => (document.location = "/AllProduct")}
        >
          Shop Now
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
