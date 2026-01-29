import React from 'react';
import Footer from '../LandingPage/Footer';
import Logo from "../../assets/Logo.png"
import { useNavigate } from 'react-router-dom';


export default function ContestantGuide() {
  const navigate = useNavigate();

  const goToAgree = () => {
    navigate('/agree');
  };

  const howItWorksSteps = [
    {
      number: 1,
      title: 'Sign Up:',
      description: 'Create your account and agree to the rules.'
    },
    {
      number: 2,
      title: 'Daily Challenges:',
      description: 'Complete short tasks each day, mental, strategic, or interactive.'
    },
    {
      number: 3,
      title: 'Survival:',
      description: "Pass the challenge to survive to the next round. Fail, and you're out for the day."
    },
    {
      number: 4,
      title: 'Winnings:',
      description: 'Successfully surviving a challenge earns $20. Bonuses for top performers.'
    }
  ];

  const rules = [
    'Only one account per participant.',
    'Be 18+ or have parental consent if 16-17.',
    'Play fairly and honestly; cheating leads to disqualification.',
    'Respect all participants and organizers.',
    'Follow time limits and instructions for safety.',
    "Organizers' decisions are final."
  ];

  const safetyPoints = [
    'Participation is voluntary; you assume all risks.',
    'Inform organizers of any health conditions before playing.',
    'Your data is protected, and game media may be used for promotion.'
  ];

  const agreementPoints = [
    'You understand the rules and risks.',
    'You will participate safely, honestly, and respectfully.',
    'You consent to organizers using your game performance for promotion.'
  ];

  const handleAgree = () => {
    console.log('User agreed to participate');
    // Handle agreement action
  };
  

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Logo */}
        <div className="mb-12">
          <div className="w-18 h-20 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${Logo})` }} />
        </div>

        {/* Main Content Container */}
        <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 lg:p-16">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-12">
            $20 Survival Game Show-Contestant Guide
          </h1>

          {/* Welcome Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">Welcome</h2>
            <p className="text-gray-300 leading-relaxed">
              The $20 Survival Game is a daily challenge where skill, strategy, and luck combine for a chance to win 
              cash prizes. Complete tasks, survive each round, and earn cash prize per day
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6">How It Works</h2>
            <div className="space-y-4">
              {howItWorksSteps.map((step) => (
                <div key={step.number} className="text-gray-300">
                  <span className="font-semibold">{step.number}. {step.title}</span>{' '}
                  <span>{step.description}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Rules & Guidelines Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6">Rules & Guidelines</h2>
            <div className="space-y-3">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start text-gray-300">
                  <span className="mr-2">•</span>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Safety and Privacy Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6">Safety and Privacy</h2>
            <div className="space-y-3">
              {safetyPoints.map((point, index) => (
                <div key={index} className="flex items-start text-gray-300">
                  <span className="mr-2">•</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Agreement Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6">Agreement</h2>
            <p className="text-gray-300 mb-4">By clicking "I Agree", you confirm:</p>
            <div className="space-y-3 mb-8">
              {agreementPoints.map((point, index) => (
                <div key={index} className="flex items-start text-gray-300">
                  <span className="mr-2">•</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <p className="text-white font-bold mb-6">I AGREE TO PARTICIPATE</p>
            <button
              onClick={goToAgree}
              className="bg-yellow-500 text-black font-bold px-10 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              AGREE
            </button>
          </section>
        </div>
      </div>
              
    <Footer/>
    </div>
  );
}