import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Cart from "./Pages/Cart/Cart";
import AllProduct from "./Pages/Allproduct/AllProduct";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(

  document.getElementById("root") as HTMLElement
  
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllProduct" element={<AllProduct/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </Provider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
