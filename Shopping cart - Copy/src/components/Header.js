import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://play-lh.googleusercontent.com/4OOU73CI8knF4TByikeCEA1IOj3hb_AyXdV0Y2_XNikAoVan257QCO0ppXK9e3Z1ncY"
      />
      <div>
        <ul classname="links">
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign in</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
