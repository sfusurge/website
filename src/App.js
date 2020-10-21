import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import './App.css';

import spotify from "./icons/spotify-icon.svg"

function App() {
  const [scroll, scrollLock] = useState(true)

  return (
    <div id="app">
    </div>
  );
}

export default App;
