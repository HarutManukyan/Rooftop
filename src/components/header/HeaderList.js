import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import instance from "../../services/axios";
import {
  isLogedInSelector,
  setIsLogedIn,
  setUsersList,
  userSelector,
} from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import userImg from "../../img/user.jpg";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

function HeaderList() {
  const width = window.outerWidth;

  const [users, setUsers] = useState([]);
  const [logOutWindow, setLogOutWindow] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [animation2, setAnimation2] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

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
    setOpenMenu((menu) => !menu);
    setAnimation2((anim) => !anim);
    dispatch(setUsersList(users));
  };

  const logOut = (leave) => {
    setAnimation((anim) => !anim);
    setTimeout(() => {
      setLogOutWindow((window) => !window);
    }, 300);

    if (leave === true) {
      dispatch(setIsLogedIn(false));
    }
  };

  const menu = () => {
    if (animation2) {
      setTimeout(() => {
        setAnimation2((anim) => !anim);
      }, 200);
      setTimeout(() => {
        setOpenMenu((menu) => !menu);
      }, 500);
    } else {
      setAnimation2((anim) => !anim);
      setOpenMenu((menu) => !menu);
    }
  };

  const goToPage = () => {
    setOpenMenu((menu) => !menu);
    setAnimation2((anim) => !anim);
  };

  return (
    <div className={width < 600 ? "header__burger" : "header__list"}>
      {width > 600 ? (
        <ul>
          <NavLink to={"/"} className="header__list-item">
            home
          </NavLink>
          <NavLink to={"/about"} className="header__list-item">
            about us
          </NavLink>
          <NavLink to={"/rooms"} className="header__list-item">
            rooms
          </NavLink>
        </ul>
      ) : (
        <div className="header__burger">
          {animation2 ? (
            <MdOutlineClose onClick={menu} className="header__menu" />
          ) : (
            <IoMdMenu onClick={menu} className="header__menu" />
          )}
          {openMenu && (
            <div className=" header__burger-open">
              <ul
                className={
                  animation2
                    ? "header__burger-list header__burger-in"
                    : "header__burger-list header__burger-out"
                }
              >
                <div className="header__right">
                  {isLogedIn ? (
                    <div
                      onClick={logOut}
                      className="header__user header__burger-item"
                    >
                      <img
                        className="header__user-img"
                        src={userImg}
                        alt="user"
                      />
                      <p className="header__user-name">
                        {user ? user.username : "USER__NAME"}
                      </p>
                    </div>
                  ) : (
                    <NavLink
                      onClick={() => goToAuth()}
                      to={"/auth"}
                      className="header__login header__burger-item"
                    >
                      LogIn
                    </NavLink>
                  )}
                </div>
                <NavLink
                  onClick={() => goToPage()}
                  to={"/"}
                  className="header__burger-item"
                >
                  home
                </NavLink>
                <NavLink
                  onClick={() => goToPage()}
                  to={"/about"}
                  className="header__burger-item"
                >
                  about us
                </NavLink>
                <NavLink
                  onClick={() => goToPage()}
                  to={"/rooms"}
                  className="header__burger-item"
                >
                  rooms
                </NavLink>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HeaderList;
