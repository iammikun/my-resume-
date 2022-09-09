import React from "react";
import classes from "./Summary.module.css";

const Summary = () => {
  return (
    <div className={classes.main} id="summary">
      <div className={classes.summaryContent}>
        <h2>Professional Summary</h2>
        <p>
          I'm a Software Engineer from Nigeria 🇳🇬, I love building scalable
          solutions and applications that help people live better. I have
          advanced experience in tools like JavaScript, Git, GitHub, React. I'm
          a Student-centered educator with solid background in post-secondary
          environments. Teaching students in Software Engineering from basic
          undergraduate to advanced courses.
        </p>
        <a href="/">
          <button>Check out my Works</button>
        </a>
      </div>
    </div>
  );
};

export default Summary;
