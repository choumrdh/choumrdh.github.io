import React from "react";
import "./Navbar.css"


function Navbar() {
  return (
    <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top bg-dark" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll text-light" href="/">Michelle</a>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarButton" aria-controls="navbarButton" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="navbar-collapse collapse justify-content-end" id="navbarButton">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll active" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll" href="#project">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
export default Navbar;

