import React from "react";
import ImgHome from "../../Assets/Images/imghome.png";
import "./Home.css";
import AppBar from "../../Components/Appbar/Appbar";
import Brands from "../../Components/Brands/Brands";

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
    </>
  );
};
export default Home;
