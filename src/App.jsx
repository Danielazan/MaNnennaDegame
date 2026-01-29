import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/LandingPage/Home';
import SignUp from './Components/SignUp/index.jsx';
import Agree from "./Components/ConstestForm/Agree"
import Guide from './Components/ConstestForm/Guide';
import AboutPage from './Components/AboutPage';
import GamePage from './Components/Gamepage/index.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/agree" element={<Agree />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/agree" element={<Agree />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
