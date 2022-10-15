import React from 'react';
import Listing from './Components/Listing';
import "./App.css"

const DATA = require('./data.json');

function App() {

  return (
    <div className="App">
      <div className='app-upper'></div>
      <div className='app-bottom'>
        <Listing data={DATA} />
      </div>
    </div>
  );
}

export default App;
