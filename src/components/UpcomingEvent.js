import React from "react";

import styles from "../css/UpcomingEvent.module.css";

import { ReactComponent as Frame } from "../assets/event-frame.svg";

export default props => {
  return (
    <div id={styles.container}>
      <Frame className={styles.frame} alt="" />
      <div className={styles.title}>
        <div className={styles.date}>
          <h1>{props.date}</h1>
          <h2>{props.month}</h2>
        </div>
        <h1>{props.title}</h1>
      </div>
    </div>
  )
}