import React from "react";
import splashscreen from "../../images/splashscreen.jpg";
import "./Splash.css";
import pdf from "../../images/pdf.svg";
import github from "../../images/github.svg";
import linkedIn from "../../images/linkedin.svg";
import CV from "../../static/CV.pdf";

const Splash = () => {
  return (
    <div className="splash">
      <img className="splash-image" src={splashscreen} alt="splashScreen" />
      <div className="splash-text">
        <h1>
          Hey,<br></br> I'm Aadil
        </h1>
        <p>
          I'm a Full Stack Developer with a strong passion for building responsive web applications with great
          user experiences. Here's a bit more{" "}
          <span>
            <a href="#about">about me.</a>
          </span>
        </p>
        <div className="socials">
          <a href="https://github.com/awaghat99" target="_blank" rel="noreferrer">
            <img src={github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/aadil-waghat-a69953227/" target="_blank" rel="noreferrer">
            <img src={linkedIn} alt="linkedIn" />
          </a>
          <a href={CV} target="_blank" rel="noreferrer">
            <img src={pdf} alt="pdf" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Splash;
