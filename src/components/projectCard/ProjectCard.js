import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="col-md-4">
      <div className="project-card text-center">
        <div className="work-content">
          <div className="row">
            <div className="col-sm-8">
              <h3 className="w-title">{props.title}</h3>
              <div className="w-more">
                <p className="text-center">{props.description}</p>
                <span className="w-ctegory">
                  <span>
                    <a
                      href={props.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <i className="fab fa-github-square"></i>
                      </span>
                      <span>GitHub Repository</span>
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <a
          href={props.deployLink}
          target="_blank"
          rel="noopener noreferrer"
          data-gall="portfolioGallery"
          className="venobox"
        >
          <div className="work-img">
            <img
              src={process.env.PUBLIC_URL + props.image}
              alt={props.title}
              className="img-fluid"
            />
          </div>
        </a>
        <p>
          <b>Libraries Used: </b>
          {props.library}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;