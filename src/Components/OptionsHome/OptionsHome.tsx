import React from "react";
import "./OptionsHome.css";

let icon_img = "https://static.vecteezy.com/system/resources/previews/014/396/449/non_2x/comic-style-bell-notification-icon-with-transparent-background-file-png.png";

const OptionsHome = () => {
  return (
    <div className="root-div-OptionsHome">
      <div className="box-options">
        <div className="div-img"><img src={icon_img} width={100}/></div>
        <h2>Physical health</h2>
        <p className="text-option">
          we provide money back gurrent if the product our not original{" "}
        </p>
      </div>
      <div className="box-options">
        <div className="div-img"><img src={icon_img} width={100}/></div>
        <h2>Original products</h2>
        <p className="text-option">
          we provide money back gurrent if the product our not original{" "}
        </p>
      </div>
      <div className="box-options">
        <div className="div-img"><img src={icon_img} width={100}/></div>
        <h2>Fast Delivery</h2>
        <p className="text-option">
          we provide money back gurrent if the product our not original{" "}
        </p>
      </div>
      <div className="box-options">
        <div className="div-img"><img src={icon_img} width={100}/></div>
        <h2>Online Notifications</h2>
        <p className="text-option">
          we provide money back gurrent if the product our not original{" "}
        </p>
      </div>
    </div>
  );
};
export default OptionsHome;
