import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav class="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll" href="#page-top">Michelle Chou</a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="navbar-collapse collapse justify-content-end" id="navbarDefault">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll active" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll" href="#project">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      // <nav className="navbar flex-column">
      //   <div className="col-12 col-md-auto"></div>
      //   <ul className="nav">
      //     <li className="nav-item">
      //       <NavLink to="/" className="nav-link">About</NavLink>
      //     </li>
      //     <li className="nav-item">
      //       <NavLink to ="/project" className="nav-link" >
      //         Projects
      //       </NavLink>
      //     </li>
      //     <li className="nav-item">
      //       <NavLink to ="/contact" className="nav-link" data-toggle="modal" >
      //         Contact
      //       </NavLink>
      //     </li>
      //   </ul>
      // </nav>
  );
}
export default Navbar;
