import { Link } from "react-router-dom";
import canadaImage from "../assets/shared/desktop/illustration-canada.svg";
import australiaImage from "../assets/shared/desktop/illustration-australia.svg";
import unitedKingdomImage from "../assets/shared/desktop/illustration-united-kingdom.svg";

function Company() {
  return (
    <>
      <section className="about">
        <div className="left-content">
          <h2 className="heading">About Us</h2>
          <p className="sub-heading">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We've partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We're always looking forward to creating brands, products,
            and digital experiences that connect with our clients' audiences.
          </p>
        </div>
        <div className="right-content"></div>
      </section>

      <section className="talent">
        <div className="left-content"></div>
        <div className="right-content">
          <h2 className="heading">World-class talent</h2>
          <p className="sub-heading">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="sub-heading">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand's story and mission.
          </p>
        </div>
      </section>

      <section className="choices">
        <div className="choice">
          <img src={canadaImage} alt="canada" />
          <h3 className="name">Canada</h3>
          <Link className="btn-2" to="/Designo/location">
            See Location
          </Link>
        </div>
        <div className="choice">
          <img src={australiaImage} alt="australia" />
          <h3 className="name">Australia</h3>
          <Link className="btn-2" to="/Designo/location">
            See Location
          </Link>
        </div>
        <div className="choice">
          <img src={unitedKingdomImage} alt="united-kingdom" />
          <h3 className="name">United Kingdom</h3>
          <Link className="btn-2" to="/Designo/location">
            See Location
          </Link>
        </div>
      </section>

      <section className="talent">
        <div className="right-content">
          <h2 className="heading">The real deal</h2>
          <p className="sub-heading">
            As strategic partners in our client's businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="sub-heading">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
        <div className="left-content"></div>
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

export default Company;
