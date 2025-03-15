import React from "react";
import restaurant_main from "../../../assets/restaurant_main.jpg";
import "./Home.css";
import { RestaurantInfo } from "./RestaurantInfo";

export const Home = () => {
  return (
    <>
      <div className="image-container">
        <img
          src={restaurant_main} // Path relative to the public folder
          alt="Example Image"
          className="restaurant_image"
        />
        <div className="image-text-great">THE GREAT</div>
        <div className="image-text-restaurant">RESTAURANT</div>
      </div>
      <RestaurantInfo />
    </>
  );
};
