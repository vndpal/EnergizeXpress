import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">
    <b><i>EnergizeExpress</i></b>
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/register">Register</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/contactus">Contact us</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/weight">Log weight</NavLink>
      </li>
      {/* <li className="nav-item active">
        <NavLink className="nav-link" to="/workout">Log workout</NavLink>
      </li> */}
      <li className="nav-item active">
        <NavLink className="nav-link" to="/program">Workout Program</NavLink>
      </li>
    </ul>
  </div>
</nav>

    </>
  );
};


export default Navbar;