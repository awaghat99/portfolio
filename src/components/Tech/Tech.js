import React from "react";
import "./Tech.css";
import html from "../../images/html-5.png";
import css from "../../images/css-3.png";
import javascript from "../../images/js.png";
import react from "../../images/science.png";
import sql from "../../images/database.png";
import mongo from "../../images/mongo.png";

const Tech = () => {
  return (
    <section className="tech-section">
      <div className="tech-title">
        <h2>My Technologies</h2>
      </div>
      <div className="tech-icons">
        <div className="tech-icon">
          <img src={html} alt="html" />
          <p>HTML</p>
        </div>
        <div className="tech-icon">
          <img src={css} alt="html" />
          <p>HTML</p>
        </div>
        <div className="tech-icon">
          <img src={javascript} alt="html" />
          <p>HTML</p>
        </div>
        <div className="tech-icon">
          <img src={react} alt="html" />
          <p>HTML</p>
        </div>
        <div className="tech-icon">
          <img src={sql} alt="html" />
          <p>HTML</p>
        </div>
        <div className="tech-icon">
          <img src={mongo} alt="html" />
          <p>HTML</p>
        </div>
      </div>
    </section>
  );
};

export default Tech;
