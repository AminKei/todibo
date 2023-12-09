import React, { useState } from "react";
import "./AllProduct.css";
import AppBar from "../../Components/Appbar/Appbar";
import { Subscribe } from "../../Components/Subscribe/Subscribe";
import { Footer } from "../../Components/Footer/Footer";
import { Pagination } from "../../Components/Pagination/Pagination";
import Products from "../../Api/Products.json";

let cartIcon =
  "https://www.mrstastekw.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fempty-cart.bfde06e6.gif&w=256&q=75";

const AllProduct = () => {
  const [dataList, setDataList] = useState(Products.data);


  /* filter by type : */

  function onCheckChanged(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      const newList = Products.data.filter((item) => item.type === event.target.name);
      setDataList(newList);
    }
    else {
      setDataList(Products.data);
    }
  }
  

  /* filter by size */

  function onchengeBYSize(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      const newListSize = Products.data.filter(
        (item) => item.size === event.target.name
      );
      setDataList(newListSize);
    } else {
      setDataList(Products.data);
    }
  }

  /* filter by price */

  function price_between_100_to_200() {
    const filteredPrice = Products.data.filter(
      (item) => item.price >= 100 && item.price <= 200)
      setDataList(filteredPrice);
  }



  return (
    <>
      <AppBar />
      <div className="div-root-all-product">
        <p>Home / Browse Products </p>
        <div className="div-root-filter">
          <div className="div-filter">
            <p>filter by type : </p>
            <div>
              <label htmlFor="">Tops</label>
              <input type="checkbox" name="tops" onChange={onCheckChanged} />
              <label htmlFor="">T shert</label>
              <input type="checkbox" name="tshert" onChange={onCheckChanged} />
              <label htmlFor="">Shose</label>
              <input type="checkbox" name="shose" onChange={onCheckChanged} />

              <label htmlFor="">Price Filter</label>
              <input type="checkbox" onChange={price_between_100_to_200} />
            </div>
            <br />
            <div>
              <p>Filter by size :</p>
              <label>L</label>
              <input type="checkbox" name="L" onChange={onchengeBYSize} />
              <label>XL</label>
              <input type="checkbox" name="XL" onChange={onchengeBYSize} />
            </div>
          </div>

          <div className="div-sort">
            <div className="filter">
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

        <div className="root-allproduct-list">
          {dataList.map((item, index) => {
            return (
              <div
                className="item-allpro"
                onClick={() => (document.location = "/ProductPage")}
              >
                <img src={item.img} className="item-img-pro" alt="product" />
                <p> {item.name}</p>
                <h2> ${item.price}</h2>
                <img src={cartIcon} width={58} />
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
