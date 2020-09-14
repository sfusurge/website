import React, { useState, useEffect } from "react"

import Project from "../components/Project"
import Button from "../components/Button"

import styles from "../css/Projects.module.css"

import pacmacro from "../assets/projects/pac-macro.png"
import scheduleMe from "../assets/projects/schedule-me.png"
import projectsSplash from "../assets/projects/projects-splash.svg"

const applicationDeadline = () => {
  let time = new Date("2020-09-14T23:59:59") - Date.now()
  if (time <= 0) return null;

  let delta = {
    days: Math.floor(time / (1000 * 60 * 60 * 24)),
    hours: Math.floor((time / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((time / 1000 / 60) % 60),
    seconds: Math.floor((time / 1000) % 60)
  }
  return {
    days: delta.days >= 10 ? delta.days : '0'.concat(delta.days),
    hours: delta.hours >= 10 ? delta.hours : '0'.concat(delta.hours),
    minutes: delta.minutes >= 10 ? delta.minutes : '0'.concat(delta.minutes),
    seconds: delta.seconds >= 10 ? delta.seconds : '0'.concat(delta.seconds)
  }
}

export default props => {
  let [countDown, changeCountDown] = useState(applicationDeadline())

  useEffect(() => {
    console.log("TesT")
    const timer = setTimeout(() => {
      changeCountDown(applicationDeadline())
    }, 1000)
    return () => clearTimeout(timer)
  }, [countDown])

  return (
    <>
      <img src={projectsSplash} id={styles.splash} alt="Surge Projects" />
      <div id={styles.description}>
        <p style={{ width: "92%" }}>Projects Teams are comprised of 4 team members and a team lead. All teams are supported by mentors that specialize in different areas of the product lifecycle.</p>
        <p>We open applications for <b>Project Team Members, Team Leads,</b> and <b>Mentors</b> every semester.</p>
        <p>Currently, Projects applications are <b>{countDown ? "OPEN" : "CLOSED"}</b></p>
      </div>
      {countDown &&
        <>
          <p id={styles.timer}>{countDown.days}:{countDown.hours}:{countDown.minutes}:{countDown.seconds}</p>
          <Button
            href=""
            text="Apply Now"
            style={{ marginBottom: "60px", width: "67%" }}
          />
        </>
      }

      <h1 id={styles.pastProjects}>Past Projects</h1>

      <Project
        image={scheduleMe}
        classes={{
          image: styles.scheduleMeImage,
          text: styles.scheduleMeText,
          container: styles.scheduleMeContainer
        }}
        projectName="Schedule Me"
        description={["A simple and powerful way to organize meetings. A link is shared to all relevant people to poll for their availability and from there, the organizer can determine the optimal time for a meeting."]}
      />

      <Project
        image={pacmacro}
        classes={{
          image: styles.pacmacroImage,
          text: styles.pacmacroText,
          container: styles.pacmacroContainer
        }}
        projectName="Pac Macro"
        description={["Players track the locations of other enemy players through a mobile application, and hunt them down mercilessly.", "Play Pac-Man in real life across five square blocks of Downtown Vancouver!"]}
      />

    </>
  )
}