import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { BiSolidEdit } from "react-icons/bi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

import { userSelector } from "../redux/slices/authSlice";
import instance from "../services/axios";
import { setBookingDates } from "../redux/slices/roomSlice";
import Window from "../components/Window";
import ScrollToTop from "../components/ScrollToTop";

function Booking() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [editName, setEditName] = useState(true);
  const [editNumber, setEditNumber] = useState(true);
  const [finalDate, setFinalDate] = useState([]);
  const [logOutWindow, setLogOutWindow] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [room, setRoom] = useState({});
  const [datesInRange, setDatesInRange] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(userSelector);
  const { roomId } = useParams();

  useEffect(() => {
    instance
      .get(`rooms/${roomId}`)
      .then((res) => setRoom(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (Object.keys(room).length !== 0) {
      const dates = getDatesFromBookings(room.bookedDates);
      setDatesInRange(dates);
    }
  }, [room]);

  const [editedNumber, setEditedNumber] = useState(user.phoneNumber);
  const [editedName, setEditedName] = useState(user.fullName);

  const logOut = (leave) => {
    setAnimation((anim) => !anim);
    setTimeout(() => {
      setLogOutWindow((window) => !window);
    }, 300);

    if (leave === true) {
      setAnimation((anim) => !anim);
      setTimeout(() => {
        setLogOutWindow((window) => !window);
      }, 300);

      instance
        .patch(`guest/${user.id}`, { phoneNumber: editedNumber })
        .catch((err) => console.log(err));
      instance
        .patch(`guest/${user.id}`, { fullName: editedName })
        .catch((err) => console.log(err));

      setEditName(true);
      setEditNumber(true);
    }
  };

  const submit = (e) => {
    if (startDate && endDate) {
      finalDate.push({
        startDate: `${startDate.getFullYear()}-${
          startDate.getMonth() < 10
            ? "0" + (startDate.getMonth() + 1)
            : startDate.getMonth() + 1
        }-${
          startDate.getDate() < 10
            ? "0" + startDate.getDate()
            : startDate.getDate()
        }`,
        endDate: `${endDate.getFullYear()}-${
          endDate.getMonth() < 10
            ? "0" + (endDate.getMonth() + 1)
            : endDate.getMonth() + 1
        }-${
          endDate.getDate() < 10 ? "0" + endDate.getDate() : endDate.getDate()
        }`,
      });

      if (user.roomId.includes(room.id)) {
        instance.patch(`rooms/${room.id}`, {
          bookedDates: [...room.bookedDates, ...finalDate],
        });
      } else {
        instance
          .patch(`guest/${user.id}`, { roomId: [...user.roomId, room.id] })
          .catch((err) => console.log(err));

        instance.patch(`rooms/${room.id}`, {
          bookedDates: [...room.bookedDates, ...finalDate],
        });
      }
      toast.success("You successfully booked a room!!");
      dispatch(setBookingDates(finalDate));
      navigate(`/thankyou/${roomId}`);
    } else {
      e.preventDefault();
      toast.error("Choose dates");
    }
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  function getDatesFromBookings(bookedDates) {
    const dateArray = [];

    bookedDates.forEach((booking) => {
      const startDate = new Date(booking.startDate);
      const endDate = new Date(booking.endDate);

      let currentDate = startDate;
      while (currentDate <= endDate) {
        dateArray.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
    });

    return dateArray;
  }

  const editNameFunc = () => {
    setEditName((name) => !name);
  };

  const editNumberFunc = () => {
    setEditNumber((number) => !number);
  };

  return (
    <div className="booking">
      <ScrollToTop />
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="booking__title">Booking {room.name}</h2>
      <div className="booking__form-container">
        <form className="booking__form">
          <label className="booking__label">Room name</label>
          <input
            disabled
            placeholder={room.name}
            className="booking__input booking__input-name"
          />
          <label className="booking__label">Full name</label>
          <div className="booking__input-container">
            <input
              onChange={(e) => setEditedName(e.target.value)}
              disabled={editName}
              value={editedName}
              placeholder={user.fullName}
              className="booking__input booking__input-username"
            />
            <div onClick={editNameFunc} className="booking__edit-container">
              <BiSolidEdit className="booking__edit" />
            </div>
          </div>
          {!editName && (
            <div className="booking__edit-btns">
              <div className="booking__edit-done">
                <IoCheckmarkDoneCircleSharp
                  onClick={logOut}
                  className="done__btn"
                />
              </div>
              <div className="booking__edit-cancel">
                <AiFillCloseCircle className="cancel__btn" />
              </div>
            </div>
          )}
          <label className="booking__label">Phone number</label>
          <div className="booking__input-container">
            <input
              onChange={(e) => setEditedNumber(e.target.value)}
              disabled={editNumber}
              value={editedNumber}
              placeholder={user.phoneNumber}
              className="booking__input booking__input-phone"
            />
            <div onClick={editNumberFunc} className="booking__edit-container">
              <BiSolidEdit className="booking__edit" />
            </div>
          </div>
          {!editNumber && (
            <div className="booking__edit-btns">
              <div className="booking__edit-done">
                <IoCheckmarkDoneCircleSharp
                  onClick={logOut}
                  className="done__btn"
                />
              </div>
              <div className="booking__edit-cancel">
                <AiFillCloseCircle className="cancel__btn" />
              </div>
            </div>
          )}
          <div className="booking__datepicker">
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              excludeDates={datesInRange}
              selectsRange
              selectsDisabledDaysInRange
              inline
              className="date"
            />
          </div>
          <div className="booking__btn-container">
            <button onClick={(e) => submit(e)} className=" styled__btn">
              Book
            </button>
          </div>
        </form>
      </div>
      <div className="edit__confirm-container">
        <Window
          title={"Do you want to save this data in your account?"}
          height={"120vh"}
          logOut={logOut}
          logOutWindow={logOutWindow}
          animation={animation}
        />
      </div>
    </div>
  );
}

export default Booking;
