import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

import HomepageContacts from "../pages/Homepage/HomeContacts";
import { isLogedInSelector } from "../redux/slices/authSlice";
import ScrollToTop from "../components/ScrollToTop";
import instance from "../services/axios";
import Loader from "../components/Loader";

function Room() {
  const [room, setRoom] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const isLogedIn = useSelector(isLogedInSelector);

  const navigate = useNavigate();
  const { roomId } = useParams();

  useEffect(() => {
    instance
      .get(`rooms/${roomId}`)
      .then((res) => setRoom(res.data))
      .catch((err) => console.log(err));

    setIsLoading(false);
  }, []);

  const booking = () => {
    if (isLogedIn) {
      navigate(`/booking/${roomId}`);
    } else {
      alert("You should be loged in to book");
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="room">
      <ScrollToTop />

      <div className="room__top">
        <div className="room__top-img-container">
          <img className="room__top-img" alt="Room img" src={room.mainImg} />
        </div>
        <div className="room__top-title">{room.name}</div>
        <div className="room__top-text">
          All room decoration was made with ecological certified and safe
          materials.
        </div>
        <button onClick={() => booking()} className="room__top-btn styled__btn">
          Book room
        </button>
      </div>

      <div className="room__content">
        <div className="room__content-texts">
          <div className="room__content-title">
            All suites have a unique design because we want our every guest to
            feel special.
          </div>
          <div className="room__content-text">{room.roomInfo}</div>
        </div>
        <div className="room__content-img-container">
          <img
            className="room__content-img"
            alt="Room img"
            src={room.secondaryImg}
          />
        </div>
      </div>

      <div className="room__about">
        <div className="room__about-left">
          <div className="room__about-left-img-container">
            <img
              className="room__about-left-img"
              alt="Room img"
              src={room.img1}
            />
            <div className="room__about-left-title">{room.name}</div>
            <div className="room__about-left-text">{room.aboutText1}</div>
          </div>
        </div>
        <div className="room__about-right">
          <div className="room__about-right-img-container">
            <img
              className="room__about-right-img"
              alt="Room img"
              src={room.img2}
            />
            <div className="room__about-right-text">{room.aboutText2}</div>
          </div>
        </div>
      </div>

      <HomepageContacts />
    </div>
  );
}

export default Room;
