import React from "react"

import styles from "../css/Project.module.css"

export default props => {
  console.log(props.backgroundImage);
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      <img src={props.image.src} style={props.image.style} className={styles.image} alt="" />
      <h2 className={styles.name}>{props.projectName}</h2>
      <p className={styles.description}>{props.projectDescription}</p>
    </div>
  )
}