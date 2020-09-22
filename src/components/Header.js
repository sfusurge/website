import React from 'react';

import Button from './Button'
import styles from '../css/Header.module.css';

import surge from "../assets/surge.svg"
import rocketMonitor from "../assets/rocket-monitor.svg"

export default props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundContainer}>
        <img className={styles.logo} src={surge} alt="SFU Surge Logo" />
        <div className={styles.headerText}>
          <h1 className={styles.mandate}>{props.mandate}</h1>
          <p className={styles.mission}>{props.mission}</p>
        </div>
        <div className={styles.btn}>
          <Button
            text="Join the Movement"
            // link="/mailchimp"
            style={{ width: "40%", height: "35px", fontSize: "12px", backgroundColor: "var(--color-btnPrimary)", margin: "0" }}
          />
          <Button
            text="Learn More"
            // link="/about"
            style={{ width: "40%", height: "35px", fontSize: "12px", backgroundColor: "var(--color-btnSecondary", margin: "0" }}
          />
        </div>
      </div>
      <img className={styles.rocketMonitor} src={rocketMonitor} alt="" />
    </div>
  )
}