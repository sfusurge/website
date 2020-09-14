import React from "react"

import styles from "../css/Project.module.css"

export default props => {
  return (
    <div className={styles.container} id={props.classes?.container || ''}>
      <img src={props.image} className={styles.image} id={props.classes?.image || ''} alt="" />
      <div className={styles.text} id={props.classes?.text || ''}>
        <h2 className={styles.name}>{props.projectName}</h2>
        {props.description.map(paragraph => <p className={styles.description} key={paragraph.slice(0, 5)}>{paragraph}</p>)}
      </div>
    </div>
  )
}