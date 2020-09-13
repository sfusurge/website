import React from "react";

import styles from "../css/Activity.module.css";

export default props => {
  return (
    <div id={styles.container}>
      <div className={styles.squareBackground}></div>
      <img style={props.imagePos} src={props.image} className={styles.image} alt={props.altText} />
      <div className={styles.text}>
        <h1 id={styles.textTitle}>{props.title}</h1>
        <p id={styles.textBody}>{props.msg}</p>
      </div>
    </div>
  )
}