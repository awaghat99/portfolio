import React from "react";
import "./About.css";
import codeImage from "../../images/code-image.avif";

const About = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in sem rutrum, egestas lorem ut, euismod augue. Proin venenatis ligula odio, ac mollis tellus sagittis sit amet. Aenean dui
          nibh, vulputate a urna quis, pulvinar dictum diam. Nulla efficitur ligula ut cursus scelerisque. Vivamus lorem erat, consectetur ac lobortis egestas, tincidunt vel tortor. Morbi consectetur,
          sem ut tincidunt suscipit, ante tortor dapibus quam, id tincidunt ex dolor sit amet ex.
        </p>
      </div>
      <img src={codeImage} alt="computer with code" />
    </section>
  );
};

export default About;
