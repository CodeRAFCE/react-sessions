import { useEffect } from "react";

import { LOGO_URL } from "../utils/constants";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
