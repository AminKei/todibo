import { useMemo, useState } from "react";
import useFetch from "../../Hooks/fetch/useFetch";
import { base_url } from "../../constants";
 
 type Category = "Dress" | "Shoes" | "Accessory";

 export type Gender = "Man" | "Woman" | "Kids" ;

export type Product = {
  id: string;
  name: string;
  attributes: string[];
  image: string[];
  category: Category;
  price: number;
  DataList: string;
  type: string;
  NumberVisits: number;
};

export interface ProductList {
  products: Product[];
}

export interface ProductItem {
  product: Product;
}




const useProducts = <T>(id?: string | null) => {




  const [gender, setGender] = useState<Gender>("Man");

  
  const url = id
    ? `${base_url}/api/product?id=${id}`
    : `${base_url}/api/products`;

  const { data, error, loading } = useFetch<T>(url);

  /* sort : */

  const [sort, changeSort] = useState(0);

  const products = useMemo(() => {



    if (sort === 1) {
      (data as ProductList).products.sort((a, b) => a.price - b.price) as T;
    } else if (sort === 2) {
      (data as ProductList).products.sort((a, b) => b.price - a.price) as T;
    } else if (sort === 3) {
      (data as ProductList).products.sort(
        (a, b) => a.NumberVisits - b.NumberVisits
      ) as T;
    }
    return data;
    
  }, [sort, data, gender]);

  function sort_by_expensive() {
    changeSort(2);
  }

  function sort_by_chipper() {
    changeSort(1);
  }

  function sort_by_NumberVisits() {
    changeSort(3);
  }


  /* filter:  */

  function filter_by_gender(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value)

    setGender(event.target.value as Gender)

    // if (event.target.checked) {
    //   const newList = Products.products.filter(
    //     (item) => item.type === event.target.name
    //   );
    //   setProducts(newList);
    // } else {
    //   setProducts(Products.products);
    // }

  }


  /* return : */


  return {
    gender,
    data: products,
    error,
    loading,
    sort_by_expensive,
    sort_by_chipper,
    sort_by_NumberVisits,
    filter_by_gender,
  };
};

export default useProducts;
