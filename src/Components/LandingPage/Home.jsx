import React, { useRef,useEffect } from 'react';
import Sliderss from './Sliderss';
import Business from './Business';
import GameInfo from './GameInfo';
import Foundation from './Foundation';
import Footer from './Footer';
import HeroTwo from './HeroTwo';
import Hero from "./Hero"


function Home() {
 
    const mySlides = [Hero, HeroTwo];

    return (
        <div>
            <Sliderss slides={mySlides} />
            <Business />
            <GameInfo />
            <Foundation />
            <Footer />
        </div>
    )
}

export default Home
