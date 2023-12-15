import { Link } from "react-router-dom";

import img1 from "../../img/gallery-8.jpg";
import img2 from "../../img/gallery-9.jpg";

function HomeAbout() {
  const width = window.outerWidth;

  return (
    <div className="home__about">
      <div className="home__about-left">
        <img src={img1} alt="About us" className="home__about-left-img" />
      </div>
      <div className="home__about-mid">
        <div className="home__about-mid-title">
          <div>About</div>
          <span>us</span>
        </div>
        <div className="home__about-mid-texts">
          <div className="home__about-mid-subtitle">High quality</div>
          <div className="home__about-mid-text">
            Rooftop Apart Hotel is the first unique apart-hotel in the tallest
            building in the center of Yerevan, surrounded by a beautiful park,
            cafes and restaurants, with the best views of the city and Mount
            Ararat.
          </div>
        </div>
      </div>
      <div className="home__about-right">
        {width > 1000 && (
          <div className="home__about-right-img-container">
            <img className="home__about-right-img" src={img2} alt="About us" />
          </div>
        )}
        <Link to="/about" className="home__about-right-btn styled__btn">
          About us
        </Link>
      </div>
    </div>
  );
}

export default HomeAbout;
