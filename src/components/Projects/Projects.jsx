import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="container mb-5" id="projects">
      <h1>Projects</h1>
      <div className="projects-container row p-2 p-lg-0">
        <div className="project-card col-12 col-lg-4 mb-4 mb-lg-0 ">
          <div className="project-image">
            <img src="./images/project1.png" alt="img" />
          </div>
          <h4 className="project-title">Ecommerce site</h4>
          <button className="project-github">
            <a
              href="https://github.com/Dhanish18/Ecommerce-site"
              target="_blank"
              rel="noreferrer"
            >
              github
              <span>
                <i class="fa-brands fa-github"></i>
              </span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
