import React from 'react';
import "./Intro.css"

const Intro = () => {
    return ( 
       
  <div id="home" class="intro route bg-image" >
    <div class="overlay-itro"></div>
    <div class="intro-content display-table">
      <div class="table-cell">
        <div class="container">
          {/* <p class="display-6 color-d">Hello, world!</p> */}
          <h1 class="intro-title mb-4">I am Michelle Chou</h1>
          <p class="intro-subtitle"><span class="text-slider-items">Web Developer,Frontend Developer,Full-Stack Developer</span><strong class="text-slider"></strong></p>
          {/* <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
        </div>
      </div>
    </div>
  </div>
     );
}
 
export default Intro;