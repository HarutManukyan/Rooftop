import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import { setIsLogedIn, setUserData } from "../../redux/slices/authSlice";
import instance from "../../services/axios";
import ScrollToTop from "../../components/ScrollToTop";

function SignUp() {
  const [wrongData, setWrongData] = useState(false);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    instance
      .get("guest")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addUser = ({
    username,
    fullName,
    nationality,
    phoneNumber,
    password,
    additionalInfo,
  }) => {
    if (users.filter((user) => user.username == username).length === 0) {
      const newUser = {
        username,
        fullName,
        nationality,
        phoneNumber,
        roomId: [],
        password,
        image: null,
        additionalInfo,
        isPaid: false,
        role: "user",
      };

      dispatch(setIsLogedIn(true));
      dispatch(setUserData({ username, password, user: newUser }));

      toast.success("Welcome!!!");
      instance.post("guest", newUser).catch((err) => console.log(err));
      navigate("/");
    } else {
      setWrongData(true);
      toast.error("User with this username already exist");
    }
  };

  return (
    <div>
      <ScrollToTop />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="auth">
        <h2 className="auth__title">Sign Up</h2>
        <form onSubmit={handleSubmit(addUser)} className="auth__form">
          <input
            required
            {...register("username")}
            placeholder="Username"
            className="auth__username"
          />
          <input
            required
            {...register("fullName")}
            placeholder="Full name"
            className="auth__username"
          />
          <input
            required
            {...register("phoneNumber")}
            placeholder="Phone number"
            className="auth__username"
          />
          <input
            {...register("nationality")}
            placeholder="Nationality"
            className="auth__username"
          />
          <input
            required
            {...register("password")}
            placeholder="Password"
            className="auth__password"
          />
          <textarea
            {...register("additionalInfo")}
            placeholder="Additional information"
            className="auth__info"
          />
          <div className="auth__btn-container">
            <button
              type="submit"
              style={{ marginBottom: "2rem" }}
              className="styled__btn"
            >
              Sign up
            </button>
          </div>
        </form>

        {wrongData && (
          <p className="auth__wrong">Wrong username or password, try again</p>
        )}
        <p className="auth__register">
          Already have an account? <Link to={"/auth"}> sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
