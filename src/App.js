import React, { useState } from 'react';
import './App.css';
import Plane from './components/Plane';
import Cloud from './components/Cloud';

function App() {
  const [playBackRate, setPlayBackRate] = useState(1);

  const updatePlayBackRate = (val) => { setPlayBackRate(val) }

  return (
    <div id="bg">
      <div>
        <label htmlFor="meter"><b>SPEED: </b></label>
        <meter id="meter" min="0" max="10" low="0" high="4" optimum="2" value={playBackRate}>
          at 50/100
        </meter>
      </div>
      <Plane />
      <Cloud updatePlayBackRate={updatePlayBackRate} />
    </div>
  );
}

export default App;
