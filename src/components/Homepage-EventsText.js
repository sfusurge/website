import React from "react";

import styles from "../css/Homepage-Events.module.css";

export default props => {
  return (
    <div className={styles.text}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;800&display=swap" rel="stylesheet"></link>
      <h1 id={styles.textTitle}>Events</h1>
      <p id={styles.textBody}>
        We aim to give all students interested in tech
        the ability to learn, by bringing in senior tech
        students and industry professionals to teach
        hands-on workshops.
      </p>
    </div>
  )
}