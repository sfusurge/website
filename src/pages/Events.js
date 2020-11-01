import React, { useState } from "react"
import { events, EventCategories } from "../data/data"

import styles from "../css/Events.module.css"

import Event from "../components/UpcomingEvent"
import Splash from "../components/Splash"
import Dropdown from "../components/Dropdown"

import splash from "../assets/events-splash.svg"

const fills = [
  { body: "#3D73C7", accent: "#2B5699" },
  { body: "#6D97D5", accent: "#447CCE" },
  { body: "#C5D0E2", accent: "#ADBED8" },
  { body: "#8BA7E6", accent: "#6B8FE0" }
]

export default props => {
  const [category, setCategory] = useState(EventCategories.all)

  const onFilter = category => {
    setCategory(category)
  }

  return (
    <>
      <Splash src={splash} alt="Events" />
      <p id={styles.text}>Events are a core component of our semesterly activities.  On a regular basis, we host talks, workshops, socials, and more. Together, we also tend to do a lot of Leetcode problems. Scroll down below to see what events we have coming up. We hope to see you there!</p>
      <h1 id={styles.header}>Upcoming Events</h1>

      <Dropdown options={Object.values(EventCategories)} onClick={onFilter} classes={{ dropdownStyles: styles.dropdown }} />

      {events.map((event, index) => {
        return (category === EventCategories.all || category === event.category) &&
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
            fill={fills[index % 4]}
            key={event.title + index}
          />
      })}
    </>
  )
}