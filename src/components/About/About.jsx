import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="container mb-5 col-12">
      <h1>About</h1>
      <div className="chatbox qn">Can you tell us about yourself?</div>
      <div className="chatbox ans">
        Hi, I'm Dhanish Marudhu M, a passionate web developer specializing in
        React.js. I enjoy creating dynamic, user-friendly web applications.
      </div>
      <div className="chatbox qn">Are you new to this field?</div>
      <div className="chatbox ans">
        {" "}
        Yes, I'm a 22-year-old fresher, eager to kick-start my career in web
        development and apply my skills in real-world projects.
      </div>
      <div className="chatbox qn">What is your educational background?</div>
      <div className="chatbox ans">
        {" "}
        I hold a Bachelor’s degree in Computer Applications (BCA), which I
        completed in 2023.
      </div>
      <div className="chatbox qn">when can you start?</div>
      <div className="chatbox ans">
        I’m available to start immediately and excited to contribute to new
        challenges and opportunities.
      </div>
    </div>
  );
};

export default About;
