import React from "react";
import { projects, projectsLinks } from "../utils/constants";
import { FaSearch } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="projects">
      <div className="section-center projects-center">
        <h3 className="projects-heading">our projects</h3>
        <ul className="projects-links">
          {projectsLinks.map((link) => {
            const { id, label } = link;
            return (
              <li key={id}>
                <a href="#">{label}</a>
              </li>
            );
          })}
        </ul>

        <div className="projects-list">
          {projects.map((project) => {
            const { id, title, description, src } = project;
            return (
              <div className="project">
                <img src={src} alt="project image" className="project-img" />
                <article className="project-info" key={id}>
                  <h5>{title}</h5>
                  <p>{description}</p>
                  <span>
                    <FaSearch />
                  </span>
                </article>
              </div>
            );
          })}
        </div>

        <button type="button" className="btn">
          all projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
