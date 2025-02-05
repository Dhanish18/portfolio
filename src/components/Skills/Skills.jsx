import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Skills.css";

const Skills = () => {
  useEffect(() => {
    gsap.to(".skill-icon", {
      rotation: 10,
      transformOrigin: "top center",
      duration: 1.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <div className="container mb-5 col-12" id="skills">
      <h1>Technical Skills</h1>
      <div className="skill-icons">
        <div className="icon-row">
          <div className="skill-icon">
            <i class="fa-brands fa-html5"></i>
            <p>Html</p>
          </div>
          <div className="skill-icon">
            <i class="fa-brands fa-css3-alt"></i>
            <p>Css</p>
          </div>
        </div>

        <div className="icon-row">
          <div className="skill-icon">
            <i class="fa-brands fa-bootstrap"></i>
            <p>Bootstrap</p>
          </div>
          <div className="skill-icon">
            <i class="fa-brands fa-js"></i>
            <p>Javascript</p>
          </div>
          <div className="skill-icon">
            <i class="fa-brands fa-react"></i>
            <p>React Js</p>
          </div>
        </div>

        <div className="icon-row">
          <div className="skill-icon">
            <i class="fa-brands fa-git-alt"></i>
            <p>Git</p>
          </div>
          <div className="skill-icon">
            <i class="fa-brands fa-node"></i>
            <p>Node js</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
