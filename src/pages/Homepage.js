import React from "react"

import Header from "../components/Header"
import Activity from "../components/Activity"
import UpcomingEvent from "../components/UpcomingEvent"
import Button from "../components/Button"

import styles from "../css/Homepage.module.css"

import scooter from "../assets/scooter.svg"
import robot from "../assets/robot.svg"
import microphone from "../assets/microphone.svg"
import spotify from "../icons/spotify-icon.svg"

export default props => {
  return (
    <div className={styles.wrapper}>
      <Header
        mandate="Engage • Empower • Innovate"
        mission={(
          <>
            <b>SFU Surge</b> is an all-inclusive organization to promote
            <b> curiosity and excitement for a future in technology</b>,
            while guiding students on their paths to <b>career success</b>.
          </>
        )}
      />
      <h1 className={styles.title}>Here's what we're up to!</h1>
      <div className={styles.activities}>
        <Activity
          title="Projects"
          msg="Surge Projects enables passionate 
          and goal-oriented students in software development 
          and design by allowing them to build innovative and 
          practical projects in the span of a semester."
          image={scooter}
          altText="Blue Scooter"
        />
        <Activity
          title="Events"
          msg="We aim to give all students interested in tech the 
          ability to learn, by bringing in senior tech students and 
          industry professionals to teach hands-on workshops."
          // imagePos={{ transform: "translateY(-100%)", width: "80%" }}
          image={robot}
          altText="Blue Robot"
        />
        <Activity
          title="Podcast"
          msg="Our podcast, Surge Spotlight, welcomes SFU students 
          and alumni to share their goals, struggles, and perspectives 
          regarding their personal journeys within tech."
          imagePos={{ transform: "translate(20%, -100%)", width: "65%" }}
          image={microphone}
          altText="Blue Microphone"
        />
      </div>
      {/* <Button
        image={spotify}
        altText="Link to Spotify"
        text="Listen on Spotify"
        link="https://open.spotify.com/show/5GAuw7brERfbZSfnKpURvE?si=f1Uz9jp4T0O9yD1MBqD7Eg"
        style={{ width: "75%", height: "52px" }}
      />
      <a className={styles.stream} href="https://open.spotify.com/show/5GAuw7brERfbZSfnKpURvE?si=f1Uz9jp4T0O9yD1MBqD7Eg">More Streaming Platforms</a> */}
    </div>
  )
}