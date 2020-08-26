import React from "react"

import Project from "../components/Project"

// import styles from "../css/Projects.module.css"

import pacmacro from "../assets/projects/pac-macro.svg"

export default props => {
  return (
    <>
      <Project
        image={{ src: pacmacro, style: {} }}
        backgroundImage={pacmacro}
        projectName="Pac Macro"
        projectDescription="Players track the locations of other enemy players through a mobile application, and hunt them down mercilessly. Play Pac-Man in real life across five square blocks of Downtown Vancouver!"
      />
    </>
  )
}