import React from "react"

import styles from "../css/Footer.module.css"

import facebook from "../icons/facebook.svg"
import instagram from "../icons/instagram.svg"
import github from "../icons/github.svg"

export default props => {
  return (
    <div id={styles.container}>
      {props.children || <div id={styles.defualt}></div>}
      <div id={styles.footer}>
        <a href="https://www.facebook.com/sfusurge" className={styles.iconLink}>
          <img className={styles.icon} src={facebook} alt="Facebook Page" />
        </a>
        <a href="https://www.instagram.com/sfusurge/" className={styles.iconLink}>
          <img className={styles.icon} src={instagram} alt="Instagram Page" />
        </a>
        <a href="https://github.com/sfusurge" className={styles.iconLink}>
          <img className={styles.icon} src={github} alt="Github Page" />
        </a>
      </div>
    </div>
  )
} 