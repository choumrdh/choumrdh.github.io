import React, { Component } from "react";
import Resume from "../header/Mchou_Resume2020.pdf";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <header className="flex-column flex-md-row text-center ">
          <h1 className="display-4">Michelle Chou</h1>
          <h3>Full-Stack Web Developer</h3>
          <div className="container">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/michelle-chou-ba1b2a52/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <i className="fab fa-linkedin"></i>
                </span>
              </a>
              <a
                href="https://github.com/choumrdh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <i className="fab fa-github"></i>
                </span>
              </a>
              <a href={Resume} target="_blank" rel="noopener noreferrer">
                <span>
                  <i className="fas fa-file-alt"></i>
                </span>
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
