import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

import gallery1 from "../../img/gallery-1.jpg";
import gallery2 from "../../img/gallery-2.jpg";
import gallery3 from "../../img/gallery-3.jpg";
import gallery4 from "../../img/gallery-4.jpg";
import gallery5 from "../../img/gallery-5.jpg";
import gallery6 from "../../img/gallery-6.jpg";
import gallery7 from "../../img/gallery-7.jpg";

function HomeSlider() {
  const [index, setIndex] = useState(1);

  const slider = [
    {
      id: 1,
      img: gallery1,
      title: "Luxurious comfort nestled in urban elegance",
      text1:
        "Step into our luxurious hotel where opulence intertwines seamlessly with comfort. Indulge in breathtaking panoramic views from elegantly designed rooms, each a haven of relaxation. Our commitment to exceptional service ensures your every need is met with grace. Whether it's the fine dining experiences, the rejuvenating spa, or the state-of-the-art facilities, your stay promises to be an unforgettable blend of sophistication and warmth.",
      text2:
        "Our hotel's rooftop bar offers a mesmerizing panorama, perfect for evenings of unwinding with artisan cocktails. Let our attentive staff elevate your experience as you soak in the city's lights, creating unforgettable memories.",
    },
    {
      id: 2,
      img: gallery2,
      title: "Breathtaking views from our lavish suites",
      text1:
        "Nestled within our boutique hotel lies a sanctuary of serenity. Impeccably styled rooms offer a personalized touch, inviting you into a world of refined elegance and modern comforts. Our intimate setting ensures a unique stay, where every detail is meticulously crafted for your pleasure. From the personalized service to the chic ambiance, immerse yourself in a retreat designed for a discerning traveler seeking both luxury and intimacy.",
      text2:
        "Embrace the charm of our boutique hotel's hidden garden, a secluded spot for intimate gatherings or quiet contemplation. With a curated selection of wines and personalized service, savor moments of serenity amidst lush surroundings.",
    },
    {
      id: 3,
      img: gallery3,
      title: "Serenity meets sophistication at our doorstep",
      text1:
        "Experience the epitome of grandeur at our five-star establishment. Lavish suites exude elegance while our world-class amenities cater to your every desire. Indulge in exquisite dining options and unparalleled service that goes beyond expectations. Immerse yourself in a world of luxury where every moment is curated to offer the finest in comfort, ensuring a stay that lingers in your memory long after departure.",
      text2:
        "Elevate your stay with our exclusive butler service, ensuring every desire is met effortlessly. Indulge in a private dining experience, curated just for you, in the opulence of your suite, creating memories to cherish.",
    },
    {
      id: 4,
      img: gallery4,
      title: "Impeccable design, an oasis of tranquility",
      text1:
        "Our historic hotel merges the charm of yesteryears with modern sophistication. Each room tells a story through its timeless architecture, blending seamlessly with contemporary comforts. Immerse yourself in an ambiance that pays homage to tradition while offering the utmost in luxury. With attentive service and a commitment to preserving history, your stay promises a unique blend of old-world charm and modern convenience. ",
      text2:
        "Join our historical tours and discover the stories behind the architectural marvels that shape our hotel. Unveil the secrets of the past while enjoying modern comforts, experiencing a stay that bridges eras seamlessly.",
    },
    {
      id: 5,
      img: gallery5,
      title: "Indulge in refined luxury and timeless charm",
      text1:
        "Find your escape within our resort-style hotel, a sanctuary that harmonizes comfort with nature's beauty. Spacious rooms offer tranquil views of lush gardens, inviting you to unwind in serene surroundings. With an array of recreational facilities and attentive service, your stay is tailored for both relaxation and adventure. Embrace the essence of rejuvenation as our resort becomes your haven away from the bustling world.",
      text2:
        "Delight in the holistic wellness experience at our resort, from morning yoga sessions overlooking the gardens to indulgent spa treatments. Let our concierge tailor your day, ensuring a perfect blend of relaxation and adventure.",
    },
    {
      id: 6,
      img: gallery6,
      title: "Where modern amenities meet classic allure",
      text1:
        "Our urban retreat embodies sophistication in the heart of the city. Stylish accommodations combine modernity with refined elegance, offering a luxurious haven for the discerning traveler. Indulge in gourmet dining experiences and relish the convenience of a central location. With a dedication to impeccable service, your stay promises an urban escape where every moment is crafted for your comfort and pleasure.",
      text2:
        "Dive into the city's vibrant culture with our bespoke guided tours, exploring hidden gems and local treasures. Return to your elegantly appointed room, where comfort and style await, reflecting the day's urban adventures.",
    },
    {
      id: 7,
      img: gallery7,
      title: "A haven of relaxation amidst city vibrancy",
      text1:
        "Surrender to the allure of our coastal oasis, where the symphony of waves meets world-class hospitality. Immerse yourself in the beauty of pristine beaches and oceanfront views from elegantly appointed rooms. With unparalleled amenities and a focus on personalized service, your stay becomes a memorable seaside experience, encapsulating the essence of relaxation and luxury by the shore.",
      text2:
        "Unwind with beachfront dining at our signature restaurant, offering a fusion of local flavors and international cuisine. Let the sound of waves serenade your evening as you savor culinary delights, creating memories by the shore.",
    },
  ];

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(slider.length);
    }
  };
  const nextSlide = () => {
    if (slider.length > index) {
      setIndex(index + 1);
    } else {
      setIndex(1);
    }
  };

  return (
    <div className="home__rooms-slider">
      {slider.map(({ id, img, title, text1, text2 }) =>
        id === index ? (
          <div className="home__rooms-slider-item" key={id}>
            <div className="home__rooms-slider-item">
              <div
                onClick={() => prevSlide()}
                className="home__rooms-slider-arrow-container home__rooms-slider-arrow-container-left"
              >
                <FaChevronLeft className="home__rooms-slider-arrow home__rooms-slider-arrow-left" />
              </div>
              <img
                className="home__rooms-slider-img"
                src={img}
                alt={`Gallery ${id}`}
              />
              <div
                onClick={() => nextSlide()}
                className="home__rooms-slider-arrow-container home__rooms-slider-arrow-container-right"
              >
                <FaChevronRight className="home__rooms-slider-arrow home__rooms-slider-arrow-right" />
              </div>
            </div>
            <div className="home__rooms-slider-content">
              <div className="slider-content-title">{title}</div>
              <div className="slider-content-text">{text1}</div>
              <div className="slider-content-text">{text2}</div>
              <div className="slider-content-btn-container">
                <Link
                  to="/rooms"
                  className="styled__btn home__rooms-slider-btn"
                >
                  See rooms
                </Link>
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default HomeSlider;
