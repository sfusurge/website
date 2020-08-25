import React from "react";

import styles from "../css/Homepage-Project.module.css";

import scooter from "../assets/scooter.svg";

export default props => {
  return (
    <>
      <div className={styles.squareBackground}></div>
      <img id={styles.scooter} src={scooter} alt="Blue Scooter" />
    </>
  )
}