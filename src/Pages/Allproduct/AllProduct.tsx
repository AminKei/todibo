import { useState } from "react";
import AppBar from "../../Components/Appbar/Appbar";
import { Footer } from "../../Components/Footer/Footer";
import { Pagination } from "../../Components/Pagination/Pagination";
import { Subscribe } from "../../Components/Subscribe/Subscribe";
import "./AllProduct.css";
import useProducts, { ProductList } from "../../Hooks/products/useProducts";

const AllProduct = () => {
  const {
    data,
    gender,
    size,
    filters,
    sort_by_chipper,
    sort_by_expensive,
    sort_by_NumberVisits,
    filter_by_gender,
    filter_by_Size,
    onPriceChanged,
  } = useProducts<ProductList>();

  return (
    <>
      <AppBar />
      <div className="div-root-all-product">
        <p>Home / Browse Products </p>
        <div className="div-root-filter">
          <div className="dropdown">
            <p className="div-filter">Filter By: </p>
            <div className="dropdown-content" style={{ padding: "20px" }}>
              <label htmlFor="">Filter by Gender :</label>
              <div className="radio-buttons">
                <label className="radio-button">
                  <input
                    type="radio"
                    name="Man"
                    value={"Man"}
                    checked={gender === "Man"}
                    onChange={filter_by_gender}
                  />
                  <div className="radio-circle"></div>
                  <span className="radio-label">Man</span>
                </label>
                <label className="radio-button">
                  <input
                    type="radio"
                    name="Woman"
                    value={"Woman"}
                    checked={gender === "Woman"}
                    onChange={filter_by_gender}
                  />
                  <div className="radio-circle"></div>
                  <span className="radio-label">Woman</span>
                </label>
                <label className="radio-button">
                  <input
                    type="radio"
                    name="Kids"
                    value={"Kids"}
                    checked={gender === "Kids"}
                    onChange={filter_by_gender}
                  />
                  <div className="radio-circle"></div>
                  <span className="radio-label">Kids</span>
                </label>
              </div>

              <hr />

              <label htmlFor="">Filter by Size :</label>
              <div className="radio-buttons">
                <label className="radio-button">
                  <input
                    type="radio"
                    name="M"
                    value={"M"}
                    checked={size === "M"}
                    onChange={filter_by_Size}
                  />
                  <div className="radio-circle"></div>
                  <span className="radio-label">M</span>
                </label>
                <label className="radio-button">
                  <input
                    type="radio"
                    name="XL"
                    value={"XL"}
                    checked={size === "XL"}
                    onChange={filter_by_Size}
                  />
                  <div className="radio-circle"></div>
                  <span className="radio-label">XL</span>
                </label>
                <label className="radio-button">
                  <input
                    type="radio"
                    name="XXL"
                    value={"XXL"}
                    checked={size === "XXL"}
                    onChange={filter_by_Size}
                  />
                  <div className="radio-circle"></div>
                  <span className="radio-label">XXL</span>
                </label>
              </div>

              <hr />

              <label htmlFor="">Filter by Price :</label>
              <div className="radio-buttons">
                <input
                  type="range"
                  className="slider"
                  id="myRange"
                  onChange={onPriceChanged}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "2vh",
                  }}
                >
                  <h5>& 50/000.00</h5>
                  <h5>& 20.00</h5>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "110px",
                  marginTop: "3vh",
                }}
              >
                <label>Only Available Products</label>
                <input type="checkbox" />
              </div>
              <a href="#" style={{ marginTop: "2vh" }}>
                <p>Reset All Filters</p>
              </a>
            </div>
          </div>

          <div style={{ display: "flex", gap: "20px", float: "left" }}>
            <p>Filters applied:</p>
            {filters.map((filter) => (
              <h3 key={filter}>{filter}</h3>
            ))}
          </div>

          <div className="div-sort">
            <div className="dropdown">
              <p className="dropbtn">Sort By : </p>
              <div className="dropdown-content" style={{ width: "340px" }}>
                <h3 onClick={sort_by_expensive}>Expensive</h3>
                <h3 onClick={sort_by_chipper}>Chiper</h3>
                <h3 onClick={sort_by_NumberVisits}>More see</h3>
                <h3 onClick={undefined}>Most relevant</h3>
              </div>
            </div>
          </div>
        </div>

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
      </div>

      <Pagination />
      <Subscribe />
      <Footer />
    </>
  );
};

export default AllProduct;
