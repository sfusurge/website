import React from 'react';

import styles from '../css/Header.module.css';

import surge from "../assets/surge.svg"
import rocketMonitor from "../assets/rocket-monitor.svg"

export default props => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={surge} alt="SFU Surge Logo" />
      <div className={styles.headerText}>
        <h1 className={styles.mandate}>{props.mandate}</h1>
        <p className={styles.mission}>{props.mission}</p>
      </div>
      <img className={styles.rocketMonitor} src={rocketMonitor} alt="" />
    </div>
  )
}