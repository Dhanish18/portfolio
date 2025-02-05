import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    gsap.fromTo(
      "#navbar",
      { y: -100, opacity: 0 }, // Start off-screen above
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".nav-link",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // GSAP hover animation
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          scale: 1.1, // Slightly enlarge on hover
          color: "#ffcb42", // Change text color
          duration: 0.3,
          ease: "power2.out",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(link, {
          scale: 1, // Reset size
          color: "#fff", // Reset color
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <>
      <div id="navbar" className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" id="nav-title" href="#home">
              Portfolio
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#profile">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
