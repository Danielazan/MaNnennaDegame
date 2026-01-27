import { useState, useEffect } from 'react';
import bg from "../../assets/background1.png"
import mainPic from "../../assets/MaNnenna_Pic.png"
import Logo from "../../assets/Logo.png"
import textBg from "../../assets/textbg.png"
import Navbar from './Navbar';

function Hero() {
    return (
        <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat  relative" style={{ backgroundImage: `url(${bg})` }}>
            <div className="w-full  px-2 md:px-5 relative overflow-hidden">
                <Navbar/>

                {/* main content */}
                <div className=" flex flex-col md:flex-row items-center  px-2 ">
                    {/* Left */}
                    <div className='w-full md:w-90 ml-20 flex items-center flex-col md:block mb-10 md:mb-0'>

                        <p className="text-[#F0AE12] font-poppins font-medium  text-lg mb-3">Hey, I'm</p>
 
                        {/* <div className="flex gap-4 mt-10">
                            <button className="px-8 py-3 border border-yellow-400 rounded-xl text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                                Explore
                            </button>
                            <button className="px-8 py-3 bg-yellow-400 text-black rounded-xl font-semibold flex items-center gap-2 hover:bg-yellow-300 transition">
                                ▶ Play Game
                            </button>
                        </div> */}

                        <h1
                            className="text-5xl font-poppins md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
                            style={{
                                backgroundImage: `url(${textBg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            <span className="">Nnenna</span> <br /> Eloka
                        </h1>
                    </div>


                    {/* Right Image */}
                    <div className="w-full h-127 md:h-125  bg-contain md:bg-contain bg-no-repeat relative flex justify-start" style={{ backgroundImage: `url(${mainPic})` }}>

                    </div>

                </div>


                <div className="w-full h-10 bg-black align-center justify-center flex flex-wrap gap-4  text-sm text-gray-300">
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" /> Entrepreneur
                </span>
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" /> Media Personality
                </span>
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" /> Change Advocate
                </span>
            </div>
            </div>
            
        </div >
    )
}

export default Hero
