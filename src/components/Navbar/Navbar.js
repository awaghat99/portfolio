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
    <nav>
      <ul className="full-nav">
        <div>
          <li>Aadil Waghat</li>
        </div>
        <div className="page-links">
          <li>About</li>
          <li>Projects</li>
          <li>
            <button>Contact</button>
          </li>
          {dropdown ? <img src={cross} alt="cross" onClick={toggleDropdown} /> : <img src={hamburger} alt="hamburger" onClick={toggleDropdown} />}
        </div>
      </ul>
      <ul className={dropdown ? "dropdown open" : "dropdown"}>
        <li>About</li>
        <li>Projects</li>
        <li>
          <button>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
