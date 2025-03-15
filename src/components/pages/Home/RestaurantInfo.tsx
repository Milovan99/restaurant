import React from "react";
import "./RestaurantInfo.css";
import chef from "../../../assets/chef.jpg";
import ornament from "../../../assets/ornament.png";

export const RestaurantInfo = () => {
  return (
    <div className="grid-container">
      <div className="first">
        <img className="ornament-img" src={ornament}></img>
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
        <h1>Opening Hours</h1>
        <p>Saturday : 6.00 am - 12.00 pm</p>
        <p>Sunday : 6.00 am - 12.00 pm</p>
        <p>Monday : 6.00 am - 12.00 pm</p>
        <p>Tuesday : 6.00 am - 12.00 pm</p>
        <p>Wednesday : 6.00 am - 12.00 pm</p>
        <p>Thursday : 6.00 am - 12.00 pm</p>
        <p>Friday : 6.00 am - 12.00 pm</p>
      </div>
    </div>
  );
};
