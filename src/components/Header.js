import { useEffect } from "react";

import { LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router";

export const Header = () => {

  console.log("Statement 1: Before useEffect");
  useEffect(() => {
    console.log("Header component mounted");
  });

  console.log("Statement 2: After useEffect");

  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} alt="FoodApp logo" />
      <div className="nav-items">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
