import React from "react";

import Button from "./Button";

import spotify from "../icons/spotify-icon.svg";

export default props => {
  return (
    <Button
      href="https://open.spotify.com/show/5GAuw7brERfbZSfnKpURvE?si=2TfsyW27Qi-JTWZTCHGgJQ"
      image={spotify}
      altText="Link to Spotify"
      text="Listen on Spotify"
      dimension={{ height: "52px", width: "75%" }}
    />
  )
}