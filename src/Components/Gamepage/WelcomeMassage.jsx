import React from 'react'
import Bg from "../../assets/SignUpBg.png"
import Navbar from '../LandingPage/Navbar'
import textBg from "../../assets/textbg.png"

function WelcomeMassage() {
    return (
        <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat  relative " style={{ backgroundImage: `url(${Bg})` }}>
            <div className="w-full  md:px-5 relative overflow-hidden ">
                <Navbar />

                <div className='w-full h-full flex items-center justify-center flex-col'>
                    <p className="text-[#F0AE12] font-poppins font-medium  text-lg mb-3">Sign Up Complete</p>

                    <h1
                        className="text-lg font-poppins md:text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent text-center mt-10"
                        style={{
                            backgroundImage: `url(${textBg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        <span className="">Regisration For the $20 survival Game Complete</span> <br /> Thank you
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default WelcomeMassage
