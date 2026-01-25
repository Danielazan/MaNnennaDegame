import React from 'react'
import Bus from "../../assets/Business.png"
import leftcross from "../../assets/leftcross.png"
import rightcross from "../../assets/rightcross.png"
import textBg from "../../assets/textbg.png"
import CoinLR from "../../assets/CoinsRL.png"
import { ArrowRight, CircleArrowLeft } from 'lucide-react';


function GameInfo() {
    return (
        <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-black  relative">
            <div className='w-full h-80 absolute top-[-0.05rem] left-[-0.4rem]' style={{ backgroundImage: `url(${leftcross})` }}></div>
            <div></div>

            <div className='w-full h-80 absolute top-[-0.05rem] right-[-0.4rem]' style={{ backgroundImage: `url(${rightcross})` }}></div>
            <div></div>

            <div className="w-full px-2 md:px-5 relative overflow-hidden">
                {/* business image */}
                <div className='w-full h-50 mt-50 items-center flex justify-center '>
                    <img
                        src={Bus}  // Replace with your image URL
                        alt="Absolutely positioned image"
                        className="w-55 h-42 object-cover rounded-lg shadow-lg"
                    />

                </div>

                {/* write up */}
                <div className='flex w-full items-center  flex-col h-50 justify-around '>
                    <p className="text-lg md:text-sm font-poppins font-medium text-gray-300  leading-relaxed">
                        The $20 Daily Survival Game Show is more than entertainment it’s a mirror of
                        <br />
                        real life. It challenges young people to think, plan, adapt, and make smart
                        <br />
                        decisions with limited resources, just like the real world demands.
                    </p>


                    <button className="w-35 h-10 group relative inline-flex items-center justify-between bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 px-2 py-6 rounded-2xl font-poppins font-bold text-xl md:text-sm text-black shadow-2xl shadow-amber-900/50 hover:shadow-amber-700/60 hover:scale-[1.03] transition-all duration-300">
                        
                        Learn More
                        <CircleArrowLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform rotate-180 text-white" />
                    </button>
                </div>

                <div className='w-full h-90 flex flex-col relative items-center'>
                    <div className="h-70 w-full bg-cover bg-center bg-no-repeat  relative" style={{ backgroundImage: `url(${CoinLR})` }}></div>

                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />

                    <div>
                        
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default GameInfo
