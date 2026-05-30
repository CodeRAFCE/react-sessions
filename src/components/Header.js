import { useContext, useEffect, useState } from "react";

import { LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/context/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  //Selector - useSelector is a hook provided by react-redux to access the state in the store
  //Subscribe to the store and get the cart items
  const cartItems = useSelector((store) => store.cart.items);

  const handleLoginClick = () => {
    setBtnText((prev) => (prev === "Login" ? "Logout" : "Login"));
  };

  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} alt="FoodApp logo" />
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart ({cartItems.length})</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <button className="login-btn" onClick={handleLoginClick}>
          {btnText}
        </button>
        <span className="logged-in-user">{data.loggedInUser}</span>
      </div>
    </div>
  );
};

export default Header;
