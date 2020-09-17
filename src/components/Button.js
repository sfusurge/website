import React from "react";

import styles from "../css/Button.module.css";

export default props => {
  return (
    <a className={styles.container} style={props.style} href={props.ref}>
      {props.image && <img className={styles.element} src={props.image} alt={props.altText} />}
      <p className={styles.element}>{props.text}</p>
    </a>
  )
}