import React, { useState } from 'react'
import Logo from "../../assets/Logo.png"
import { useNavigate } from 'react-router-dom';

function Navbar({ signup = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToHome = () => {
    navigate('/');
  };

  const goToBus = () => {
        // Close mobile menu first
        setIsMenuOpen(false);
        
        // Check if we're already on home page
        if (window.location.pathname === '/') {
            document.getElementById('business-section')?.scrollIntoView({ 
                behavior: 'smooth' 
            });
        } else {
            // Navigate home first, then scroll
            navigate('/');
            setTimeout(() => {
                document.getElementById('business-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }, 300); // Wait for route change
        }
    }

  const goToAbout = () => {
    navigate('/about');
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  const goToFoundation = () => {
        // Close mobile menu first
        setIsMenuOpen(false);
        
        // Check if we're already on home page
        if (window.location.pathname === '/') {
            document.getElementById('foundation-section')?.scrollIntoView({ 
                behavior: 'smooth' 
            });
        } else {
            // Navigate home first, then scroll
            navigate('/');
            setTimeout(() => {
                document.getElementById('foundation-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }, 300); // Wait for route change
        }
    }

  return (
    <>
      <nav className={`flex items-center mb-2 relative z-50 ${signup ? 'justify-between' : 'justify-between md:justify-start md:gap-8'}`}>
        <div className="w-18 h-20 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${Logo})` }} />
        
        {/* Desktop Menu */}
        <ul className={`hidden md:flex gap-8 text-sm text-gray-300 ${!signup ? 'ml-auto' : ''}`}>
          <li className="hover:text-yellow-400 cursor-pointer" onClick={goToHome}>Home</li>
          <li className="hover:text-yellow-400 cursor-pointer" onClick={goToAbout}>About</li>
          <li className="hover:text-yellow-400 cursor-pointer" onClick={goToBus}>Business</li>
          <li className="hover:text-yellow-400 cursor-pointer" onClick={goToFoundation}>Foundation</li>
        </ul>

        {/* Desktop Sign Up Button - Separate div */}
        {signup && (
          <div className="hidden md:block">
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition" onClick={goToSignUp}>
              Sign Up
            </button>
          </div>
        )}

        {/* Mobile: Sign Up Button + Hamburger Menu */}
        {signup ? (
          <div className="md:hidden flex items-center gap-3">
            {/* Sign Up Button */}
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-yellow-300 transition" onClick={goToSignUp}>
              Sign Up
            </button>
            
            {/* Hamburger Menu Button */}
            <button 
              onClick={toggleMenu}
              className="flex flex-col gap-1.5 p-2 relative z-50"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        ) : (
          /* Hamburger Menu Button (when no signup) */
          <button 
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        )}
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          onClick={toggleMenu}
          className="md:hidden fixed inset-0 bg-black bg-opacity-70 z-40"
        />
      )}

      {/* Mobile Slide-out Menu - Only Links */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-72 bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-white hover:text-yellow-400 transition"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col p-8 pt-20">
          {/* Navigation Links Only */}
          <ul className="flex flex-col gap-6 text-base text-gray-300">
            <li className="hover:text-yellow-400 cursor-pointer transition border-b border-gray-700 pb-3"  onClick={goToHome}>Home</li>
            <li className="hover:text-yellow-400 cursor-pointer transition border-b border-gray-700 pb-3" onClick={goToAbout}>About</li>
            <li className="hover:text-yellow-400 cursor-pointer transition border-b border-gray-700 pb-3" onClick={goToBus}>Business</li>
            <li className="hover:text-yellow-400 cursor-pointer transition border-b border-gray-700 pb-3" onClick={goToFoundation}>Foundation</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar