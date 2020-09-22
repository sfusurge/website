import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Homepage from "./pages/Homepage"
import Button from "./components/Button"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

import './App.css';

import Projects from "./pages/Projects"

function App() {
  const [scroll, scrollLock] = useState(true)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          {/* <Route path="/events">
            <Events />
          </Route> */}
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
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
