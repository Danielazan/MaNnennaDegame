import { useState } from 'react'
import Bg from "../../assets/SignUpBg.png"
import bg from "../../assets/background1.png"
import Bus from "../../assets/Business.png"
import game from "../../assets/game.png"
import textBg from "../../assets/textbg.png"
import HM from "../../assets/Heroimg.png"
import Navbar from '../LandingPage/Navbar'
import Footer from '../LandingPage/Footer'
import { useNavigate } from 'react-router-dom';


function Sign() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');


    const goToGuide = () => {
  if (email.trim()) {
    navigate('/guide', {
      state: {
        user: {
          name: email.split('@')[0], // Extract from email
          email: email,
          player: 'player' // Or dynamic value
        }
      }
    });
  }
};

    const handleSignUp = () => {
        if (email.trim()) {
            // Navigate to GamePage with mock user data
            navigate('/game', {
                state: {
                    user: {
                        name: email.split('@')[0], // Extract name from email
                        email: email,
                        role: 'player' // Default role
                    }
                }
            });
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSignUp();
        }
    };
    return (
        <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat  relative " style={{ backgroundImage: `url(${Bg})` }}>

            {/* Coins bg image */}

            <div className="w-full h-full md:px-5 relative overflow-hidden  pb-20 md:pb-0">
                <Navbar signup={true} />

                <div className='w-full h-50 items-center flex justify-center '>
                    <img
                        src={Bus}  // Replace with your image URL
                        alt="Absolutely positioned image"
                        className="w-55 h-42 object-cover rounded-lg shadow-lg"
                    />
                </div>

                <img
                    src={game}  // Replace with your image URL
                    alt="Absolutely positioned image"
                    className="absolute bottom-[-1.7rem] left-142 w-80 h-80 object-cover rounded-lg shadow-lg -z-7.9"
                />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/100 transition-all" />
                {/* main content */}
                <div className='w-full flex flex-col items-center justify-center relative '>

                    <div className='w-full md:w-2/3 flex md:flex-row flex-col gap-4 md:gap-0'>
                        <div className='w-full h-80 md:w-1/2  flex items-center justify-center'>
                            <img
                                src={HM}  // Replace with your image URL
                                alt="Absolutely positioned image"
                                className="w-full md:w-75 h-full md:h-70 object-cover rounded-lg "
                            />
                        </div>

                        <div className='w-full md:w-1/2 flex items-center justify-center px-4 md:px-14 py-4'>
                            <div className='bg-[#111111] w-full h-full rounded-2xl flex items-center justify-center flex-col p-2'>
                                <h1
                                    className="text-2xl font-poppins md:text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage: `url(${textBg})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    SIGN UP
                                </h1>

                                <p className="text-[#F5F5F5] font-poppins font-medium  text-lg mb-10 md:mb-3">Sign up with your email to access the $20 survival game</p>

                                <div className='border rounded-2xl border-[#F0AE12] flex  items-center justify-between w-5/6 h-10 mt-10'>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Enter your email here"
                                        className='font-poppins text-sm pl-4 text-white  backdrop-blur-sm outline-none flex-1 h-full rounded-l-3xl bg-none'
                                    />
                                    <button onClick={goToGuide} className='w-18 rounded-r-2xl h-full text-xs text-black font-bold' style={{ backgroundImage: `url(${textBg})` }}>Sign Up</button>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sign
