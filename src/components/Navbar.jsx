import { Link, Outlet } from "react-router-dom";
import darkLogoImage from "../assets/shared/desktop/logo-dark.png";
import lightLogoImage from "../assets/shared/desktop/logo-light.png";
import facebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import youtubeIcon from "../assets/shared/desktop/icon-youtube.svg";
import twitterIcon from "../assets/shared/desktop/icon-twitter.svg";
import pinterestIcon from "../assets/shared/desktop/icon-pinterest.svg";
import instagramIcon from "../assets/shared/desktop/icon-instagram.svg";
import closeIcon from "../assets/shared/mobile/icon-close.svg";
import hamburgerIcon from "../assets/shared/mobile/icon-hamburger.svg";
import { useState } from "react";

function Navbar() {
  const [isLinksButtonActive, setIsLinksButtonActive] = useState(false);

  function ToggleLinksButton() {
    setIsLinksButtonActive(!isLinksButtonActive);
  }

  return (
    <>
      <nav className="nav-bar">
        <Link to="/Designo">
          <img src={darkLogoImage} alt="logo" className="logo" />
        </Link>

        <div className={`links ${isLinksButtonActive ? "active" : ""}`}>
          <Link to="/Designo/company" className="link">
            Our Company
          </Link>
          <Link to="/Designo/location" className="link">
            Locations
          </Link>
          <Link to="/Designo/contact" className="link">
            Contact
          </Link>
        </div>

        <img
          src={isLinksButtonActive ? closeIcon : hamburgerIcon}
          alt="links-icon"
          className="links-btn"
          onClick={ToggleLinksButton}
        />
      </nav>

      <Outlet />

      <footer className="footer">
        <div className="top-footer">
          <Link to="/Designo">
            <img src={lightLogoImage} alt="logo" className="logo" />
          </Link>

          <div className="links">
            <Link to="/Designo/company" className="link">
              Our Company
            </Link>
            <Link to="/Designo/location" className="link">
              Locations
            </Link>
            <Link to="/Designo/contact" className="link">
              Contact
            </Link>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="footer-item">
            <p className="name">Designo Central Office</p>
            <p className="name">3886 Wellington Street</p>
            <p className="name">Toronto, Ontario M9C 3J5 </p>
          </div>
          <div className="footer-item">
            <p className="name">Contact Us (Central Office)</p>
            <p className="name">P : +1 253-863-8967</p>
            <p className="name">M : contact@designo.com</p>
          </div>
          <div className="social-icons">
            <img src={facebookIcon} alt="facebook-icon" />
            <img src={youtubeIcon} alt="youtube-icon" />
            <img src={twitterIcon} alt="twitter-icon" />
            <img src={pinterestIcon} alt="pinterest-icon" />
            <img src={instagramIcon} alt="instagram-icon" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Navbar;
