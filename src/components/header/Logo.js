import { NavLink } from "react-router-dom";

import logo from "../../img/logo.png";

function Logo({ show }) {
  return (
    <NavLink to={"/"} className="logo__container">
      {show && <img className="logo" src={logo} alt="Logo" />}
      <span className="logo__text">Rooftop</span>
    </NavLink>
  );
}

export default Logo;
