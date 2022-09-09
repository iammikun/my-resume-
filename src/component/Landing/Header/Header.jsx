import React from "react";
// import { Link } from "react-scroll";
import classes from "./Header.module.css";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.main}>
      <header className={classes.header}>
        <a href="#hero">
          <h3>Timilehin</h3>
        </a>
        <ul className={classes.navLinks}>
          <li>
            <a href="#objective">Objective</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#summary">Summary</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <button onclick="location.href = 'Documents/Example.pdf';">
            Resume
          </button>
        </ul>
      </header>
    </div>
  );
};

export default Header;
