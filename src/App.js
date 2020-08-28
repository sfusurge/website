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
      />
    </div >
  );
}

export default App;
