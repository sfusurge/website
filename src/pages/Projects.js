import React from "react"

import Project from "../components/Project"

import styles from "../css/Projects.module.css"

import pacmacro from "../assets/projects/pac-macro.png"
import scheduleMe from "../assets/projects/schedule-me.png"

export default props => {
  return (
    <>
      <div style={{ height: "200px" }}></div>
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