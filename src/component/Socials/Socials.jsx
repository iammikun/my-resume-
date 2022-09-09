import React from "react";
import classes from "./Socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className={classes.main}>
      <div className={classes.socialIcon}>
        <div className={classes.singleCol}>
          <a href="/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/cykle__/?hl=en"
            className={classes.instagram}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/codeFinga" className={classes.twitter}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://github.com/iammikun" className={classes.github}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/timilehin-onifara-80012522b/"
            className={classes.linkedin}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
