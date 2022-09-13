import React from "react";
import classes from "./Hero.module.css";
import Socials from "../../Socials/Socials.jsx";
import "../../../App.js";

const Hero = () => {
  return (
    <div className={classes.main} id="hero">
      <div className={classes.heroSection}>
        <p>Hi 👋, my name is </p>
        <h1>Timilehin Onifara.</h1>
        <h1 className={classes.textSection}>I build things for the web.</h1>
        <p className={classes.paragraph}>
          i'm a <span>19y/o Frontend Engineer</span> specialized in building
          exceptional digital experiences and creating user-friendly
          experiences.
        </p>
      </div>
      <Socials />
    </div>
  );
};

export default Hero;
