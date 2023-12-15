import { FaLocationDot } from "react-icons/fa6";

function HomeTop() {
  return (
    <div className="home__top">
      <div className="home__top-title-container">
        <div className="home__top-title">
          Roof<span>Top</span>
        </div>
        <p className="home__top-text">
          Feel the comfort and relax at Rooftop Apart Hotel
        </p>
      </div>
      <div className="home__top-content-container">
        <div className="home__top-content-address">
          Yerevan city, str. Buzand, d. 107 Corp. B
          <FaLocationDot className="location" />
        </div>
        <p className="home__top-content-text">
          The first unique apart-hotel in the tallest building in the center of
          Yerevan, surrounded by a beautiful park, cafes and restaurants, with
          the best views of the city and Mount Ararat.
        </p>
      </div>
    </div>
  );
}

export default HomeTop;
