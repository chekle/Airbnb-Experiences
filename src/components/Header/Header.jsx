import "./Header.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
      </nav>
    </header>
  );
}

export default Header;
