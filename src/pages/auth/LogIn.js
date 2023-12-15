import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import {
  setIsLogedIn,
  setUserData,
  usersSelector,
} from "../../redux/slices/authSlice";
import ScrollToTop from "../../components/ScrollToTop";

function LogIn() {
  const [wrongData, setWrongData] = useState(false);

  const { register, handleSubmit } = useForm();

  const users = useSelector(usersSelector);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logIn = ({ username, password }) => {
    const user = users.find(
      (user) =>
        user.username.toLowerCase() === username.toLowerCase() &&
        user.password.toLowerCase() === password.toLowerCase()
    );

    if (user) {
      dispatch(setIsLogedIn(true));
      dispatch(setUserData({ username, password }));
      setWrongData(false);
      toast.success("You loged in");
      navigate("/");
    } else {
      toast.error("wrong data");
      setWrongData(true);
    }
  };

  return (
    <div className="auth">
      <ScrollToTop />
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="auth__title">Log In</h2>
      <form className="auth__form" onSubmit={handleSubmit(logIn)}>
        <input
          required
          placeholder="Username"
          className="auth__username"
          {...register("username", { required: true })}
        />
        <input
          required
          placeholder="Password"
          className="auth__password"
          {...register("password")}
        />
        <div className="auth__btn-container">
          <button
            style={{ marginBottom: "1rem" }}
            className="styled__btn"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>

      {wrongData && (
        <p className="auth__wrong">Wrong username or password, try again</p>
      )}
      <p className="auth__register">
        Don't have an account? <Link to={"/sign"}> register</Link>
      </p>
    </div>
  );
}

export default LogIn;
