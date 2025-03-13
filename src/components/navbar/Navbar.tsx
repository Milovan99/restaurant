import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav>
      <NavLink to="/restaurant" end className="title">
        Restaurant
      </NavLink>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/restaurant/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/restaurant/service">Service</NavLink>
        </li>
        <li>
          <NavLink to="/restaurant/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
