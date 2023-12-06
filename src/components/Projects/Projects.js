import React from "react";
import "./Projects.css";
import marvel from "../../images/marvel-screenshot.png";
import fitness from "../../images/fitness-screen.png";
import github from "../../images/github.svg";
import link from "../../images/link.svg";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref: titleRef, inView: titleIsVisible } = useInView({ triggerOnce: true });
  const { ref: project1Ref, inView: project1IsVisible } = useInView({ threshold: 0.5, triggerOnce: true });
  const { ref: project2Ref, inView: project2IsVisible } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section className="projects-section" id="projects">
      <div className={`project-title ${titleIsVisible && "animate-title"}`} ref={titleRef}>
        <h2>My Projects</h2>
      </div>
      <div className="projects" ref={project1Ref}>
        <div className={`project ${project1IsVisible && "animate-project"}`}>
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
      <div className="projects" ref={project2Ref}>
        <div className={`project ${project2IsVisible && "animate-project"}`}>
          <img src={fitness} alt="fitness screenshot" />
          <div className="project-wrapper-bg">
            <h3 className="project-card-title">Fitness Landing Page</h3>
            <br />
            <h4 className="project-languages">HTML,CSS,JavaScript,React,Tailwind</h4>
            <div className="project-desc-holder">
              <p className="project-desc">
                I created a fitness landing page using React and Tailwind CSS. Dive into this visually
                engaging interface and level up your fitness. Deployed with netlify.
              </p>
            </div>

            <div className="image-container">
              <a href="https://github.com/awaghat99/fitnessLanding" target="_blank" rel="noreferrer">
                <img className="project-icon" src={github} alt="github-logo" />
              </a>
              <a href="https://tailwind-fitness-landing.netlify.app/" target="_blank" rel="noreferrer">
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
