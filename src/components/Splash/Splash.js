import React from "react";
import splashscreen from "../../images/splashscreen.jpg";
import "./Splash.css";

const Splash = () => {
  return (
    <div className="splash">
      <img src={splashscreen} alt="splasshscreen" />
      <div className="splash-text">
        <h1>
          Hey,<br></br> I'm Aadil
        </h1>
        <p>
          I'm a Full Stack Developer with a strong passion for building web applications with great user experiences. Here's a bit more <span>about me.</span>
        </p>
      </div>
    </div>
  );
};

export default Splash;
