import React from 'react'
import Logo from "../../assets/Logo.png"

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between mb-2">
                          <div className="w-18 h-20 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${Logo})` }} />
                          <ul className="hidden md:flex gap-8 text-sm text-gray-300">
                              <li className="hover:text-yellow-400 cursor-pointer">Home</li>
                              <li className="hover:text-yellow-400 cursor-pointer">About</li>
                              <li className="hover:text-yellow-400 cursor-pointer">Business</li>
                              <li className="hover:text-yellow-400 cursor-pointer">Foundation</li>
                          </ul>
                          <button className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition">
                              Sign Up
                          </button>
                      </nav>
    </>
  )
}

export default Navbar
