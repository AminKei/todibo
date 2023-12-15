import React from "react";
import './TheDatalist.css';
import MoreBuyProduct from '../../Api/Products.json';
import { useSearchParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";

const TheDatalist = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const selectedId = searchParams.get("id");
  const selected = MoreBuyProduct.data.find(
    (item) => item.id == Number(selectedId)
  );



  return (
    <div className="div-root-data" id="TheDatalist">
      <h3 className="text-root-data"> The Datalist</h3>
      {
        selected ? 
      <p className="textera-data">
        {selected?.Datalist}
       
      </p>
      :
        <Loading/>
      }
    </div>
  );
};

export default TheDatalist;
