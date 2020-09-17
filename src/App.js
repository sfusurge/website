import React from 'react'

import Homepage from "./pages/Homepage"
import Button from "./components/Button"
import Footer from "./components/Footer"

import './App.css';

import spotify from "./icons/spotify-icon.svg"

function App() {
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
