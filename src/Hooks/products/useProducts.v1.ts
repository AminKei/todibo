import axios from "axios";
import { useState } from "react";
import useFetch from "../fetch/useFetch";

type Category = "Dress" | "Shoes" | "Accessory";

type Product = {
  id: string;
  name: string;
  attributes: string[];
  image: string[];
  category: Category;
  price: number;
  type:string
}

interface ProductList {
  products: Product[]
}

const useProducts = () => {


  const { data , error, loading } = useFetch<ProductList>(
    "http://192.168.196.110:3000/api/products"
  );


  function onCheckChanged(event: React.ChangeEvent<HTMLInputElement>) {
    // if (event.target.checked) {
    //   const newList = Products.products.filter(
    //     (item) => item.type === event.target.name
    //   );
    //   setProducts(newList);
    // } else {
    //   setProducts(Products.products);
    // }
  }

  /* filter by size */

  function onchengeBYSize(event: React.ChangeEvent<HTMLInputElement>) {
    // if (event.target.checked) {
    //   const newListSize = Products.data.filter(
    //     (item) => item.size === event.target.name
    //   );
    //   setDataList(newListSize);
    // } else {
    //   setDataList(Products.data);
    // }
  }

  /* filter by price */

  function price_between_100_to_200() {
    // const filteredPrice = Products.data.filter(
    //   (item) => item.price >= 100 && item.price <= 200
    // );
    // setDataList(filteredPrice);
  }

  return {
    products: data?.products || [],
    error,
 
  };
};

export default useProducts;
