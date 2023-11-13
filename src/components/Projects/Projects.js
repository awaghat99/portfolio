import React from "react";
import "./Projects.css";
import marvel from "../../images/marvel-screenshot.png";
import github from "../../images/github.svg";
import link from "../../images/link.svg";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref: titleRef, inView: titleIsVisible } = useInView({ triggerOnce: true });
  const { ref: projectRef, inView: projectIsVisible } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section className="projects-section" id="projects">
      <div className={`project-title ${titleIsVisible && "animate-title"}`} ref={titleRef}>
        <h2>My Projects</h2>
      </div>
      <div className="projects" ref={projectRef}>
        <div className={`project ${projectIsVisible && "animate-project"}`}>
          <img src={marvel} alt="marvel screenshot" />
          <div className="project-wrapper-bg">
            <h3 className="project-card-title">Marvel Site</h3>
            <br />
            <h4 className="project-languages">HTML,CSS,JavaScript,React,Sequelize</h4>
            <div className="project-desc-holder">
              <p className="project-desc">
                As the final project for our Codenation bootcamp, our group developed a website centered
                around Marvel characters. Explore a collection of these characters, their stats, comic
                appearances, and variants. You can log in to add characters to your favorites and personalize
                your profile picture. Deployed with Netlify.
              </p>
            </div>

            <div className="image-container">
              <a href="https://github.com/gtinsley99/marvel" target="_blank" rel="noreferrer">
                <img className="project-icon" src={github} alt="github-logo" />
              </a>
              <a href="https://marvel-codenation.netlify.app" target="_blank" rel="noreferrer">
                <img className="project-icon" src={link} alt="link-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
