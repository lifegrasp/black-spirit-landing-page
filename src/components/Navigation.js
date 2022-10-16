import { Link } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <nav className="Nav">
      <div className="logo">
        <img alt="Black Spirit's Blessing" src="/images/logo.png" />
      </div>
      <ul>
        <li className="navLink">
          <Link to="/">Home</Link>
        </li>
        <li className="navLink">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="navLink">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
