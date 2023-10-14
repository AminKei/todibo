import React from "react";
import "./Pagination.css";
export const Pagination = () => {
  return (
    <>
      <div className="root-item-pagination">
        <div className="group-pagination">
          <a className="item-pagination" href="#">
            Previe
          </a>
          <a className="item-pagination" href="#">
            2
          </a>
          <a className="item-pagination" href="#">
            3
          </a>
          <a className="item-pagination" href="#">
            ..
          </a>
          <a className="item-pagination" href="#">
            9
          </a>
          <a className="item-pagination" href="#">
            10
          </a>
          <a className="item-pagination" href="#">
            Next
          </a>
        </div>
      </div>
    </>
  );
};
