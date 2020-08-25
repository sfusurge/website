import React from "react";

import styles from "../css/Homepage-Events.module.css";

import robot from "../assets/robot.svg";

export default props => {
  return (
    <>
      <div className={styles.squareBackground}></div>
      <img id={styles.robot} src={robot} alt="Blue Robot" />
    </>
  )
}