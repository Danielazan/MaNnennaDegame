import React from 'react';
import { FaYoutube, FaEnvelope, FaHome, FaBlog, FaNewspaper, FaShieldAlt, FaFileContract } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Section - Profile & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Profile */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold">
                NE
              </div>
              <div>
                <p className="text-sm text-gray-400">@elokannenna</p>
                <h2 className="text-xl font-bold">Nnenna Eloka</h2>
              </div>
            </div>
            
            <p className="text-gray-300">
              Businesswoman, and founder of impactful ideas
            </p>
            
            <a 
              href="https://youtube.com/@nnenna-eloka?si=ggmMsxllK6X99AWC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-red-500 hover:text-red-400 transition-colors"
            >
              <FaYoutube className="text-xl" />
              <span>youtube.com/@nnenna-eloka</span>
            </a>
          </div>
          
          {/* Right Column - Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get more inbox</h3>
            <p className="text-gray-300 text-sm">
              Subscription to impactful ideas
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-400 text-xs">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </div>
        
        {/* Middle Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-gray-800">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                  <FaHome className="text-sm" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                  <FaBlog className="text-sm" />
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                  <FaNewspaper className="text-sm" />
                  <span>Newsletter</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Nnenna
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  The Survival Game
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Foundation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Businesses
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                  <FaShieldAlt className="text-sm" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                  <FaFileContract className="text-sm" />
                  <span>Terms of Service</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Subscription Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Subscription</h3>
            <p className="text-gray-400 text-sm">
              Get the latest impactful ideas delivered to your inbox
            </p>
          </div>
        </div>
        
        {/* Bottom Section - Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Nnenna Eloka. All rights reserved</p>
          <p className="mt-1">Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;