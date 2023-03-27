import { Link } from "react-router-dom";
import rightArrowIcon from "../assets/shared/desktop/icon-right-arrow.svg";

function WebDesign() {
  return (
    <>
      <section className="top-banner">
        <h2 className="heading">Web Design</h2>
        <p className="sub-heading">
          We build websites that serve as powerful marketing tools
          <br />
          and bring memorable brand experiences.
        </p>
      </section>

      <section className="projects">
        <div className="project">
          <div className="top-image first"></div>
          <div className="bottom-content">
            <h3 className="name">Express</h3>
            <p className="info">
              A multi-carrier shipping website for ecommerce businesses
            </p>
          </div>
        </div>
        <div className="project">
          <div className="top-image second"></div>
          <div className="bottom-content">
            <h3 className="name">Transfer</h3>
            <p className="info">
              Site for low-cost money transfers and sending money within seconds
            </p>
          </div>
        </div>
        <div className="project">
          <div className="top-image third"></div>
          <div className="bottom-content">
            <h3 className="name">Photon</h3>
            <p className="info">
              A state-of-the-art music player with high-resolution audio and DSP
              effects
            </p>
          </div>
        </div>
        <div className="project">
          <div className="top-image fourth"></div>
          <div className="bottom-content">
            <h3 className="name">Builder</h3>
            <p className="info">
              Connects users with local contractors based on their location
            </p>
          </div>
        </div>
        <div className="project">
          <div className="top-image fifth"></div>
          <div className="bottom-content">
            <h3 className="name">Blogr</h3>
            <p className="info">
              Blogr is a platform for creating an online blog or publication
            </p>
          </div>
        </div>
        <div className="project">
          <div className="top-image sixth"></div>
          <div className="bottom-content">
            <h3 className="name">Camp</h3>
            <p className="info">
              Get expert training in coding, data, design, and digital marketing
            </p>
          </div>
        </div>
      </section>

      <section className="touch">
        <h2 className="heading">
          Let's talk about
          <br /> your project
        </h2>
        <p className="sub-heading">
          Ready to take it to the next level? Contact us today and
          <br /> find out how our expertise can help your business grow.
        </p>
        <Link className="btn" to="/Designo/contact">
          Get in touch
        </Link>
      </section>

      <div className="bottom-banner">
        <Link className="item app" to="/Designo/appdesign">
          <h2 className="heading">App Design</h2>
          <p className="sub-heading">
            View Projects <img src={rightArrowIcon} alt="right-arrow-icon" />
          </p>
        </Link>
        <Link className="item graph" to="/Designo/graphicdesign">
          <h2 className="heading">Graphic Design</h2>
          <p className="sub-heading">
            View Projects <img src={rightArrowIcon} alt="right-arrow-icon" />
          </p>
        </Link>
      </div>
    </>
  );
}

export default WebDesign;
