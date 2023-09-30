import React from "react";
import ImgHome from "../../Assets/Images/imghome.png";
import "./Home.css";
import AppBar from "../../Components/Appbar/Appbar";
const Home = () => {
  return (
    <>
      <div className="div-home">
        <img className="img-home" src={ImgHome} />
      </div>
    </>
  );
};
export default Home;
