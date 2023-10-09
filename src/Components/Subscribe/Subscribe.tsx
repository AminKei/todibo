import React from "react";
import "./Subscribe.css";

export const Subscribe = () => {
  return (
    <div className="div-root-Subscribe">
      <h1>
        Subscribe to our newsketter to get updates
        <br /> to our lasted callection
      </h1>
      <p className="p-Subscribe">
        get 20% off your first order just by subscribing to our newsletter{" "}
      </p>
      <div className="div-in-btn">
        <input className="input-Subscribe" placeholder="Enter your email" />
        <button className="btn-Subscribe">Subscribe</button>
      </div>
      <p style={{color:"gray"}}>
        You will by able to unsubscribing at any time<br/> raed our by Privracy
        police Here
      </p>
    </div>
  );
};
