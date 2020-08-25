import React from "react";

import styles from "../css/Homepage-Podcast.module.css";

export default props => {
  return (
    <div className={styles.text}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;800&display=swap" rel="stylesheet"></link>
      <h1 id={styles.textTitle}>Podcast</h1>
      <p id={styles.textBody}>
        Our podcast, Surge Spotlight, welcomes SFU students
        and alumni to share their goals, struggles, and
        perspectives regarding their personal journeys
        within tech.
      </p>
    </div>
  )
}