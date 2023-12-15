import img from "../../img/gallery-16.jpg";

import { FaLocationDot } from "react-icons/fa6";

function HomeContacts() {
  return (
    <div className="home__contacts">
      <div className="home__contacts-container">
        <div className="home__contacts-circle"></div>
        <div className="home__contacts-rect"></div>
        <div className="home__contacts-number">+37433207333</div>
        <div className="home__contacts-title--1 home__contacts-title">
          Get in
        </div>
        <div className="home__contacts-title--2 home__contacts-title">
          touch
        </div>
        <div className="home__contacts-address">
          Yerevan city, str. Buzand, d. 107 Corp. B
          <FaLocationDot className="location" />
        </div>
        <div className="home__contacts-img--container">
          <img className="home__contacts-img" alt="Contact img" src={img} />
        </div>
      </div>
    </div>
  );
}

export default HomeContacts;
