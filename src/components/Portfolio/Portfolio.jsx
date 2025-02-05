import React from "react";
import "./Portfolio.css";
import Profile from "../Profile/Profile";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;
