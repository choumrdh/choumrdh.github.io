import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div id="home" className="intro route bg-image">
      <div className="overlay-itro"></div>
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-4">I am Michelle Chou</h1>
            <p className="intro-subtitle">
              <span>Full-Stack Developer, Web Developer, Frontend Developer</span>
              <strong className="text-slider"></strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;