import React from "react";

import ProjectsImage from "./Homepage-Projects";
import ProjectsText from "./Homepage-ProjectsText";
import EventsImage from "./Homepage-Events";
import EventsText from "./Homepage-EventsText";
import PodcastImage from "./Homepage-Podcasts";
import PodcastText from "./Homepage-PodcastsText";

import styles from "../css/Homepage-MainActivities.module.css";

export default props => {
  return (
    <>
      <div className={styles.homepageActivity}>
        <ProjectsImage />
        <ProjectsText />
      </div>
      <div className={styles.homepageActivity}>
        <EventsImage />
        <EventsText />
      </div>
      <div className={styles.homepageActivity}>
        <PodcastImage />
        <PodcastText />
      </div>
    </>
  )
}