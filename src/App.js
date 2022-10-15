import React from 'react';
import JobCard from './Components/JobCard';
import "./App.css"

const DATA = require('./data.json');

function App() {
  // console.log(DATA);

  return (
    <div className="App">
      <div className='app-upper'></div>
      <div className='app-bottom'>
        <div className='listing-area'>
          {DATA.map(card => <JobCard cardData={card} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
