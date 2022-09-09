import React from "react";
import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={classes.main} id="skills">
      <div className={classes.skillsContent}>
        <h2>Skills</h2>
        <p>The list of technologies i have worked with.</p>
        <div className={classes.skillWrapper}>
          <div className={classes.card}>
            <h4>HTML</h4>
          </div>
          <div className={classes.card}>
            <h4>CSS</h4>
          </div>
          <div className={classes.card}>
            <h4>JavaScript</h4>
          </div>
          <div className={classes.card}>
            <h4>react.Js</h4>
          </div>
          <div className={classes.card}>
            <h4>Bootstrap</h4>
          </div>
          <div className={classes.card}>
            <h4>Remix</h4>
          </div>
          <div className={classes.card}>
            <h4>Solidity</h4>
          </div>
          <div className={classes.card}>
            <h4>Git</h4>
          </div>
          <div className={classes.card}>
            <h4>Metamask</h4>
          </div>
        </div>
      </div>
      <div className={classes.skillsContent2}>
        <h3>Non-Academic skills</h3>
        <div className={classes.skillWrapper}>
          <div className={classes.card}>
            <h4>Songwriter</h4>
          </div>
          <div className={classes.card}>
            <h4>Keyboardist</h4>
          </div>
          <div className={classes.card}>
            <h4>Drummer</h4>
          </div>
          <div className={classes.card}>
            <h4>Artist</h4>
          </div>
          <div className={classes.card}>
            <h4>Communication</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
