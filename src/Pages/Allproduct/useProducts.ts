import useFetch from "../../Hooks/fetch/useFetch";
import { base_url } from "../../constants";

type Category = "Dress" | "Shoes" | "Accessory";

export type Product = {
  id: string;
  name: string;
  attributes: string[];
  image: string[];
  category: Category;
  price: number;
};

export interface ProductList {
  products: Product[];
}

export interface ProductItem {
    product: Product;
}

const useProducts = <T>(id?: string | null) => {

  const url = id
    ? `${base_url}/api/product?id=${id}`
    : `${base_url}/api/products`;

  const { data, error, loading } = useFetch<T>(url);

  return {
    data,
    error,
    loading,
  };
};

export default useProducts;
