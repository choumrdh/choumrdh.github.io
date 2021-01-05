import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="col-12 col-sm-12 col-md-6 project-card">
      <p>
        <b>{props.title}:</b> {props.description} 
      </p>
      <p><i><b>Click on image for deployed version. </b></i></p>
      <p><b>Libraries Used: </b>{props.library}</p>
      <a href={props.deployLink} target="_blank" rel="noopener noreferrer">
        <img
          src={process.env.PUBLIC_URL + props.image}
          alt={props.title}
          className="img-thumbnail"
        />
      </a>
      <div className="picture-caption text-info">
        <a
          className="btn btn-info text-dark"
          href={props.githubLink}
          target="_blank" rel="noopener noreferrer"
        >
          <span><i className="fab fa-github-square"></i>
          </span>
          <span>GitHub Repository</span>
        </a>
      </div>
      <br></br>
    </div>
  );
}

export default ProjectCard;
