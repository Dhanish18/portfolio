import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    // Target the element with the class 'swing'
    gsap.to(".socialmedia-icon", {
      rotation: 10, // Rotate 15 degrees
      transformOrigin: "center", // Pivot from the top center
      duration: 2, // Animation duration
      ease: "power1.inOut", // Smooth ease
      yoyo: true, // Swing back and forth
      repeat: -1,
    });
  }, []);

  return (
    <div id="contact" className="container pb-5">
      <h1>Get in Touch</h1>
      <div className="contact-content">
        <p>
          Looking to collaborate, discuss a project, or just say hello? Feel
          free to reach out
        </p>
        <div className="userform">
          <input type="text" placeholder="type here" className="inputbox" />
          <button className="sendbtn">send message</button>
        </div>

        <div className="socialmedia-icons">
          <div className="socialmedia-icon">
            <a href="mailto:dhanishmarudhu@gmail.com">
              <i class="fa-regular fa-envelope"></i>
            </a>
          </div>
          <div className="socialmedia-icon">
            <a
              href="https://linkedin.com/in/dhanish-marudhu-314a2127b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="socialmedia-icon">
            <a
              href="https://github.com/Dhanish18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <p id="text-center">
          I'm excited about opportunities where i can contribute my
          [skills/role] and make an impact. Let's create something amazing
          together!
        </p>
        <div className="resume">
          <h5>
            <a href="./resume/my-resume.pdf" download>
              Get my Resume <i class="fa-regular fa-file-pdf"></i>
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
