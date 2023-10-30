import React from "react";
import splashscreen from "../../images/splashscreen.jpg";
import "./Splash.css";
import pdf from "../../images/pdf.svg";
import github from "../../images/github.svg";
import linkedIn from "../../images/linkedin.svg";

const Splash = () => {
  return (
    <div className="splash">
      <img className="splash-image" src={splashscreen} alt="splashScreen" />
      <div className="splash-text">
        <h1>
          Hey,<br></br> I'm Aadil
        </h1>
        <p>
          I'm a Full Stack Developer with a strong passion for building web applications with great user experiences. Here's a bit more <span>about me.</span>
        </p>
        <div className="socials">
          <img src={github} alt="github" />
          <img src={linkedIn} alt="linkedIn" />
          <img src={pdf} alt="pdf" />
        </div>
      </div>
    </div>
  );
};

export default Splash;
