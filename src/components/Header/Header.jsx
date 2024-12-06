import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/logo (1).svg";
import BurgerMenu from "../../assets/menu.svg";
import CloseIcon from "../../assets/close.svg";
import Instagram from "../../assets/Instagram.svg";
import Behance from "../../assets/behance-square.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Facebook from "../../assets/Facebook.svg";
import Separator from "../Widgets/Separator/Separator";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <img src={BurgerMenu} />
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <div className="close-icon" onClick={toggleMenu}>
          <img src={CloseIcon} />
        </div>
        <Link to="/">ABOUT</Link>
        <Link to="/collection">COLLECTION</Link>
        <Link to="/custom-portfolio">CUSTOM PORTFOLIO</Link>
        <Link to="#" onClick={scrollToFooter}>
          CONTACTS
        </Link>
        <p>hi@phygital.com</p>
        <div className="header-icons-wrapper">
          <Separator color="#000" opacity={0.1} className="header-separator" />
          <a href="#">
            <img src={Instagram} />
            <img src={Behance} />
            <img src={Linkedin} />
            <img src={Facebook} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
