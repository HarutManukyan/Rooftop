import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { userSelector } from "../redux/slices/authSlice";

function Card({ room, deleteRoom }) {
  const user = useSelector(userSelector);

  return (
    <Link to={`/rooms/${room.id}`} className="cards__style">
      <div style={{ borderRadius: "4px" }} className="card-hover">
        <div className="card-hover__content">
          <h3 className="card-hover__title">{room.name}</h3>
          <p className="card-hover__text">{room.roomInfo}</p>
          <div className="card-hover__link">
            <span>see more</span>

            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
          {user.role === "admin" && (
            <div
              style={{ margin: "1rem 0" }}
              className="delete__btn-container "
            >
              <button
                onClick={(e) => deleteRoom(e, room.id)}
                style={{
                  width: "10rem",
                  padding: "5px 1rem",
                  fontSize: "1rem",
                }}
                className="delete__btn styled__btn"
              >
                delete room
              </button>
            </div>
          )}
        </div>
        <div className="card-hover__extra">
          <h4>{room.price} AMD</h4>
        </div>
        <img src={room.mainImg} alt="" />
      </div>
    </Link>
  );
}

export default Card;
