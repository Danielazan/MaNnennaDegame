import React from 'react';
import lingImg from "../../assets/textbg.png"
import Logo from "../../assets/Logo.png"
import { FaYoutube, FaEnvelope, FaHome, FaFacebook, FaNewspaper, FaShieldAlt, FaFileContract, FaLinkedin, FaTiktok } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[#000000]  relative">

            <div className="w-full px-2 md:px-5 relative overflow-hidden ">
                {/* Links section1 */}
                <div className="w-full grid grid-cols-5 gap-2 px-1 ">

                    <div className="col-span-1 px-2 py-6 text-white flex gap-2 ">
                        <FaLinkedin className="text-2xl" />
                        <span>@nnennaeloka</span>
                    </div>

                    <div className="col-span-1 px-2 py-6 text-white flex gap-5 ">
                        <FaTiktok className="text-2xl" />
                        <span>@nnennaeloka</span>
                    </div>

                    <div className="col-span-1 px-2 py-6 text-white flex gap-5 ">
                        <FaFacebook className="text-2xl" />
                        <span>Nnenna Eloka</span>
                    </div>

                    <div className=" col-span-1 px-2 py-6 text-white flex gap-5 ">
                        <FaYoutube className="text-2xl" />
                        <span className='text-sm'>https:/youtube.com/@nnenna-eloka?si=ggmMsxl1K6X99AWC</span>
                    </div>

                    <div className="col-span-1  px-2 py-6 text-white flex gap-5 ">
                        <FaEnvelope className="text-2xl" />
                        <span className='text-sm'>info@nnennaelokafoundation.org</span>
                    </div>
                </div>

                <div className='w-full bg-cover bg-no-repeat h-0.5' style={{ backgroundImage: `url(${lingImg})` }} />

                <div className='w-full grid grid-cols-4 gap-2 mt-10'>
                    <div className='flex items-start justify-between'>
                        <img
                            src={Logo}  // Replace with your image URL
                            alt="Absolutely positioned image"
                            className=" w-12 h-12 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;