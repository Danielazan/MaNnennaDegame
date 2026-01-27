import React from 'react';
import lingImg from "../../assets/textbg.png"
import btnImg from "../../assets/textbg.png"
import Logo from "../../assets/Logo.png"
import { FaYoutube, FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { Twitter } from 'lucide-react';


const Footer = () => {
    return (
        <div className="h-100 w-full bg-cover bg-center bg-no-repeat bg-[#000000]  relative">

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

                    <div className=" col-span-1 px-2 py-6 text-white flex gap-5 items-start">
                        <FaYoutube className="text-6xl" />
                        <span className='text-sm'>https:/youtube.com/@nnenna-eloka?si=ggmMsxl1K6X99AWC</span>
                    </div>

                    <div className="col-span-1  px-2 py-6 text-white flex gap-5 ">
                        <FaEnvelope className="text-2xl" />
                        <span className='text-sm'>info@nnennaelokafoundation.org</span>
                    </div>
                </div>

                <div className='w-full bg-cover bg-no-repeat h-0.5' style={{ backgroundImage: `url(${lingImg})` }} />

                <div className='w-full grid grid-cols-4 gap-2 mt-10'>
                    {/* item one */}
                    <div className='flex items-start justify-between gap-7'>
                        <img
                            src={Logo}  // Replace with your image URL
                            alt="Absolutely positioned image"
                            className=" w-12 h-12 object-cover rounded-lg shadow-lg"
                        />
                        <div className='w-200 flex flex-col '>
                            <p className='font-poppins text-sm font-light text-white leading-8 text-left'>
                                Nnenna Eloka is a businesswoman, media personality and founder focused on building impactful ideas and platforms.
                            </p>

                            <div className='flex flex-col w-full mt-10'>
                                <p className='text-white'>Follow me</p>

                                <div className='w-full grid grid-cols-4 text-white mt-5'>
                                    <FaFacebook className="text-2xl" />
                                    <FaInstagram className="text-2xl" />
                                    <FaLinkedin className="text-2xl" />
                                    <Twitter className="text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>

                        {/* Items 2 */}
                    <div className='flex flex-col text-white'>
                        <h1 className='font-poppins'>Quick Links</h1>

                        <div className='flex flex-col mt-6 font-poppins text-white'>
                            <h4>Home</h4>
                            <h4>About Nnenna</h4>
                            <h4>The Survival Game</h4>
                            <h4>Foundation</h4>
                            <h4>Businesses</h4>
                        </div>
                    </div>
                    {/* item 3 */}
                    <div className='flex flex-col text-white'>
                        <h1 className='font-poppins'>Resources</h1>

                        <div className='flex flex-col mt-6 font-poppins text-white'>
                            <h4>Blog</h4>
                            <h4>Newsletter</h4>
                            <h4>Privacy Policy</h4>
                        </div>
                    </div>


                    {/* Item 4 */}

                     <div className='flex flex-col text-white'>
                        <h1 className='font-poppins'>Subscribe</h1>

                        <div className='w-full flex flex-col mt-6 font-poppins text-white gap-2'>
                            <h4>Get more updates straight to your inbox</h4>
                            <h4>Newsletter</h4>
                            <div className='border rounded-2xl border-[#F0AE12] flex  items-center justify-between w-5/6 h-10'>
                                <h1 className='font-poppins text-l pl-4'>Enter your email here</h1>
                                <button className='w-18 rounded-r-2xl h-full text-xs text-black font-bold' style={{backgroundImage:`url(${btnImg})`}}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;