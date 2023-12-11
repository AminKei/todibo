import React from "react";
import "./ProductPage.css";
import AppBar from "../../Components/Appbar/Appbar";
import Datalist from "../../Components/Datalist/Datalist";
import TheDatalist from "../../Components/TheDatalist/TheDatalist";
import RatingReviews from "../../Components/RatingReviews/RatingReviews";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Limited from "../../Components/Limited/Limited";
import { Subscribe } from "../../Components/Subscribe/Subscribe";
import { Footer } from "../../Components/Footer/Footer";
import { Button } from "../../Components/Button/Button";
import { useSearchParams } from "react-router-dom";
import MoreBuyProduct from "../../Api/Products.json";

let productImg =
  "https://images.boardriders.com/globalGrey/rvca-products/all/default/large/avjzt00735_rvca,w_vwt_frt1.jpg";

const ProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedId = searchParams.get("id");
  const selected = MoreBuyProduct.data.find(
    (item) => item.id == Number(selectedId)
  );

  return (
    <>
      <AppBar />
      <div className="root-div-propage">
        {
          selected ? 
          <div className="div-product">
          <div className="div-img1">
            <img src={selected?.img} className="img-product" />
          </div>
          <div className="div-infoproduct">
            <p className="p-pro-link">Home / Products / Dorse </p>
            <h2 className="h2-pro-name">
              {selected?.name}
              <br />
            </h2>
            <h1>${selected?.price}</h1>
            <hr />
            <p>Save 50% right now</p>
            <p>Features:</p>
            <ul className="option-product">
              <li>Made with full cotton</li>
              <li>Slim fit for any body</li>
              <li>Quality control by JC</li>
            </ul>
            <h3>Size : {selected?.size}</h3>
            <p>Colors:</p>
            <div className="div-colors">
              <div className="item-color1"></div>
              <div className="item-color2"></div>
              <div className="item-color3"></div>
            </div>

            <Button
              bgColor="#252525"
              border="white solid 1px "
              color="white"
              height={60}
              radius="10px"
              className="btn-propage"
            >
              Add To Cart
            </Button>
          </div>
        </div>
        :
        <h1>Loading ...</h1>
        }
        
      </div>
      <Datalist />
      <TheDatalist />
      <RatingReviews />
      <FeaturedProducts />
      <Limited />
      <Subscribe />
      <Footer />
    </>
  );
};

export default ProductPage;
