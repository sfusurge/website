import React, { useState } from "react"
import { events, EventCategory } from "../data/data"

import styles from "../css/Events.module.css"

import Event from "../components/UpcomingEvent"
import Splash from "../components/Splash"

import splash from "../assets/events-splash.svg"

export default props => {
  return (
    <>
      <Splash src={splash} alt="Events" />

      <p id={styles.text}>Events are a core component of our semesterly activities.  On a regular basis, we host talks, workshops, socials, and more. Together, we also tend to do a lot of Leetcode problems. Scroll down below to see what events we have coming up. We hope to see you there!</p>

      <h1 id={styles.header}>Upcoming Events</h1>

      <select id={styles.filter}>
        <option value={EventCategory.All}>All Events</option>
        <option value={EventCategory.Workshops}>Workshops</option>
        <option value={EventCategory.TechTalks}>TechTalks</option>
        <option value={EventCategory.Socials}>Socials</option>
      </select>

      {events.map(event =>
        <Event
          date={event.date}
          month={event.month}
          title={event.title}
          location={{
            title: event.location.title,
            link: event.location.link
          }}
          time={event.time}
          link={event.link}
        />)}
    </>
  )
}