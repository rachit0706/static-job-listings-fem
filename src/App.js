import React from 'react';
import JobCard from './Components/JobCard';

const DATA = require('./data.json');

function App() {
  // console.log(DATA);

  return (
    <div className="App" style={{backgroundImage: `url(./images/bg-header-desktop.svg)`, backgroundRepeat: "no-repeat"}}>
      {DATA.map(card => <JobCard cardData={card}/>)}
    </div>
  );
}

export default App;
