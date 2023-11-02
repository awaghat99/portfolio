import "./About.css";
import codeImage from "../../images/code-image.avif";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: textRef, inView: textIsVisible } = useInView();
  const { ref: imageRef, inView: imageIsVisible } = useInView();

  return (
    <section className="about" id="about">
      <div className={`about-text ${textIsVisible && "animate-text"}`} ref={textRef}>
        <h2>About Me</h2>
        <p>
          As a Mathematics graduate, my passion for problem-solving led me to the dynamic realm of coding and
          software development. I honed my skills through dedicated online courses and a rigorous 12-week
          software boot camp at Code Nation. <br />
          Through these courses I became proficient in front-end technologies such as HTML, CSS, JavaScript,
          React, and Redux. I also possess a strong foundation in database management using SQL and Mongo, as
          well as an understanding of git, GitHub and version control.
          <br /> I am enthusiastic about continuous learning and growth, embracing challenges as they come,
          and I am eager to utilize my diverse skill set to contribute meaningfully as a junior developer in
          this fast-paced, ever-evolving industry.
        </p>
      </div>
      <img
        src={codeImage}
        alt="computer with code"
        ref={imageRef}
        className={`about-img ${imageIsVisible && "animate-image"}`}
      />
    </section>
  );
};

export default About;
