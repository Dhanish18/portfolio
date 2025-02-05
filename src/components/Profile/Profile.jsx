import React from "react";
import "./Profile.css";
import Navbar from "../Navbar/Navbar";

const Profile = () => {
  return (
    <div className="Profile" id="profile">
      <Navbar />

      <div id="main" className="main col-12 text-center my-5">
        <h3>Hello, This is</h3>
        <h1>Dhanish Marudhu M</h1>
        <h3>
          And I'm a <span id="clr">Software Developer</span>
        </h3>
        <p className="controlwidth">
          As a component based web application developer and an enthusiastic
          self learner, I am constantly seeking new challenges and opportunities
          to expand my knowledge. I am confident that my strong work ethic,
          technical proficiency, and commitment make me a valuable asset to
          team.
        </p>
        <h5>dhanishmarudhu@gmail.com</h5>
      </div>
    </div>
  );
};

export default Profile;
