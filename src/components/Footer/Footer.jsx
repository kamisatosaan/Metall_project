import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Separator from "../Widgets/Separator/Separator";
import Instagram from "../../assets/Instagram.svg";
import Behance from "../../assets/behance-square.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Facebook from "../../assets/Facebook.svg";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <nav className="nav-bar">
        <Link to="/">ABOUT</Link>
        <Link to="/collection">COLLECTION</Link>
        <Link to="/custom-portfolio">CUSTOM PORTFOLIO</Link>
        <Link to="#">CONTACTS</Link>
      </nav>
      <Separator color="#fff" opacity={0.1} className="footer-separator" />
      <div className="footer-row">
        <div className="footer-column">
          <a href="#">
            <img src={Instagram} />
            <img src={Behance} />
            <img src={Linkedin} />
            <img src={Facebook} />
          </a>
          <p>YA - phigital fabrica 2023</p>
        </div>
        <p>hi@phygital.com</p>
      </div>
      <div className="footer-row-mobile">
        <div className="footer-column-mobile">
          <a href="#">
            <img src={Instagram} />
            <img src={Behance} />
            <img src={Linkedin} />
            <img src={Facebook} />
          </a>
        </div>
        <div className="footer-mobile-text">
          <p>YA - phigital fabrica 2023</p>
          <p>hi@phygital.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
