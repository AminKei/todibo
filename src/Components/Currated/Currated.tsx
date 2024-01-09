import React from "react";
import "./Currated.css";

import currtedImg from "../../Assets/Images/currtedImg.png";

let currtedImg2 = "https://komolife.ir/mag/wp-content/uploads/2022/11/IMG_8217-copy-1296x700.jpg"
let currtedImg1 = "https://dayanshop.com/blog/wp-content/uploads/2022/10/best-black-outfits-fpr-men.jpg"
let currtedImg3 = "https://cdn.nody.ir/files/2021/09/09/nody-%DA%98%D8%B3%D8%AA-%D8%B9%DA%A9%D8%B3-%D8%B3%DB%8C%D8%A7%D9%87-%D8%B3%D9%81%DB%8C%D8%AF-%D8%AF%D8%AE%D8%AA%D8%B1%D8%A7%D9%86%D9%87-1631212883.jpg  "




const Currated = () => {
  return (
    <div className="root-div-Currated">
      <h1 className="text-root-currated">Currated Picks</h1>
      <div className="divs-Currated">
        <div className="item-pick">
          <img src={currtedImg1} className="img-item" />
          <button className="btn-item"> Top Man Stylish </button>
        </div>
        <div className="item-pick">
          <img src={currtedImg2} className="img-item" />
          <button className="btn-item">The Latest Accessories</button>
        </div>
        <div className="item-pick">
          <img src={currtedImg3} className="img-item" />
          <button className="btn-item">Top Stylish Woman</button>
        </div>
      </div>
    </div>
  );
};

export default Currated;
