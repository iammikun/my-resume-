import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.main} id="about">
      <div className={classes.aboutSection}>
        <h2>About Me</h2>
        <p>
          Hello! My name is Timilehin and I enjoy creating things that live on
          the internet. My interest in web development started early this year
          when i decided to learn software development at Grazac Academy where i
          learnt a lot about HTML & CSS using them to build beautiful web
          interfaces.Since then i've been able to build scalable applications
          that help people to live better.
        </p>
        <div className={classes.wrapper}>
          <div className={classes.firstTalk}>
            <div>
              <h4>Experience & Internship</h4>
            </div>
            <p>
              - Reviewed classworks and assisted with homework to boost student
              understanding of assignments.
            </p>
            <p className={classes.bold}>
              - When i was interning at Grazac Academy, i used my knowledge in{" "}
              <span className={classes.color}>
                react.js and communication skills
              </span>{" "}
              to work with a team to build a Web Application that helps{" "}
              <span className={classes.color}>
                convert your crypto to fiat{" "}
              </span>
              (still in progress tho.)
            </p>
            <p>
              - Worked on an e-commerce website where one can buy furniture
              products.
            </p>
            <p>
              - Currently interning at TedPrimeHub, building projects and
              helping students have a strong background of Web Development
              teaching them Web Technologies like: HTML, CSS and JavaScript.
            </p>
          </div>
          <div className={classes.secondTalk}>
            <div className={classes.flex}>
              <h4>Educational Qualification</h4>
              <span>July 2018</span>
            </div>
            <div>
              <h3> O Level</h3>
              <span className={classes.school}>Ansod College </span>
            </div>
            <div className={classes.anotherFlex}>
              <h3>Advanced Diploma in Software Engineering</h3>
              <span>July 2022 </span>
            </div>
            <p className={classes.school}>Grazac Academy</p>
          </div>
        </div>
        <div>
          <div className={classes.language}>
            <h3>Languages</h3>
          </div>
          <div className={classes.cardFlex}>
            <div className={classes.card}>
              <h4>English</h4>
              <span className={classes.paragraph}>Intermediate</span>
            </div>
            <div className={classes.card}>
              <h4>Yoruba</h4>
              <span className={classes.paragraph}>Native</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
