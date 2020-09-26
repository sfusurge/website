import React from "react"

import styles from "../css/Splash.module.css"

export default ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className={styles.splash} />
  )
}