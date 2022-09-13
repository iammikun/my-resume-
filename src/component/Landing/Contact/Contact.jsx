import React from "react";
import classes from "./Contact.module.css";
// import Socials from "../../Socials/Socials.jsx";

const Contact = () => {
  return (
    <div className={classes.main} id="contact">
      <div className={classes.contactContent}>
        <h2>Contact Me</h2>
        <p>Interested to work with me?</p>
        <div>
          <a href="mailto:timilehinonifara@gmail.com" className={classes.gMail}>
            Send me an e-mail
          </a>
        </div>
        <p>
          I'm currently looking to join a team of creative designers and
          developers.
        </p>
        {/* <Socials /> */}
      </div>
      <div className={classes.contactFooter}>
        <div>
          <span>© 2022 Timilehin Onifara. All rights reserved.</span>
        </div>
        <div>
          <span>Built with react.js & css modules.</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
