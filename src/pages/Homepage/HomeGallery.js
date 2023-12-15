import image1 from "../../img/gallery-1.jpg";
import image2 from "../../img/gallery-2.jpg";
import image3 from "../../img/gallery-3.jpg";
import image4 from "../../img/gallery-4.jpg";
import image5 from "../../img/gallery-5.jpg";
import image6 from "../../img/gallery-6.jpg";
import image7 from "../../img/gallery-7.jpg";
import image8 from "../../img/gallery-8.jpg";
import image9 from "../../img/gallery-9.jpg";
import image10 from "../../img/gallery-10.jpg";
import image11 from "../../img/gallery-11.jpg";
import image12 from "../../img/gallery-12.jpg";
import image13 from "../../img/gallery-13.jpg";
import image14 from "../../img/gallery-14.jpg";

function HomeGallery() {
  return (
    <>
      <h2 className="home__gallery-title">Gallery</h2>
      <div className="home__gallery">
        <img
          alt="Gallery img"
          className="home__gallery-img gallery-img-1"
          src={image1}
        />
        <img
          alt="Gallery img"
          className="home__gallery-img gallery-img-2"
          src={image2}
        />
        <img
          alt="Gallery img"
          className="home__gallery-img gallery-img-3"
          src={image3}
        />
        <img
          alt="Gallery img"
          className="home__gallery-img gallery-img-4"
          src={image4}
        />
        <img
          alt="Gallery img"
          className="home__gallery-img gallery-img-5"
          src={image5}
        />
        <img
          alt="Gallery img"
          className="home__gallery-img gallery-img-6"
          src={image6}
        />
        <img
          alt="Gallery img"
          className="home__gallery-img gallery-img-7"
          src={image7}
        />
        <img
          alt="Gallery img"
          className="home__gallery-img gallery-img-8"
          src={image8}
        />
        <img
          alt="Gallery img"
          className="home__gallery-img gallery-img-9"
          src={image9}
        />
        <img
          alt="Gallery img"
          className="home__gallery-img gallery-img-10"
          src={image10}
        />
        <img
          alt="Gallery img"
          className="home__gallery-img gallery-img-11"
          src={image11}
        />
        <img
          alt="Gallery img"
          className="home__gallery-img gallery-img-12"
          src={image12}
        />
        <img
          alt="Gallery img"
          className="home__gallery-img gallery-img-13"
          src={image13}
        />
        <img
          alt="Gallery img"
          className="home__gallery-img gallery-img-14"
          src={image14}
        />
      </div>
    </>
  );
}

export default HomeGallery;
