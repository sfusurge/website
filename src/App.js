import React from 'react';

import UpcomingEvent from "./components/UpcomingEvent";

import './App.css';

function App() {
  return (
    <div id="app">
      <UpcomingEvent
        title="Linux Workshop"
        date="22"
        month="NOV"
        location="SFU Surge Discord Server"
        time="6:00 PM - 7:00 PM"
      />
    </div >
  );
}

export default App;
