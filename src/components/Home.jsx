import { Link } from "react-router-dom";
import rightArrowIcon from "../assets/shared/desktop/icon-right-arrow.svg";
import passionateImage from "../assets/home/desktop/illustration-passionate.svg";
import resourcefulImage from "../assets/home/desktop/illustration-resourceful.svg";
import friendlyImage from "../assets/home/desktop/illustration-friendly.svg";

function Home() {
  return (
    <>
      <header className="header">
        <h1 className="title">
          Award-winning custom
          <br /> designs and digital
          <br /> branding solutions
        </h1>
        <p className="sub-title">
          With over 10 years in the industry, we are experienced in
          <br /> creating fully responsive websites, app design, and engaging
          <br /> brand experiences. Find out more about our services.
        </p>
        <Link className="btn" to="/Designo/contact">
          Learn More
        </Link>
        <div className="header-img"></div>
      </header>

      <section className="banner">
        <Link className="left-img" to="/Designo/webdesign">
          <h2 className="heading">Web Design</h2>
          <p className="sub-heading">
            View Projects <img src={rightArrowIcon} alt="right-arrow-icon" />
          </p>
        </Link>
        <div className="right-side">
          <Link className="top-img" to="/Designo/appdesign">
            <h2 className="heading">App Design</h2>
            <p className="sub-heading">
              View Projects <img src={rightArrowIcon} alt="right-arrow-icon" />
            </p>
          </Link>
          <Link className="bottom-img" to="/Designo/graphicdesign">
            <h2 className="heading">Graphic Design</h2>
            <p className="sub-heading">
              View Projects <img src={rightArrowIcon} alt="right-arrow-icon" />
            </p>
          </Link>
        </div>
      </section>

      <section className="resources">
        <div className="resource-item">
          <img src={passionateImage} alt="passionate-image" />
          <h2 className="name">Passionate</h2>
          <p className="text">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
        <div className="resource-item">
          <img src={resourcefulImage} alt="resourceful-image" />
          <h2 className="name">Resourceful</h2>
          <p className="text">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our client's needs.
          </p>
        </div>
        <div className="resource-item">
          <img src={friendlyImage} alt="friendly-image" />
          <h2 className="name">Friendly</h2>
          <p className="text">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
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
    </>
  );
}

export default Home;
