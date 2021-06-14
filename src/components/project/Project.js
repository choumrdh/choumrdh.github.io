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
      <section id="project" class="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Looking to expand my works while I'm on top and while I'm young
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
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
      </section>
    );
  }
}

export default Projects;
