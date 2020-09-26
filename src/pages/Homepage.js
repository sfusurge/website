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
          imagePos={{ transform: "translate(25%, 10px)" }}
          image={scooter}
          altText="Blue Scooter"
        />
        <Activity
          title="Events"
          msg="We aim to give all students interested in tech the 
          ability to learn, by bringing in senior tech students and 
          industry professionals to teach hands-on workshops."
          imagePos={{ transform: "translate(10%, 10px)", width: "100%" }}
          image={robot}
          altText="Blue Robot"
        />
        <Activity
          title="Podcast"
          msg="Our podcast, Surge Spotlight, welcomes SFU students 
          and alumni to share their goals, struggles, and perspectives 
          regarding their personal journeys within tech."
          imagePos={{ transform: "translate(50%, 20px)", width: "85%" }}
          image={microphone}
          altText="Blue Microphone"
        />
      </div>
      <div className={styles.spotlight}>
        <Button
          image={spotify}
          altText="Link to Spotify"
          text="Listen on Spotify"
          link="https://open.spotify.com/show/5GAuw7brERfbZSfnKpURvE?si=f1Uz9jp4T0O9yD1MBqD7Eg"
          style={{ height: "52px", marginBottom: "15px" }}
        />
        <a className={styles.stream} href="https://anchor.fm/sfu-surge">More Streaming Platforms</a>
      </div>
      <div>
        <h1 className={styles.upcomingEvents}>Upcoming Events</h1>
        <UpcomingEvent
          date="22"
          month="Nov"
          title="Linux Workshop"
          location={{
            link: "",
            title: "SFU Surge Discord Server"
          }}
          time="7:00PM - 9:00PM"
          fbLink=""
        />
      </div>
    </div>
  )
}