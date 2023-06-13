import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {" "}
      <NavLink activeClassName="active" to="/about">
        {" "}
        About{" "}
      </NavLink>
      <NavLink
        to="/"
        activeClassName="active"
        style={{ marginLeft: "100px", marginTop: "40px" }}
      >
        Home
      </NavLink>
    </div>
  );
};

export default Header;
