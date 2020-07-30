import React from "react";

import styles from "../css/Footer.module.css";

import facebook from "../icons/facebook.svg";

export default props => {
  return (
    <div id={styles.container}>
      <a href="https://www.facebook.com/sfusurge">
        <img src={facebook} alt="Link to SFU Surge Facebook Account." />
      </a>
    </div>
  )
}