import React from "react";

import styles from "../css/Footer.module.css";

import facebook from "../icons/facebook.svg";
import instagram from "../icons/instagram.svg";
import github from "../icons/github.svg";

export default props => {
  return (
    <div id={styles.container}>
      <a href="https://www.facebook.com/sfusurge">
        <img src={facebook} alt="Link to SFU Surge Facebook Account." />
      </a>
      <a href="https://www.instagram.com/sfusurge">
        <img src={instagram} alt="Link to SFU Surge Instagram Account"/>
      </a>
      <a href="https://github.com/sfusurge">
        <img src={github} alt="Link to SFU Surge Github Account" />
      </a>
    </div>
  )
}