import "react-medium-image-zoom/dist/styles.css";
import { useSearchParams } from "react-router-dom";
import useProducts, { ProductItem } from "../Allproduct/useProducts";
import "./ProductPage.css";
import AppBar from "../../Components/Appbar/Appbar";
import { useMemo } from "react";
import { Button } from "../../Components/Button/Button";
import { Loading } from "../../Components/Loading/Loading";
import Datalist from "../../Components/Datalist/Datalist";
import TheDatalist from "../../Components/TheDatalist/TheDatalist";
import RatingReviews from "../../Components/RatingReviews/RatingReviews";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Limited from "../../Components/Limited/Limited";
import { Subscribe } from "../../Components/Subscribe/Subscribe";
import { Footer } from "../../Components/Footer/Footer";
const ProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedId = searchParams.get("id");

  const { data } = useProducts<ProductItem>(selectedId);

  const selectedProduct = useMemo(() => {
    return data?.product;
  }, [data]);

  return (
    <>
      <AppBar />
      <div className="root-div-propage">
        {selectedProduct ? (
          <div className="div-product">
            <div className="div-img1">
              <img src={selectedProduct.image[0]} className="img-product" />
            </div>
            <div className="div-infoproduct">
              <p className="p-pro-link">Home / Products / Dorse </p>
              <h2 className="h2-pro-name">
                {selectedProduct.name}
                <br />
              </h2>
              <h1>${selectedProduct.price}</h1>
              <hr />
              <p>Save 50% right now 🔥</p>
              <p>Features:</p>
              <ul className="option-product">
                <li>{selectedProduct.attributes[0]}</li>
                <li>{selectedProduct.attributes[1]}</li>
                <li>{selectedProduct.attributes[2]}</li>
              </ul>
              {/* <h3>Size : {selected?.}</h3> */}
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
        ) : (
          <Loading />
        )}
        <Datalist />
        <TheDatalist />
        <RatingReviews />
      </div>
      <FeaturedProducts />
      <Limited />
      <Subscribe />
      <Footer />
    </>
  );
};

export default ProductPage;
