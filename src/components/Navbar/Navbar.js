import { useState } from "react";
import "./Navbar.css";
import hamburger from "../../images/hamburger.svg";
import cross from "../../images/cross.svg";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="nav">
      <nav>
        <ul className="full-nav">
          <div className="name">
            <li>AW</li>
          </div>
          <div className="page-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <button>
              <a href="#contact">Contact</a>
            </button>

            {dropdown ? (
              <img src={cross} alt="cross" onClick={toggleDropdown} />
            ) : (
              <img src={hamburger} alt="hamburger" onClick={toggleDropdown} />
            )}
          </div>
        </ul>
      </nav>
      <ul className={dropdown ? "dropdown open" : "dropdown"}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <button>
            <a href="#contact">Contact</a>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
