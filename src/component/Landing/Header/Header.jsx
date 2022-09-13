import React from "react";
import classes from "./Header.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <div className={classes.main}>
      <header className={classes.header}>
        <Link to="/#hero">
          <h3>Timilehin</h3>
        </Link>
        <ul className={classes.navLinks}>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#summary">Summary</Link>
          </li>
          <li>
            <Link to="/#skills">Skills</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
          <button onclick="location.href = 'Documents/Example.pdf';">
            Resume
          </button>
        </ul>
        {/* <FontAwesomeIcon icon={} /> */}
      </header>
    </div>
  );
};

export default Header;
