import { Link } from "react-router-dom";

function Location() {
  return (
    <>
      <section className="locations">
        <div className="location">
          <div className="left-side">
            <h2 className="heading">Canada</h2>
            <div className="details">
              <div className="detail-item">
                <h4 className="item-name">Designo Central Office</h4>
                <p className="text">3886 Wellington Street</p>
                <p className="text">Toronto, Ontario M9C 3J5 </p>
              </div>
              <div className="detail-item">
                <h4 className="item-name">Contact</h4>
                <p className="text">P : +1 253-863-8967</p>
                <p className="text">M : contact@designo.co</p>
              </div>
            </div>
          </div>
          <div className="right-side first-image"></div>
        </div>
        <div className="location">
          <div className="left-side">
            <h2 className="heading">Australia</h2>
            <div className="details">
              <div className="detail-item">
                <h4 className="item-name">Designo AU Office</h4>
                <p className="text"> 19 Balonne Street </p>
                <p className="text"> New South Wales 2443 </p>
              </div>
              <div className="detail-item">
                <h4 className="item-name"> Contact</h4>
                <p className="text"> P : (02) 6720 9092 </p>
                <p className="text"> M : contact@designo.au</p>
              </div>
            </div>
          </div>
          <div className="right-side second-image"></div>
        </div>
        <div className="location">
          <div className="left-side">
            <h2 className="heading">United kingdom</h2>
            <div className="details">
              <div className="detail-item">
                <h4 className="item-name"> Designo UK Office </h4>
                <p className="text"> 13 Colorado Way </p>
                <p className="text"> Rhyd-y-fro SA8 9GA </p>
              </div>
              <div className="detail-item">
                <h4 className="item-name"> Contact</h4>
                <p className="text"> P : 078 3115 1400 </p>
                <p className="text"> M : contact@designo.uk</p>
              </div>
            </div>
          </div>
          <div className="right-side third-image"></div>
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

export default Location;
