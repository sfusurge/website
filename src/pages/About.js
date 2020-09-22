import React from "react"

import Splash from "../components/Splash"

import styles from "../css/About.module.css"

import aboutSplash from "../assets/about/about-splash.svg"
import execs from "../assets/execs/execs";
const execPath = require.context('../assets/execs', false, /.*\.png/)


export default props => {
  return (
    <>
      <Splash src={aboutSplash} alt="About Us" />

      <p className={styles.text}>
        The SFU Surge Executive Team is a team of 20 disciplinary students across 5+ SFU Programs.
        <br />Together, we aim to:<br />
        Empower, Innovate, and Inspire the local tech community with workshops, events, and projects.
      </p>

      <h1 className={styles.header}>Our Story</h1>
      <p className={styles.text} id={styles.story}>
        SFU Surge is an all-inclusive organization to promote <b>curiosity and excitement for a future in technology,</b> while guiding students on their paths to <b>career success.</b> An innovative community which empowers students to gain access to readily available networking, and connect their shared experiences with designers, engineers, programmers and developers alike.
      </p>

      <p id={styles.contact}>
        You can get in contact with us by emailing <a href="mailto:sfusurge@gmail.com">sfusurge@gmail.com</a>
        , or by messaging us on <a href="https://www.facebook.com/sfusurge">Facebook </a>
        or <a href="https://www.instagram.com/sfusurge/">Instagram</a>.
        Also, be sure to sign up for
        our <a href="https://forms.gle/2sZND8RsgTeNEtqQ7">Newsletter</a> to stay up to date with all our events!
      </p>

      <h1 className={styles.header}>Our Team</h1>
      <div id={styles.photoGrid}>
        {execs.map(exec => <img className={styles.exec} alt={exec.name} src={execPath(exec.img)} key={exec.name} />)}
      </div>

      <p id={styles.colab}>
        SFU Surge is always looking for partners! Feel free to contact us at sfusurge@gmail.com if you are interested in collaborating.
      </p>
    </>
  )
}