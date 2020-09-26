import React from "react"

import styles from "../css/UpcomingEvent.module.css"

import backgroundBodySrc from "../assets/event-card-body.svg"
import backgroundEdgeSrc from "../assets/event-card-edge.svg"
import mapMarker from "../icons/map-marker.svg"
import clock from "../icons/time.svg"

export default props => {
  return (
    <div id={styles.container}>
      <div className={styles.background}>
        <img src={backgroundBodySrc} className={styles.backgroundBody} alt="" />
        <img src={backgroundEdgeSrc} className={styles.backgroundEdge} alt="" />
      </div>
      <div className={styles.header}>
        <div className={styles.date}>
          <h1>{props.date}</h1>
          <h2>{props.month}</h2>
        </div>
        <span className={styles.divider} />
        <h1 className={styles.title}>{props.title}</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.details}>
          <img src={mapMarker} alt="Location" />
          <a href={props.location.link}>{props.location.title}</a>
        </div>
        <div className={styles.details}>
          <img src={clock} alt="Time" />
          <p>{props.time}</p>
        </div>
        <a className={styles.fbEvent} href={props.fbLink}>{props.title}</a>
      </div>
    </div>
  )
}