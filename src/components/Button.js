import React from "react";

import styles from "../css/Button.module.css";

export default props => {
  return (
    <a id={styles.container} style={props.dimension} href={props.ref}>
      <img className={styles.element} src={props.image} alt={props.altText} />
      <p className={styles.element}>{props.text}</p>
    </a>
  )
}