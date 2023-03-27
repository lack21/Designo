import { Link } from "react-router-dom";
import rightArrowIcon from "../assets/shared/desktop/icon-right-arrow.svg";

function AppDesign() {
  return (
    <>
      <section className="top-banner">
        <h2 className="heading">App Design</h2>
        <p className="sub-heading">
          Our mobile designs bring intuitive digital solutions
          <br />
          to your customers right at their fingertips.
        </p>
      </section>

      <section className="projects">
        <div className="project">
          <div className="top-image seventh"></div>
          <div className="bottom-content">
            <h3 className="name">Airfilter</h3>
            <p className="info">
              Solving the problem of poor indoor air quality by filtering the
              air
            </p>
          </div>
        </div>
        <div className="project">
          <div className="top-image eighth"></div>
          <div className="bottom-content">
            <h3 className="name">Eyecam</h3>
            <p className="info">
              Product that lets you edit your favorite photos and videos at any
              time
            </p>
          </div>
        </div>
        <div className="project">
          <div className="top-image nineth"></div>
          <div className="bottom-content">
            <h3 className="name">Faceit</h3>
            <p className="info">
              Get to meet your favorite internet superstar with the faceit app
            </p>
          </div>
        </div>
        <div className="project">
          <div className="top-image tenth"></div>
          <div className="bottom-content">
            <h3 className="name">Todo</h3>
            <p className="info">
              A todo app that features cloud sync with light and dark mode
            </p>
          </div>
        </div>
        <div className="project">
          <div className="top-image eleventh"></div>
          <div className="bottom-content">
            <h3 className="name">Loopstudios</h3>
            <p className="info">A VR experience app made for Loopstudios</p>
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
        <Link className="item web" to="/Designo/webdesign">
          <h2 className="heading">Web Design</h2>
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

export default AppDesign;
