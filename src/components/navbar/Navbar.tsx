import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/restaurant" className="title">
        Restaurant
      </Link>
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
