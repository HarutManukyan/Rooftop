import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

import { bookingDatesSelector } from "../redux/slices/roomSlice";
import instance from "../services/axios";

function ThankYou() {
  const [room, setRoom] = useState({});

  const navigate = useNavigate();
  const { roomId } = useParams();

  useEffect(() => {
    instance
      .get(`rooms/${roomId}`)
      .then((res) => setRoom(res.data))
      .catch((err) => console.log(err));
  }, []);

  const bookingDates = useSelector(bookingDatesSelector);

  return (
    <div className="thank">
      <h3 className="thank__title">Thank You for Your Booking!</h3>
      <h4 className="thank__subtitle">
        We are thrilled to confirm your booking at Rooftop hotel. Your comfort
        and satisfaction are our top priorities, and we're excited to provide
        you with an exceptional stay.
      </h4>
      <div className="thank__details">
        <div className="thank__details-img-container">
          <img className="thank__details-img" alt="room" src={room.mainImg} />
          <ul className="thank__details-list">
            <li className="thank__details-title">Booking Details</li>
            <li className="thank__details-item">
              Room Name: <span>{room.name}</span>
            </li>
            <li className="thank__details-item">
              Check-in Date: <span>{bookingDates[0].startDate}</span>
            </li>
            <li className="thank__details-item">
              Check-out Date: <span>{bookingDates[0].endDate}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="thank__text">
        Our team is preparing everything to ensure your visit is as enjoyable as
        possible. If you have any special requests or preferences, please feel
        free to contact us at rooftopaparthotel@gmail.com.
        <br />
        <br />
        Once again, thank you for choosing Rooftop hotel. We can't wait to
        welcome you!
        <br />
        <br />
        Best Regards, The Rooftop hotel Team
      </div>
      <div className="thank__btn-container">
        <button onClick={() => navigate("/")} className=" styled__btn">
          Go to homepage
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
