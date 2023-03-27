import { Link } from "react-router-dom";
import canadaImage from "../assets/shared/desktop/illustration-canada.svg";
import australiaImage from "../assets/shared/desktop/illustration-australia.svg";
import unitedKingdomImage from "../assets/shared/desktop/illustration-united-kingdom.svg";

function Contact() {
  return (
    <>
      <section className="contact">
        <div className="content">
          <h2 className="heading">Contact Us</h2>
          <p className="sub-heading">
            Ready to take it to the next level? Let's talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that's relatable to your
            users, drop us a line.
          </p>
        </div>
        <form className="form">
          <input
            type="text"
            className="form-input"
            name="name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="form-input"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            className="form-input"
            name="phone"
            placeholder="Phone"
          />
          <textarea
            name="textarea"
            rows="3"
            className="form-input"
            placeholder="Your Message"
            required
            onResize={false}
          ></textarea>
          <button type="button" className="btn">
            Sumbit
          </button>
        </form>
      </section>

      <section className="choices second">
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
    </>
  );
}

export default Contact;
