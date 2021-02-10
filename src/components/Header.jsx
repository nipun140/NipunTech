import React from "react";
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";

function Header() {
  return (
    <nav class=" navbar navbar-expand-sm navbar-light">
      <a class="navbar-brand" href="/">
        Nipun Tech
      </a>

      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink
            exact
            activeClassName="active_link"
            className="nav-link"
            to="/"
          >
            <HomeRoundedIcon />
            Home
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            exact
            activeClassName="active_link"
            className="nav-link"
            to="/about"
          >
            <InfoRoundedIcon />
            About
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            exact
            activeClassName="active_link"
            className="nav-link"
            to="/service"
          >
            <SupervisedUserCircleRoundedIcon />
            Services
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            exact
            activeClassName="active_link"
            className="nav-link"
            to="/contact"
          >
            <PhoneRoundedIcon />
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
