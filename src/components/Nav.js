import React, { useState } from "react"
import { Link } from "react-router-dom"

import styles from "../css/Nav.module.css"

import surgeLogo from "../assets/surge.svg"
import facebook from "../icons/facebook.svg"
import instagram from "../icons/instagram.svg"
import github from "../icons/github.svg"
import closeButton from "../icons/x.svg"
import menu from "../icons/hamburger-menu.svg"

export default ({ scrollLock }) => {
  const [nav, toggleNav] = useState(false)

  function handleClick(event) {
    if (this.close) {
      toggleNav(false)
      scrollLock(true)
    } else {
      toggleNav(true)
      scrollLock(false)
    }
  }

  return (
    <div id={styles.nav}>
      <button
        id={styles.openBtn}
        className={styles.btn}
        onClick={handleClick.bind({ close: false })}
        style={{ visibility: !nav }}
      >
        <img id={styles.openImg} src={menu} alt="Open naigation panel" />
      </ button>
      <div id={styles.container} style={{ transform: nav ? "translateX(0)" : "translateX(100%)" }}>
        <div id={styles.header}>
          <Link to="/">
            <img src={surgeLogo} id={styles.logo} alt="Navigation panel" />
          </Link>
          <button id={styles.closeBtn} className={styles.btn} onClick={handleClick.bind({ close: true })} >
            <img src={closeButton} id={styles.closeImg} alt="Exit navigation panel" />
          </button>
        </div>
        <Link className={styles.routes} to="/">Home</Link>
        <Link className={styles.routes} to="/about">About</Link>
        <Link className={styles.routes} to="/projects">Projects</Link>
        <Link className={styles.routes} to="/events">Events</Link>
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
    </div>
  )

}