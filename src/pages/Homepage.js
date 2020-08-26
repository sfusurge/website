import React from "react";

import Activity from "../components/Activity";

import scooter from "../assets/scooter.svg";
import robot from "../assets/robot.svg"
import microphone from "../assets/microphone.svg";

export default props => {
  return (
    <>
      <Activity
        title="Projects"
        msg="Surge Projects enables passionate 
        and goal-oriented students in software development 
        and design by allowing them to build innovative and 
        practical projects in the span of a semester."
        imageID="scooter"
        image={scooter}
        altText="Blue Scooter"
      />
      <Activity
        title="Events"
        msg="We aim to give all students interested in tech the 
        ability to learn, by bringing in senior tech students and 
        industry professionals to teach hands-on workshops."
        imagePos={{ transform: "translateY(-100%)", width: "80%" }}
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
    </>
  )
}