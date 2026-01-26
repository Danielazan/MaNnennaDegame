import { useState } from 'react'
import Sliderss from './Components/LandingPage/Sliderss';
import Business from './Components/LandingPage/Business';
import GameInfo from './Components/LandingPage/GameInfo';
import Foundation from './Components/LandingPage/Foundation';
import Footer from './Components/LandingPage/Footer';

function App() {

  return (
    <div className="bg-white">
      <Sliderss/>
      <Business/>
      <GameInfo/>
      <Foundation/>
      <Footer/>
    </div>
  );
}

export default App
