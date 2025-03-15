import React from "react";
import "./RestaurantInfo.css";
import chef from "../../../assets/chef.jpg";

export const RestaurantInfo = () => {
  return (
    <div className="grid-container">
      <div className="first">
        <h1>Welcome To Our Luxury Restaurant</h1>
        <p>
          The first restaurant proprietor is believed to have been one A.
          Boulanger, a soup vendor, who opened his business in Paris in 1765.
          The sign above his door advertised restoratives, or restaurants,
          referring to the soups and broths available within.
        </p>
      </div>

      <div className="main">
        <img src={chef} alt="Example Image" className="restaurant_image" />
      </div>

      <div className="aside">
        <h1>The City</h1>
        <p>Chania is the capital of the Chania region...</p>
      </div>
    </div>
  );
};
