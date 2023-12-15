import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  isLogedInSelector,
  setIsLogedIn,
  setUsersList,
  userSelector,
} from "../../redux/slices/authSlice";
import userImg from "../../img/user.jpg";
import HeaderList from "./HeaderList";
import Logo from "./Logo";
import Window from "../Window";
import instance from "../../services/axios";

function Header() {
  const [users, setUsers] = useState([]);
  const [logOutWindow, setLogOutWindow] = useState(false);
  const [animation, setAnimation] = useState(false);

  const width = window.outerWidth;

  const isLogedIn = useSelector(isLogedInSelector);
  const user = useSelector(userSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    instance
      .get("guest")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const goToAuth = () => {
    dispatch(setUsersList(users));
  };

  const logOut = (leave) => {
    setAnimation((anim) => !anim);
    setTimeout(() => {
      setLogOutWindow((window) => !window);
    }, 300);

    if (leave === true) {
      dispatch(setIsLogedIn(false));
      setAnimation((anim) => !anim);
      setTimeout(() => {
        setLogOutWindow((window) => !window);
      }, 300);
    }
  };

  return (
    <>
      <header className="header">
        <Logo show={false} />
        <HeaderList />
        {width > 600 && (
          <div className="header__right">
            {isLogedIn ? (
              <div onClick={logOut} className="header__user">
                <img className="header__user-img" src={userImg} alt="user" />
                <p className="header__user-name">
                  {user ? user.username : "USER__NAME"}
                </p>
              </div>
            ) : (
              <NavLink
                onClick={() => goToAuth()}
                to={"/auth"}
                className="header__login"
              >
                LogIn
              </NavLink>
            )}
          </div>
        )}
      </header>
      <Window
        title={"Do you want to log out?"}
        height={"100vh"}
        logOut={logOut}
        logOutWindow={logOutWindow}
        animation={animation}
      />
    </>
  );
}

export default Header;
