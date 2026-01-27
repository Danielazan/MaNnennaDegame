import React from 'react'
import { Play, Plus, Heart, Coins, Star, Dice5, ArrowLeft } from 'lucide-react';
import bg from "../../assets/background1.png"
import HM from "../../assets/Heroimg.png"
import CB from "../../assets/coinBg.png"
import startcoin from "../../assets/startCoin.png"
import ring from "../../assets/rings.png"
import textBg from "../../assets/textbg.png"
import game from "../../assets/game.png"
import Navbar from './Navbar'

function HeroTwo() {
  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat  relative" style={{ backgroundImage: `url(${bg})` }}>

      <div className="w-full px-2 md:px-5 relative overflow-hidden ">
        <Navbar />

        {/* Main content */}
        <div className='w-full px:5 bg-contain bg-no-repeat bg-center relative overflow-hidden flex flex-col justify-center items-center' style={{ backgroundImage: `url(${CB})` }}>
          <img
            src={startcoin}  // Replace with your image URL
            alt="Absolutely positioned image"
            className="absolute top-4 left-170 w-32 h-32 object-cover rounded-lg shadow-lg"
          />
          {/* Flexed div with humnan image */}
          <div className='flex flex-col md:flex-row w-3/4 relative '>
            <div className='w-full md:w-1/2 md:h-80 md:h-100 bg-no-repeat bg-contain relative' style={{ backgroundImage: `url(${HM})` }}>
              <img
                src={ring}  // Replace with your image URL
                alt="Absolutely positioned image"
                className="absolute top-[-3.05rem] left-20 w-55 h-72 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className='w-full md:w-1/2 relative items-center flex justify-center flex-col text-center'>
              <h1
                className="text-5xl font-poppins md:text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-4"
                style={{
                  backgroundImage: `url(${textBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <span>CAN YOU SURVIVE </span> <br /> WITH $20 A DAY?
              </h1>

              <p className="text-lg md:text-l text-gray-300 mb-10 max-w-lg mx-auto font-poppins lg:mx-0">
                Experience the daily struggle.
                <br />
                Make tough choices. Manage your budget.
                <br />
                Know how long it can last.
              </p>

              <img
                src={game}  // Replace with your image URL
                alt="Absolutely positioned image"
                className=" w-32 h-32 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className='w-full h-15 flex items-center justify-center'>
            {/* Big Play Button */}
            <button className="w-50 h-10 group relative inline-flex items-center gap-4 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 px-10 py-6 rounded-2xl font-poppins font-bold text-xl md:text-sm text-black shadow-2xl shadow-amber-900/50 hover:shadow-amber-700/60 hover:scale-[1.03] transition-all duration-300">
              <Play className="w-7 h-7 group-hover:-translate-x-1 transition-transform rotate-180" />
              Play Game
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default HeroTwo
