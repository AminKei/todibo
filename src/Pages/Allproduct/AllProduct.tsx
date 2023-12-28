import AppBar from "../../Components/Appbar/Appbar";
import { Footer } from "../../Components/Footer/Footer";
import { Loading } from "../../Components/Loading/Loading";
import { Pagination } from "../../Components/Pagination/Pagination";
import { Subscribe } from "../../Components/Subscribe/Subscribe";
import "./AllProduct.css";
import useProducts, { ProductList } from "./useProducts";

const AllProduct = () => {
  const { data } = useProducts<ProductList>();

  return (
    <>
      <AppBar />
      <div className="div-root-all-product">
        <p>Home / Browse Products </p>
        <div className="div-root-filter">
          <div className="dropdown">
            <p className="div-filter">Filter By: </p>
            <div className="dropdown-content">
              <a href="#">
                {" "}
                <label htmlFor="">Tops</label>
                <input type="checkbox" name="tops" onChange={undefined} />
              </a>
              <a href="#">
                <label htmlFor="">T shert</label>
                <input type="checkbox" name="tshert" onChange={undefined} />
              </a>
              <a href="#">
                <label htmlFor="">Shose</label>
                <input type="checkbox" name="shose" onChange={undefined} />
              </a>
              <a href="#">
                <label htmlFor="">Price Filter</label>
                <input type="checkbox" onChange={undefined} />
              </a>
              <a href="#">
                <label>Size :</label>
                <label htmlFor="L">L</label>
                <input type="checkbox" name="L" onChange={undefined} />
                <label htmlFor="XL">XL</label>
                <input type="checkbox" name="XL" onChange={undefined} />
              </a>
            </div>
          </div>

          <div className="div-sort">
            <div className="">
              <div className="dropdown">
                <p className="dropbtn">Sort By : </p>
                <div className="dropdown-content">
                  <h3>Expensive</h3>
                  <h3>Chiper</h3>
                  <h3>More see</h3>
                  <h3>News</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {data?.products.length !== 0 ? (
          <div className="root-allproduct-list">
            {data?.products.map((item, index) => {
              return (
                <div
                  className="item-allpro"
                  onClick={() =>
                    (document.location = `/ProductPage?id=${item.id}`)
                  }
                >
                  <img
                    src={item.image[0]}
                    className="item-img-pro"
                    alt="product"
                  />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <p> {item.name}</p>
                      <h2> ${item.price}</h2>
                    </div>

                    <img
                      src="/Assets/Images/empty-cart.gif"
                      width={58}
                      style={{ marginRight: "-8vh" }}
                      className="img-product-icon"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <Loading />
          )}
      </div>

      <Pagination />
      <Subscribe />
      <Footer />
    </>
  );
};

export default AllProduct;
