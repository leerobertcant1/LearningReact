import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };

  return (
    <nav>
      <NavLink activeStyle={activeStyle} exact to="/" title="Home">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/about" Title="About">
        About
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/courses" Title="Courses">
        Courses
      </NavLink>
    </nav>
  );
}

export default Header;
