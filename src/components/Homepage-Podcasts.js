import React from "react";

import styles from "../css/Homepage-Podcast.module.css";

import microphone from "../assets/microphone.svg";

export default props => {
  return (
    <div id={styles.container}>
      <div className={styles.squareBackground}></div>
      <img id={styles.microphone} src={microphone} alt="Blue Microphone" />
    </div>
  )
}