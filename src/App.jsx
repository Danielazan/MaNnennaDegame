import { useState } from 'react'
import Sliderss from './Components/LandingPage/Sliderss';
import Business from './Components/LandingPage/Business';
import GameInfo from './Components/LandingPage/GameInfo';
import Foundation from './Components/LandingPage/Foundation';
import Footer from './Components/LandingPage/Footer';
import HeroTwo from './Components/LandingPage/HeroTwo';
import Hero from "./Components/LandingPage/Hero"

function App() {
  const slides = [<Hero />, <HeroTwo />];
  const mySlides = [Hero, HeroTwo];
  return (
    <div>
      <Sliderss slides={mySlides} />
      <Business/>
      <GameInfo/>
      <Foundation/>
      <Footer/>
    </div>
  );
}

export default App
