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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in sem rutrum, egestas lorem ut,
          euismod augue. Proin venenatis ligula odio, ac mollis tellus sagittis sit amet. Aenean dui nibh,
          vulputate a urna quis, pulvinar dictum diam. Nulla efficitur ligula ut cursus scelerisque. Vivamus
          lorem erat, consectetur ac lobortis egestas, tincidunt vel tortor. Morbi consectetur, sem ut
          tincidunt suscipit, ante tortor dapibus quam, id tincidunt ex dolor sit amet ex.
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
