import { Link } from "react-router-dom";
import './Styles.css';

function Nav() {
  return (
    <nav className="navbar-container">
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Main">Reservation</Link></li>
        <li><Link to="Login">Login</Link></li>
        <li><Link to="/DevlopedBy">DevelopedBy</Link></li>
      </ul>
    </nav>
  );
}
export default Nav;
