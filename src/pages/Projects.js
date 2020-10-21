import React, { useState, useEffect } from "react"

import Project from "../components/Project"
import Button from "../components/Button"

import styles from "../css/Projects.module.css"

import projectsSplash from "../assets/projects/projects-splash.svg"
import pacmacro from "../assets/projects/pac-macro.png"
import scheduleMe from "../assets/projects/schedule-me.png"
import buildABot from "../assets/projects/build-a-bot.png"
import mealMovers from "../assets/projects/meal-movers.png"
import stormArea52 from "../assets/projects/storm-area-52.png"
import sfuCarpool from "../assets/projects/sfu-carpool.png"

const applicationDeadline = () => {
  let time = new Date("2020-09-24T23:59:59") - Date.now()
  if (time <= 0) return null;
  return {
    days: String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, "0"),
    hours: String(Math.floor((time / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
    minutes: String(Math.floor((time / 1000 / 60) % 60)).padStart(2, "0"),
    seconds: String(Math.floor((time / 1000) % 60)).padStart(2, "0")
  }
}

export default props => {
  let [countDown, changeCountDown] = useState(applicationDeadline())

  useEffect(() => {
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
            href="https://docs.google.com/forms/d/e/1FAIpQLSeGaoSn4LC8-1V14ch-OV5bw-ltes-V-zbqnuJjLQoLb9ZUhA/viewform"
            text="Apply Now"
            style={{ marginBottom: "60px", width: "67%" }}
          />
        </>
      }

      <h1 id={styles.pastProjects} style={{ paddingTop: countDown ? 0 : "50px" }}>Past Projects</h1>

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

      <Project
        image={buildABot}
        classes={{
          image: styles.buildABotImage,
          text: styles.buildABotText,
          container: styles.buildABotContainer,
          title: styles.buildABotTitle
        }}
        projectName="Build-a-Bot Royale"
        description={["Imagine a robot themed battle royale game with some Kahoot-esque elements.", "Join from your web browser, build your robot, and be the last bot standing in a Battle Royale of up to 100+ players."]}
      />

      <Project
        image={mealMovers}
        classes={{
          image: styles.mealMoversImage,
          text: styles.mealMoversText,
          container: styles.mealMoversContainer,
          title: styles.mealMoversTitle
        }}
        projectName="Meal Movers"
        description={["A mobile app that helps connect food banks and shelters with food suppliers to streamline food donation processes. It aims to support those in need and reduce our food waste."]}
      />

      <Project
        image={stormArea52}
        classes={{
          image: styles.stormArea52Image,
          text: styles.stormArea52Text,
          container: styles.stormArea52Container
        }}
        projectName="Storm Area 52"
        description={["A simple and powerful way to organize meetings. A link is shared to all relevant people to poll for their availability and from there, the organizer can determine the optimal time for a meeting."]}
      />

      <Project
        image={sfuCarpool}
        classes={{
          image: styles.sfuCarpoolImage,
          text: styles.sfuCarpoolText,
          container: styles.sfuCarpoolContainer,
          title: styles.sfuCarpoolTitle,
          description: styles.sfuCarpoolDisc
        }}
        projectName="SFU Carpool"
        description={["Make new friends, beat the bus, save the environment all by simply entering the number of seats you have available in your car as a driver and by selecting your pick up location and university campus as a passenger."]}
      />

    </>
  )
}