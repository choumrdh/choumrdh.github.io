import React from "react";
import Resume from "./Resume.pdf";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/Michelle_profile.jpg"
                          }
                          className="img-fluid rounded b-shadow-a"
                          alt="Me"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p>
                          <span className="title-s">Name: </span>{" "}
                          <span>Michelle Chou</span>
                        </p>
                        <p>
                          <span className="title-s">Profile: </span>{" "}
                          <span>Full-Stack Developer</span>
                        </p>
                        <p>
                          <span className="title-s">Email: </span>{" "}
                          <span>m.w.chou21@gmail.com</span>
                        </p>
                        <p>
                          <span className="title-s">Phone: </span>{" "}
                          <span>(480) 330-5011</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <div>
                      <span>Languages:</span>{" "}
                      <span className="pull-right">
                        JavaScript, HTML, CSS, SQL
                      </span>
                    </div>
                    <br />
                    <div>
                      <span>Applications</span>{" "}
                      <span className="pull-right">
                        Visual Studio Code, Git, MongoDB, MySQL, PostMan
                      </span>
                    </div>
                    <br />
                    <div>
                      <span>Libraries:</span>{" "}
                      <span className="pull-right">
                        React.js, Bootstrap, UI Kit, Material-Ui, jQuery, Moment.js,
                        Node.js, Express.js, Sequelize, Mongoose, Handlebars.js
                        
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About me</h5>
                    </div>

                    <p className="lead">
                      I am currently a dental hygienist and a full stack web
                      developer. I excel at working in fast-paced and cross
                      functional team environments. I am able to work and
                      collaborate efficiently well with others in overcoming
                      obstacles and constructive feedback. My interest as a web
                      developer stems from my determination for a career which
                      allows me to express my critical thinking abilities and
                      work flexibility.
                    </p>

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
                      <a
                        href={Resume}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>
                          <i className="fas fa-file-alt"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
