import React from "react"

import styles from "../css/UpcomingEvent.module.css"

import {ReactComponent as BgBody} from "../assets/event-card-body.svg"
import {ReactComponent as BgEdge} from "../assets/event-card-edge.svg"
import mapMarker from "../icons/map-marker.svg"
import clock from "../icons/time.svg"

export default props => {
  return (
    <div id={styles.container}>
      <div className={styles.background}>
        {/* <BgBody className={styles.backgroundBody} /> */}
        <svg width="260" height="275" viewBox="0 0 260 275" fill="none" preserveAspectRatio="none" className={styles.backgroundBody}>
          <rect width="260" height="7.09677" fill="#2B5699" core="true" />
          <rect y="7" width="260" height="268" fill="#3D73C7" core="false" />
        </svg>
        <BgEdge className={styles.backgroundEdge} />
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
        <a className={styles.fbEvent} href={props.link}>{props.title}</a>
      </div>
    </div>
  )
}