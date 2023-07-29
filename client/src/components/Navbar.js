import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar-custom navbar navbar-dark navbar-expand-lg">
        <NavLink className="navbar-brand" to="/">
          <b>
            <i>EnergizeExpress</i>
          </b>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                <span
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  Home
                </span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/register">
                <span
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  Register
                </span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/aboutus">
                <span
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  About Us
                </span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/contactus">
                <span
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  Contact us
                </span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/weight">
                <span
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  Log weight
                </span>
              </NavLink>
            </li>
            {/* <li className="nav-item active">
        <NavLink className="nav-link" to="/workout">Log workout</NavLink>
      </li> */}
            <li className="nav-item active">
              <NavLink className="nav-link" to="/program">
                <span
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  Workout Program
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
