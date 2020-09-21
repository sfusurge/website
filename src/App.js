import React from 'react'

import Homepage from "./pages/Homepage"
import About from './pages/About'
import Button from "./components/Button"

import './App.css';

import spotify from "./icons/spotify-icon.svg"

function App() {
  return (
    <div id="app">
      <About />
      {/* <Homepage /> */}
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
