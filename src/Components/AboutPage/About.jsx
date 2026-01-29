import React from 'react'
import bg from "../../assets/background1.png"
import Navbar from "../LandingPage/Navbar"
import leftcross from "../../assets/leftcross.png"
import rightcross from "../../assets/rightcross.png"
import Bus from "../../assets/Business.png"
import { ArrowRight, CircleArrowLeft } from 'lucide-react';
import CoinLR from "../../assets/CoinsRL.png"
import Phone from "../../assets/handphone.png"
import HRingd from "../../assets/headRing.png"

function About() {
    const BioCard = ({ icon: Icon, title, description }) => {
        return (
            <div className='w-85 h-40 bg-[#2D2C2C] p-6 rounded-2xl flex items-center justify-center flex-col'>
                <div className="bg-[#111111] w-75 px-4 py-2 h-35 rounded-lg shadow-lg border  hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-3  mb-2">
                        {/* <Icon className="text-yellow-400 w-5 h-5 flex-shrink-0" /> */}
                        <div className='w-10 rounded-3xl'>
                            <img
                                src={NneCircle}  // Replace with your image URL
                                alt="Absolutely positioned image"
                                className=" w-full  object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        <h4 className="text-white font-bold text-sm">{title}</h4>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        );
    };
    return (
        <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat  relative bg-black">
            <Navbar signup={true} />
            <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-black  relative overflow-hidden">

                <div className='w-150 md:w-full h-80 absolute md:top-[-0.05rem] top-18 md:left-[-0.4rem] md:rotate-0 rotate-12 -left-9' style={{ backgroundImage: `url(${leftcross})` }}></div>

                <div className='w-150 md:w-full h-80 absolute md:top-[-0.05rem] right-[-1.5rem] md:right-[-0.4rem] md:rotate-0 -rotate-12 top-[-4.05rem]' style={{ backgroundImage: `url(${rightcross})` }}></div>


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
                    <div className='flex w-full items-center  flex-col h-150 md:h-50 justify-around gap-14'>
                        <p className="text-lg md:text-sm font-poppins font-medium text-center md:text-left text-gray-300  md:eading-relaxed md:max-w-3xl max-w-xs">
                            The $20 Daily Survival Game Show is more than entertainment it’s a mirror of real life. It challenges young people to think, plan, adapt, and make smart decisions with limited resources, just like the real world demands.
                            <br /> <br />
                            In a time where many young people are struggling with direction, finances, and confidence, this show teaches practical life skills in a relatable and engaging way. It encourages discipline, creativity, resilience, and financial awareness  not through lectures, but through real experiences.
                            <br /> <br />
                            In a time where many young people are struggling with direction, finances, and confidence, this show teaches practical life skills in a relatable and engaging way. It encourages discipline, creativity, resilience, and financial awareness  not through lectures, but through real experiences.
                        </p>


                        {/* <button className="md:w-35 w-40 h-10 group relative inline-flex items-center justify-between bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 px-2 py-6 rounded-2xl font-poppins font-bold text-xl md:text-sm text-black shadow-2xl shadow-amber-900/50 hover:shadow-amber-700/60 hover:scale-[1.03] transition-all duration-300">

                        Learn More
                        <CircleArrowLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform rotate-180 text-white" />
                    </button> */}
                    </div>

                    <div className='w-full h-200 md:h-110 flex flex-col relative items-center mt-30 md:mt-0'>

                        <div className="h-100  md:h-90 w-full bg-cover bg-center z-[-20rem] bg-no-repeat  relative" style={{ backgroundImage: `url(${CoinLR})` }}>
                            <img
                                src={Phone}  // Replace with your image URL
                                alt="Absolutely positioned image"
                                className="relative md:absolute md:bottom-[-12.55rem] md:left-135 w-full md:w-55 h-90 md:h-75 object-cover z-10 rounded-lg shadow-lg"
                            />

                            <div className="h-80 w-83  bg-center bg-no-repeat bg-contain absolute bottom-50  md:bottom-[-7rem] left-8 md:left-122" style={{ backgroundImage: `url(${HRingd})` }} />

                        </div>

                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />

                        <div className='w-full h-80 md:h-50  mt-15 flex justify-between items-center px-20 md:flex-row flex-col gap-4'>
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
        </div>
    )
}

export default About
