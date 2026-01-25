import { useState } from 'react'
import Sliderss from './Components/LandingPage/Sliderss';
import Business from './Components/LandingPage/Business';
import GameInfo from './Components/LandingPage/GameInfo';
function App() {

  return (
    <div className="bg-white">
      <Sliderss/>
      <Business/>
      <GameInfo/>
    </div>
  );
}

export default App
