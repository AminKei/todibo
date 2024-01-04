import AppBar from "../../Components/Appbar/Appbar";
import { Footer } from "../../Components/Footer/Footer";
import { Pagination } from "../../Components/Pagination/Pagination";
import { Subscribe } from "../../Components/Subscribe/Subscribe";
import "./AllProduct.css";
import useProducts, { ProductList } from "./useProducts";

const AllProduct = () => {
  const { data, sort_by_chipper, sort_by_expensive, sort_by_NumberVisits } =
    useProducts<ProductList>();

  return (
    <>
      <AppBar />
      <div className="div-root-all-product">
        <p>Home / Browse Products </p>
        <div className="div-root-filter">
          <div className="dropdown">
            <p className="div-filter">Filter By: </p>
            


            <div className="dropdown-content" style={{padding:'20px'}}>
      

              <label htmlFor="">Filter by Buciul :</label>
            <div className="radio-buttons">
              <label className="radio-button">
                <input type="radio" name="option" value="option1"/>
                <div  className="radio-circle"></div>
                <span className="radio-label">Male</span>
              </label>
              <label className="radio-button">
                <input type="radio" name="option" value="option2"/>
                <div  className="radio-circle"></div>
                <span className="radio-label">Famle</span>
              </label>
              <label className="radio-button">
                <input type="radio" name="option" value="option3"/>
                <div  className="radio-circle"></div>
                <span className="radio-label">Kids</span>
              </label>
            </div>

            <hr/>

            <label htmlFor="">Filter by Size :</label>
            <div className="radio-buttons">
              <label className="radio-button">
                <input type="radio" name="option" value="option1"/>
                <div  className="radio-circle"></div>
                <span className="radio-label">M</span>
              </label>
              <label className="radio-button">
                <input type="radio" name="option" value="option2"/>
                <div  className="radio-circle"></div>
                <span className="radio-label">XL</span>
              </label>
              <label className="radio-button">
                <input type="radio" name="option" value="option3"/>
                <div  className="radio-circle"></div>
                <span className="radio-label">XXL</span>
              </label>
            </div>

            <hr />

            <label htmlFor="">Filter by Price :</label>
            <div className="radio-buttons">
             <input type="range"  className="slider" id="myRange"/>
                <div style={{display:'flex', justifyContent:'space-between', marginTop:'2vh'}}>

                <h5>&50/000.00</h5>
                <h5>&0.00</h5>
                </div>
            </div>
            </div>







          </div>


          

          <div className="div-sort">
              <div className="dropdown">
                <p className="dropbtn">Sort By : </p>
                <div className="dropdown-content" >
                  <h3 onClick={sort_by_expensive}>Expensive</h3>
                  <h3 onClick={sort_by_chipper}>Chiper</h3>
                  <h3 onClick={sort_by_NumberVisits}>More see</h3>
                  <h3>News</h3>
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
