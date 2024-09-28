import "../css/Header.css";
import {logoURL} from '../utilitis/constants.js'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        src={logoURL}
      />
      <div>
        <ul className="links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;


