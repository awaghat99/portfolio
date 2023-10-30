import React from "react";
import splashscreen from "../../images/splashscreen.jpg";
import "./Splash.css";

const Splash = () => {
  return (
    <div className="splash">
      <img src={splashscreen} alt="splasshscreen" />
    </div>
  );
};

export default Splash;
