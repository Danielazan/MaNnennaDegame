import React from 'react'
import Bus from "../../assets/Business.png"
import nne from "../../assets/nnennaTwo.png"
import NneCircle from "../../assets/circlenne.png"
import rightRib from "../../assets/right.png"
import leftRib from "../../assets/leftribbon.png"
import { Users, Briefcase, TrendingUp, Anchor, Eye, Handshake } from 'lucide-react';

function Business() {
    // const people =;

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
        <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-black  relative">

            <div className="w-full px-2 md:px-5 relative overflow-hidden">
                {/* Business image */}
                <div className='w-full h-50 items-center flex justify-center '>
                    <img
                        src={Bus}  // Replace with your image URL
                        alt="Absolutely positioned image"
                        className="w-55 h-42 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Ma nnenna img  */}

                <div className='w-full mb-8 flex items-center justify-around md:flex-row flex-col'>
                    {/* item one */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={nne}  // Replace with your image URL
                            alt="Absolutely positioned image"
                            className=" w-full  object-cover rounded-lg shadow-lg"
                        />

                    </div>

                    {/* item two */}
                    <div className="w-full md:w-1/2 flex flex-col space-y-6 md:space-y-8 mt-16 md:mt-0 max-w-xs md:max-w-sm ">

                        <BioCard
                            icon={Anchor}
                            title="Anchor of the $20 Survival Game Show"
                            description="The survival game is a game that blends entertainment with real-life economics. It is both engaging and deeply human."
                        />
                        <BioCard
                            icon={Eye}
                            title="Visionary Leader"
                            description="A visionary leader who is passionate about building lives, sparking conversations and creating opportunities across Africa and the diaspora."
                        />
                        <BioCard
                            icon={Handshake}
                            title="Director of NEF"
                            description="NEF is a purpose driven foundation focused on leadership development, skill acquisition & uplifting the less privilege.."
                        />
                    </div>
                
                </div>

            <div className='w-full h-100 absolute bottom-[-4.05rem] left-0 bg-cover bg-center bg-no-repeat rotate-[5deg]' style={{backgroundImage:`url(${leftRib})`}}></div>

            <div className='w-full h-100 absolute bottom-[-4.05rem] right-[-2.4rem] bg-cover bg-center bg-no-repeat rotate-[8deg]' style={{backgroundImage:`url(${rightRib})`}}></div>

            </div>
        </div>
    )
}

export default Business
