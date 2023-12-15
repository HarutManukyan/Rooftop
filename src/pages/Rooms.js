import HomepageContacts from "../pages/Homepage/HomeContacts";
import instance from "../services/axios";
import ScrollToTop from "../components/ScrollToTop";
import { userSelector } from "../redux/slices/authSlice";
import Cards from "../components/Cards";
import Loader from "../components/Loader";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [addRoom, setAddRoom] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const user = useSelector(userSelector);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    instance
      .get("rooms")
      .then((res) => setRooms(res.data))
      .catch((err) => console.log(err))
      .finally(setIsLoading(false));
  }, []);

  const addRoomFunc = async ({
    number,
    name,
    maxGuests,
    size,
    price,
    mainImg,
    secondaryImg,
    img1,
    img2,
    aboutText1,
    aboutText2,
    roomInfo,
  }) => {
    setAddRoom((add) => !add);

    const newRoom = {
      number,
      name,
      maxGuests,
      size,
      price,
      bookedDates: [],
      mainImg,
      secondaryImg,
      img1,
      img2,
      aboutText1,
      aboutText2,
      roomInfo,
    };

    try {
      await instance.post("rooms", newRoom);

      const updatedRooms = await instance.get("rooms");

      setRooms(updatedRooms.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteRoom = async (e, id) => {
    e.preventDefault();

    try {
      await instance.delete(`rooms/${id}`);

      const updatedRooms = await instance.get("rooms");

      setRooms(updatedRooms.data);
      instance.post("guest", user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="rooms__container">
      <ScrollToTop />
      <h2 className="rooms__title">Available rooms</h2>
      <div className="rooms">
        {isLoading ? (
          <Loader />
        ) : (
          rooms.map((room) => (
            <Cards deleteRoom={deleteRoom} key={room.id} room={room} />
          ))
        )}
      </div>
      {user.role === "admin" && (
        <div className="rooms__add-btn-container">
          <button
            onClick={() => setAddRoom((add) => !add)}
            className="styled__btn room__add-btn"
          >
            Add room
          </button>
        </div>
      )}
      {addRoom && (
        <>
          <h2 className="rooms__form-title">add room</h2>
          <form onSubmit={handleSubmit(addRoomFunc)} className="rooms__form">
            <div>
              <label>number</label>
              <input
                required
                {...register("number")}
                className="rooms__form-input"
                placeholder="number"
              />
            </div>
            <div>
              <label>name</label>
              <input
                required
                {...register("name")}
                className="rooms__form-input"
                placeholder="name"
              />
            </div>
            <div>
              <label>max guests</label>
              <input
                {...register("maxGuests")}
                className="rooms__form-input"
                placeholder="max guests"
                required
              />
            </div>
            <div>
              <label>size</label>
              <input
                {...register("size")}
                className="rooms__form-input"
                placeholder="size"
                required
              />
            </div>
            <div>
              <label>price</label>
              <input
                {...register("price")}
                className="rooms__form-input"
                placeholder="price"
                required
              />
            </div>
            <div>
              <label>main image</label>
              <input
                {...register("mainImg")}
                className="rooms__form-input"
                placeholder="main image"
                required
              />
            </div>
            <div>
              <label>secondary image</label>
              <input
                {...register("secondaryImg")}
                className="rooms__form-input"
                placeholder="secondary image"
                required
              />
            </div>
            <div>
              <label>image 1</label>
              <input
                {...register("img1")}
                className="rooms__form-input"
                placeholder="image 1"
                required
              />
            </div>
            <div>
              <label>image 2</label>
              <input
                {...register("img2")}
                className="rooms__form-input"
                placeholder="image 2"
                required
              />
            </div>
            <div>
              <label>about text 1</label>
              <textarea
                {...register("aboutText1")}
                className="rooms__form-input"
                placeholder="about text 1"
                required
              />
            </div>
            <div>
              <label>about text 2</label>
              <textarea
                {...register("aboutText2")}
                className="rooms__form-input"
                placeholder="about text 2"
                required
              />
            </div>
            <div>
              <label>room info</label>
              <textarea
                {...register("roomInfo")}
                className="rooms__form-input"
                placeholder="room info"
                required
              />
            </div>
            <div className="rooms__add-btn-container">
              <button
                style={{ width: "25rem", height: "min-content" }}
                type="submit"
                className="styled__btn rooms__add-btn"
              >
                Add
              </button>
            </div>
          </form>
        </>
      )}
      <HomepageContacts />
    </div>
  );
}

export default Rooms;
