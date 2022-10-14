import React, { useState } from "react";
import classes from "./Header.module.css";
import {} from "@fortawesome/free-brands-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={classes.main}>
      <header className={classes.header}>
        <Link to="/#hero">
          <h3>Timilehin</h3>
        </Link>
        <ul className={classes.navLinks} toggle={toggle}>
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
          <button onClick="location.href = 'Documents/Example.pdf';">
            Resume
          </button>
        </ul>
        <div onClick={() => setToggle(!toggle)} className={classes.hamburger}>
          <span className={classes.horizontal}></span>
          <span className={classes.horizontal}></span>
          <span className={classes.horizontal}></span>
        </div>
      </header>
    </div>
  );
};

export default Header;
