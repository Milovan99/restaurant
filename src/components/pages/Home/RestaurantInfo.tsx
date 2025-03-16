import React from "react";
import "./RestaurantInfo.css";
import chef from "../../../assets/chef.jpg";
import ornament from "../../../assets/ornament.png";
import phone from "../../../assets/phone.png";

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

        <div className="contact">
          <img src={phone} className="phone-img" />
          <p>+000 000 000</p>
        </div>
      </div>

      <div className="main">
        <img src={chef} alt="Example Image" className="restaurant_image" />
      </div>

      <div className="aside">
        <h1>Opening Hours</h1>
        <div className="schedule-item">
          <span>SATURDAY:</span>
          <span>6.00 am - 12.00 pm</span>
        </div>
        <div className="schedule-item">
          <span>SUNDAY:</span>
          <span>6.00 am - 12.00 pm</span>
        </div>
        <div className="schedule-item">
          <span>MONDAY:</span>
          <span>6.00 am - 12.00 pm</span>
        </div>
        <div className="schedule-item">
          <span>TYESDAY:</span>
          <span>6.00 am - 12.00 pm</span>
        </div>
        <div className="schedule-item">
          <span>WEDNESDAY:</span>
          <span>6.00 am - 12.00 pm</span>
        </div>
        <div className="schedule-item">
          <span>THURSDAY:</span>
          <span>6.00 am - 12.00 pm</span>
        </div>
        <div className="schedule-item">
          <span>FRIDAY:</span>
          <span>6.00 am - 12.00 pm</span>
        </div>
      </div>
    </div>
  );
};
