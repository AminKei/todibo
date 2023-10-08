import React from "react";
import ImgHome from "../../Assets/Images/imghome.png";
import "./Home.css";
import AppBar from "../../Components/Appbar/Appbar";
import Brands from "../../Components/Brands/Brands";
import Experiences from "../../Components/Experiences/Experiences";
import OptionsHome from "../../Components/OptionsHome/OptionsHome";
import Currated from "../../Components/Currated/Currated";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <>
      <AppBar />
      <div className="div-home">
        <img className="img-home" src={ImgHome} />
        
        <h1 className="text-home" >Level up your style with our spring collections </h1>
        <button className="btn-home">Shop Now</button>
      </div>

      <Brands/>
      <Experiences/>
      <Currated/>
      <FeaturedProducts/>
      <OptionsHome/>
    </>
  );
};
export default Home;
