import './Styles.css';
import logo from '../assets/logo.jpg';

function Header() {
  return (
    <div className="header-logo">
      <img className="logo" src={logo} alt="Little Lemon logo" />
    </div>
  );
}

export default Header;
