import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div id="home" className="intro route bg-image">
      <div className="overlay-itro"></div>
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-4">Michelle Chou</h1>
            <div className="intro-subtitle row">
              <span className="col-12 col-md-4">Full-Stack Developer</span>
              <span className="col-12 col-md-4">Front-End Developer</span>
              <span className="col-12 col-md-4">Web Developer</span>
              <strong className="text-slider"></strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
