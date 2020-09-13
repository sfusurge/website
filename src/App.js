import React from 'react';

import Header from "./components/Header";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header
        mandate="Engage • Empower • Innovate"
        mission={(
          <>
            <b>SFU Surge</b> is an all-inclusive organization to promote
            <b> curiosity and excitement for a future in technology</b>,
            while guiding students on their paths to <b>career success</b>.
          </>
        )}
      />
    </div >
  );
}

export default App;
