import React from 'react';
import { FaYoutube, FaEnvelope, FaHome, FaBlog, FaNewspaper, FaShieldAlt, FaFileContract,FaLinkedin } from 'react-icons/fa';
import { 
  Fa6BrandsTiktok       // TikTok icon (FA6 Brands)
} from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[#000000]  relative">

            <div className="w-full px-2 md:px-5 relative overflow-hidden ">
                {/* Links section1 */}
                <div class="w-full grid grid-cols-5 gap-4 px-12 ">
                    <div class=" p-8 text-white flex gap-5 ">
                        <FaLinkedin className="text-2xl" />
                        <span>@nnennaeloka</span>
                    </div>

                    <div class=" p-8 text-white flex gap-5 ">
                        <Fa6BrandsTiktok className="text-2xl" />
                        <span>@nnennaeloka</span>
                    </div>

                    <div class=" p-8 text-white flex gap-5 ">
                        <FaLinkedin className="text-2xl" />
                        <span>@nnennaeloka</span>
                    </div>

                    <div class=" p-8 text-white flex gap-5 ">
                        <FaLinkedin className="text-2xl" />
                        <span>@nnennaeloka</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;