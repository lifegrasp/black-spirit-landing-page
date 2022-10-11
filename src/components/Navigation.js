import { Link } from "react-router-dom";
import '../styles/Navigation.css';

function Navigation() {
  return (
      <nav className="Nav">
        <div>Logo</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navigation;