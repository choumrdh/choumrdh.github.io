import React, { Component } from "react";
import projects from "../utils/projects.json";
import ProjectCard from "../projectCard/ProjectCard";
import "./Project.css";
class Projects extends Component {
  state = {
    projects,
  };
  render() {
    return (
      <div className="container-sm ">
        <div className="card mx-auto">
          <div className="card-header bg-dark text-white text-center">
            <h3>Projects</h3>
          </div>
          <div className="card-body">
            <div className="row text-center mb-5">
              {this.state.projects.map((project) => (
                <ProjectCard
                  id={project.id}
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  description={project.description}
                  library={project.libraries}
                  deployLink={project.linkToApp}
                  githubLink={project.githubReop}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
