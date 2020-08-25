import React from "react";

import styles from "../css/SpotifyButton.module.css";

import spotify from "../icons/spotify-icon.svg";

export default props => {
  return (
    <a id={styles.container} href="https://open.spotify.com/show/5GAuw7brERfbZSfnKpURvE?si=2TfsyW27Qi-JTWZTCHGgJQ">
      <img className={styles.element} src={spotify} alt="Spotify Icon" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;800&display=swap" rel="stylesheet" />
      <p className={styles.element}>Listen on Spotify</p>
    </a>
  )
}