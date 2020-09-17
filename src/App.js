import React, { useState } from 'react'

import Homepage from "./pages/Homepage"
import Button from "./components/Button"
import Nav from "./components/Nav"

import './App.css';

import spotify from "./icons/spotify-icon.svg"

function App() {
  const [scroll, scrollLock] = useState(true)

  return (
    <div className="App">
      <Homepage />
      <Button
        image={spotify}
        altText="Link to Spotify"
        text="Listen on Spotify"
        link="https://open.spotify.com/show/5GAuw7brERfbZSfnKpURvE?si=f1Uz9jp4T0O9yD1MBqD7Eg"
        style={{ width: "75%", height: "52px" }}
      />
    </div>
  );
}

export default App;
