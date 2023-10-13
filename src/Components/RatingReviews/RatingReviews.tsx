import React from "react";
import "./RatingReviews.css";

const RatingReviews = () => {
  return (
    <>
      <div id="RatingReviews" className="root-div-RatingReviews">
        <h3>Rating / Reviews</h3>
        <div className="item-comment">
          <p className="name-comment">Kristin Watson</p>
          <p className="text-comment">
            work with than my old site. I just choose the page, make the
            changes. You made it so simple. My new site is so much faster and
            easier to
          </p>
          <p className="rate-comment">
            <span>4.5</span>/5 <small>(20 reviews)</small>
          </p>
          <p className="date-comment">March 14, 2021</p>
        </div>
        <div className="item-comment">
          <p className="name-comment">Kristin Watson</p>
          <p className="text-comment">
            work with than my old site. I just choose the page, make the
            changes. You made it so simple. My new site is so much faster and
            easier to
          </p>
          <p className="rate-comment">
            <span>4.5</span>/5 <small>(20 reviews)</small>
          </p>
          <p className="date-comment">March 14, 2021</p>
        </div>
        
      </div>
    </>
  );
};

export default RatingReviews;
