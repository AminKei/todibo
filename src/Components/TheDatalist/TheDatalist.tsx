import React, { useMemo } from "react";
import "./TheDatalist.css";
import MoreBuyProduct from "../../Api/Products.json";
import { useSearchParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import useProducts, { ProductItem } from "../../Pages/Allproduct/useProducts";

const TheDatalist = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedId = searchParams.get("id");

  const { data } = useProducts<ProductItem>(selectedId);

  const selectedProduct = useMemo(() => {
    return data?.product;
  }, [data]);

  return (
    <div className="div-root-data" id="TheDatalist">
      <h3 className="text-root-data"> The Datalist</h3>
      {selectedProduct ? (
        <p className="textera-data">{selectedProduct?.DataList}</p>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default TheDatalist;
