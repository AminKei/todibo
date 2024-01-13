import { useMemo, useState } from "react";
import useFetch from "../fetch/useFetch";
import { base_url } from "../../constants";

type Category = "Dress" | "Shoes" | "Accessory";

export type Gender = "Man" | "Woman" | "Kids";

export type Size = "M" | "XL" | "XXL";

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
  Gender: Gender;
  Size: Size;
};

export interface ProductList {
  products: Product[];
}

export interface ProductItem {
  product: Product;
}

const useProducts = <T>(id?: string | null) => {

  const [gender, setGender] = useState<Gender>();

  const [size, setSize] = useState<Size>();

  const [sort, changeSort] = useState(0);

  const url = id
    ? `${base_url}/api/product?id=${id}`
    : `${base_url}/api/products`;

    const { data, error, loading } = useFetch<T>(url);
    

  const products = useMemo(() => {

    if (id) {return data; }
      

    const productList = structuredClone(data) as ProductList;

    /* sort : */

    if      (sort === 1) { productList.products.sort((a, b) => a.price - b.price) as T;}
    else if (sort === 2) { productList.products.sort((a, b) => b.price - a.price) as T;}
    else if (sort === 3) { productList.products.sort((a, b) => a.NumberVisits - b.NumberVisits) as T;}

   /* filter : */

    const filter1 = productList?.products.filter(
      (product) => product.Gender === gender);

    if (filter1 && filter1.length > 0) { const filter2 = filter1.filter((product) => product.Size === size); 
    if (filter2 && filter2.length > 0) { productList.products = filter2;}
    else {productList.products = filter1;}
    }
    return productList;

  }, [sort, data, gender, size]) as T;


  
  /* functions of sort : */

  function sort_by_expensive() {
    changeSort(2);
  }

  function sort_by_chipper() {
    changeSort(1);
  }

  function sort_by_NumberVisits() {
    changeSort(3);
  }

  /* function of filter :  */

  function filter_by_gender(event: React.ChangeEvent<HTMLInputElement>) {
    setGender(event.target.value as Gender);
  }

  function filter_by_Size(event: React.ChangeEvent<HTMLInputElement>) {
    setSize(event.target.value as Size);
  }

  function onPriceChanged(event: React.ChangeEvent<HTMLInputElement>) {
    
  }

  
  /* return : */

  return {
    gender,
    size,
    data: products,
    error,
    loading,
    filters: [gender, size],
    sort_by_expensive,
    sort_by_chipper,
    sort_by_NumberVisits,
    filter_by_gender,
    filter_by_Size,
    onPriceChanged,
  };
};

export default useProducts;
