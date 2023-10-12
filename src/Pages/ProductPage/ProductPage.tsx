import React from "react";
import './ProductPage.css';
import AppBar from "../../Components/Appbar/Appbar";

let productImg = "https://aggressivethread.com/cdn/shop/products/BLK_ON_W_1280x.jpg?v=1657642123" ;

const ProductPage = () => {

    return ( 
        <>
        <AppBar/>
        <div className="root-div-propage">
            <p className="p-pro-link">Home / Products / Dorse </p>
            <div className="div-product">
                <div className="div-img">
                    <img src={productImg} className="img-product"/>
                </div>
                <div className="div-infoproduct">
                    <h2 className="h2-pro-name">Jenny’s Closets - The winter<br/> top for female, green</h2>
                    <h1>$49</h1>
                    <hr/>
                    <p>Save 50% right now</p>
                    <p>Features:</p>
                    <ul className="option-product">
                        <li>Made with full cotton</li>
                        <li>Slim fit for any body</li>
                        <li>Quality control by JC</li>
                    </ul>
                    <p>Colors:</p>
                    <button className="btn-propage">Add To Cart</button>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ProductPage;