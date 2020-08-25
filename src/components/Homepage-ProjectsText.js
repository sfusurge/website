import React from "react";

import styles from "../css/Homepage-Project.module.css";

export default props => {
  return (
    <div className={styles.text}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;800&display=swap" rel="stylesheet"></link>
      <h1 id={styles.textTitle}>Projects</h1>
      <p id={styles.textBody}>
        Surge Projects enables passionate and goal-oriented
        students in software development and design by
        allowing them to build innovative and practical
        projects in the span of a semester.
      </p>
    </div>
  )
}