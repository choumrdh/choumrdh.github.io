import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
      <nav className="navbar flex-column">
        <div className="col-12 col-md-auto"></div>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to ="/project" className="nav-link" >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to ="/contact" className="nav-link" data-toggle="modal" >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
  );
}
export default Navbar;
