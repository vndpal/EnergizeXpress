import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = props => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       {/* <NavLink className="navbar-brand" to="/"><img src={logo} alt="logo" /></NavLink> */}
       <NavLink className="navbar-brand" to="/"><b><i>EnergizeExpress</i></b></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to='/'>Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/aboutus">About Us <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/contactus">Contact us <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/weight">Log weight <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/workout">Log workout <span className="sr-only">(current)</span></NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};


export default Navbar;