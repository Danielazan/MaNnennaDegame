import React from 'react'
import HSun from "../../assets/handsun.png"
import FoundationImg from "../../assets/Foundation.png"

function Foundation() {
    return (
        <div id="foundation-section" className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-black z-10 relative " >
            <div className='w-full bg-cover bg-no-repeat h-screen flex flex-col items-center md:justify-center justify-start gap-18 md:gap-0' style={{ backgroundImage: `url(${HSun})` }}>
                <div className='w-full h-50 items-center flex justify-center '>
                    <img
                        src={FoundationImg}  // Replace with your image URL
                        alt="Absolutely positioned image"
                        className="w-55 md:h-42 object-cover rounded-lg "
                    />

                </div>

                <div className='w-full md:w-1/2 h-70  flex items-center justify-center'>
                    <p className='font-poppins font-medium leading-loose text-center text-lg  text-white'>
                        The Nnenna Eloka Foundation was created to address real needs within communities by supporting education, empowerment, and social development initiatives. Through carefully designed programs and partnerships, the foundation focuses on creating opportunities that help individuals grow, become self-reliant, and build better futures.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Foundation
