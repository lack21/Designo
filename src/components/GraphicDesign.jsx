import { Link } from "react-router-dom";
import rightArrowIcon from "../assets/shared/desktop/icon-right-arrow.svg";

function GraphicDesign() {
  return (
    <>
      <section className="top-banner">
        <h2 className="heading">Graphic Design</h2>
        <p className="sub-heading">
          We deliver eye-catching branding materials that are
          <br />
          tailored to meet your business objectives.
        </p>
      </section>

      <section className="projects">
        <div className="project">
          <div className="top-image twelfth"></div>
          <div className="bottom-content">
            <h3 className="name">Airfilter</h3>
            <p className="info">
              Solving the problem of poor indoor air quality by filtering the
              air
            </p>
          </div>
        </div>
        <div className="project">
          <div className="top-image thirteenth"></div>
          <div className="bottom-content">
            <h3 className="name">Eyecam</h3>
            <p className="info">
              Product that lets you edit your favorite photos and videos at any
              time
            </p>
          </div>
        </div>
        <div className="project">
          <div className="top-image fourteenth"></div>
          <div className="bottom-content">
            <h3 className="name">Faceit</h3>
            <p className="info">
              Get to meet your favorite internet superstar with the faceit app
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
        <Link className="item web" to="/Designo/webdesign">
          <h2 className="heading">Web Design</h2>
          <p className="sub-heading">
            View Projects <img src={rightArrowIcon} alt="right-arrow-icon" />
          </p>
        </Link>
      </div>
    </>
  );
}

export default GraphicDesign;
