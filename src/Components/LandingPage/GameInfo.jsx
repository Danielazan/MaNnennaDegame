import React from 'react'
import Bus from "../../assets/Business.png"
import leftcross from "../../assets/leftcross.png"
import rightcross from "../../assets/rightcross.png"
import textBg from "../../assets/textbg.png"
import CoinLR from "../../assets/CoinsRL.png"
import Phone from "../../assets/handphone.png"
import HRingd from "../../assets/headRing.png"
import { ArrowRight, CircleArrowLeft } from 'lucide-react';


function GameInfo() {
    return (
        <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-black  relative overflow-hidden">
            <div className='w-full h-80 absolute top-[-0.05rem] left-[-0.4rem]' style={{ backgroundImage: `url(${leftcross})` }}></div>

            <div className='w-full h-80 absolute top-[-0.05rem] right-[-0.4rem]' style={{ backgroundImage: `url(${rightcross})` }}></div>


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

                <div className='w-full h-110 flex flex-col relative items-center'>

                    <div className="h-90 w-full bg-cover bg-center z-[-20rem] bg-no-repeat  relative" style={{ backgroundImage: `url(${CoinLR})` }}>
                        <img
                            src={Phone}  // Replace with your image URL
                            alt="Absolutely positioned image"
                            className="absolute bottom-[-12.55rem] left-135 w-55 h-75 object-cover z-10 rounded-lg shadow-lg"
                        />

                        <div className="h-80 w-83  bg-center bg-no-repeat bg-contain absolute bottom-[-0-2] left-122" style={{ backgroundImage: `url(${HRingd})` }} />

                    </div>

                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />

                    <div className='w-full h-50  mt-15 flex justify-between items-center px-20'>
                        {/* item one */}
                        
                        <div className='w-50 h-32 bg-[#2D2C2C] flex items-center justify-center rounded-lg px-6'>

                            <div className='w-full bg-[#111111] h-22 flex items-center justify-center'>
                                <p className="text-sm text-center text-gray-300 max-w-lg mx-auto font-poppins lg:mx-0">
                                    Emotional Intelligence.
                                    <br />
                                    Decision Making
                                    <br />
                                    Discipline.
                                </p>
                            </div>
                            
                        </div>

                        <div className='w-50 h-32 bg-[#2D2C2C] flex items-center justify-center rounded-lg px-6'>

                            <div className='w-full bg-[#111111] h-22 flex items-center justify-center'>
                                <p className="text-sm text-center text-gray-300 max-w-lg mx-auto font-poppins lg:mx-0">
                                    Financial Intelligence.
                                    <br />
                                    Smart Spending.
                                    <br />
                                    Survival Skills.
                                </p>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default GameInfo
