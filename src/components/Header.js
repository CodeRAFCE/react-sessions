import { LOGO_URL } from "../utils/constants";

export const Header = () => (
  <div className="header">
    <img
      className="logo"
      src={LOGO_URL}
      alt="FoodApp logo"
    />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;