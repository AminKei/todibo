import React from "react";
import "./AllProduct.css";
import AppBar from "../../Components/Appbar/Appbar";
import { Subscribe } from "../../Components/Subscribe/Subscribe";
import { Footer } from "../../Components/Footer/Footer";
import { Pagination } from "../../Components/Pagination/Pagination";

let Product =
  "https://images.boardriders.com/globalGrey/rvca-products/all/default/large/avjzt00735_rvca,w_vwt_frt1.jpg";

  let cartIcon =
  "https://www.mrstastekw.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fempty-cart.bfde06e6.gif&w=256&q=75";
  

const AllProduct = () => {
  return (
    <>
      <AppBar />
      <div className="div-root-all-product">
        <p>Home / Browse Products </p>
        <div className="div-root-filter">
          <div className="div-filter">filter:</div>
          
          <div className="div-sort">
            <div className="filter">
              <div className="dropdown">
                <p className="dropbtn">Sort By :  </p>
                <div className="dropdown-content">
                  <h3 >Expensive</h3>
                  <h3 >Chiper</h3>
                  <h3 >More see</h3>
                  <h3 >News</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="root-allproduct-list">
      
          <div className="item-allpro" onClick={() => document.location = "/ProductPage"}>
            <img src={Product} className="item-img-pro" alt="product" />
            <p> Autumn</p>
            <h2> $120</h2>
            <img src={cartIcon} width={58}/>
            
          </div>
        </div>
      </div>
      <Pagination />
      <Subscribe />
      <Footer />
    </>
  );
};

export default AllProduct;
