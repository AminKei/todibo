import React from "react";
import "./OptionsHome.css";

const options = [
  {
    IconImg:
      "https://as1.ftcdn.net/v2/jpg/02/36/94/62/1000_F_236946228_6l4QlG19vvxfMLVdbci59hG1QcyLwQKt.jpg",
    Title: "Physical health",
    Text: "we provide money back gurrent if the product our not original",
  },
  {
    IconImg:
      "https://img.freepik.com/premium-vector/100-guaranteed-original-product-stamps-best-quality-logo-design-vector_553860-321.jpg",
    Title: "Original products",
    Text: "we provide money back gurrent if the product our not original",
  },
  {
    IconImg:
      "https://static.vecteezy.com/system/resources/previews/014/396/449/non_2x/comic-style-bell-notification-icon-with-transparent-background-file-png.png",
    Title: "Online Notifications",
    Text: "we provide money back gurrent if the product our not original",
  },
  {
    IconImg:
      "https://img.freepik.com/premium-vector/finished-delivery-icon-outline-finished-delivery-vector-icon-web-design-isolated-white-background_98396-34301.jpg",
    Title: "Fast Delivery",
    Text: "we provide money back gurrent if the product our not original",
  },
];

const OptionsHome = () => {
  return (
    <div className="root-div-OptionsHome" id="about">
      {options.map((item, key) => {
        return (
          <div className="box-options">
            <div className="div-img">
              <img src={item.IconImg} width={100} />
            </div>
            <h2>{item.Title}</h2>
            <p className="text-option">{item.Text}</p>
          </div>
        );
      })}
    </div>
  );
};
export default OptionsHome;
