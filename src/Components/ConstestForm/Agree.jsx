import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';  
import Footer from '../LandingPage/Footer';
import Logo from "../../assets/Logo.png"


export default function Agree() {
  const navigate = useNavigate();
  const location = useLocation();  // Get current state

  const [formData, setFormData] = useState({
    participantName: '',
    signature: '',
    date: ''
  });

  const sections = [
    {
      number: 1,
      title: 'Acknowledgment and Understanding',
      content: [
        'I, the undersigned, hereby acknowledge that I am voluntarily participating in the $20 Survival Game Show produced by Nnenna Eloka. I understand that participation involves challenges, tasks, or activities that may carry certain risks, including but not limited to physical activity, mental challenges, and interaction with other participants.',
        'I confirm that I have read and fully understand the rules and requirements of the Game, and I voluntarily agree to comply with all instructions provided by the organizers.'
      ]
    },
    {
      number: 2,
      title: 'Assumption of Risk',
      content: [
        'I acknowledge and accept that there may be inherent risks associated with participating in the Game, including the risk of personal injury, property damage, or emotional distress. I voluntarily assume all such risks, whether known or unknown, and agree to participate at my own risk.'
      ]
    },
    {
      number: 3,
      title: 'Health and Safety',
      content: [
        'I confirm that I am in good physical and mental health, and capable of safely participating in the Game. I agree to immediately disclose any pre-existing medical conditions, allergies, or limitations to the organizers.',
        'I understand that the organizers reserve the right to remove any participant whose health, behavior, or condition may pose a risk to themselves or others.'
      ]
    },
    {
      number: 4,
      title: 'Consent to Use of Image and Likeness',
      content: [
        'I grant Nnenna Eloka and its affiliates the right to photograph, record, and use my name, image, voice, and performance in connection with the Game, in any form of media, for promotional, commercial, or educational purposes without additional consent or compensation, except where prohibited by law.'
      ]
    },
    {
      number: 5,
      title: 'Release and Waiver of Liability',
      content: [
        'I release and hold harmless Nnenna Eloka, its producers, sponsors, employees, volunteers, and agents from any and all liability, claims, demands, actions, or causes of action arising out of or relating to any loss, damage, injury, or death that may occur during my participation in the Game.',
        'This release includes claims arising from negligence, but does not release liability for gross negligence or willful misconduct.'
      ]
    },
    {
      number: 6,
      title: 'Compliance with Laws and Regulations',
      content: [
        'I agree to abide by all applicable Canadian federal, provincial, and municipal laws, and understand that any illegal activity during the Game may result in immediate disqualification and reporting to authorities.'
      ]
    },
    {
      number: 7,
      title: 'Voluntary Participation',
      content: [
        'I confirm that my participation is entirely voluntary. I understand that I may withdraw from the Game at any time without penalty, though I must notify the organizers immediately if I choose to do so.'
      ]
    },
    {
      number: 8,
      title: 'Acknowledgement of Understanding',
      content: [
        'I have carefully read this Consent and Release Form and fully understand its contents. I am aware that this is a legally binding agreement and sign it voluntarily.'
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const goToGame = () => {
    const user = location.state?.user;  // Extract user
    if (user) {
      navigate('/game', { state: { user } });  // Forward to game
    } else {
      console.error('No user data found');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header Logo */}
        <div className="mb-8">
          <div className="w-18 h-20 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${Logo})` }} />
        </div>

        {/* Main Form Container */}
        <div className="bg-zinc-900 rounded-lg p-8 md:p-12">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-8">
            $20 SURVIVAL GAME CONTESTANT CONSENT AND RELEASE FORM
          </h1>

          {/* Event Details */}
          <div className="mb-8 space-y-2 text-sm">
            <p><span className="font-semibold">Event Name:</span> $20 Survival Game Show</p>
            <p><span className="font-semibold">Produced By:</span> Nnenna Eloka</p>
            <p><span className="font-semibold">Location:</span> Worldwide</p>
            <p><span className="font-semibold">Date:</span></p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.number}>
                <h2 className="text-yellow-500 font-semibold mb-3">
                  {section.number}. {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-300 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Signature Section */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm mb-2">
                Participant Name: 
                <input
                  type="text"
                  name="participantName"
                  value={formData.participantName}
                  onChange={handleInputChange}
                  className="ml-2 bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none px-1"
                  placeholder="___________"
                />
              </label>
            </div>
            <div>
              <label className="block text-sm mb-2">
                Signature: 
                <input
                  type="text"
                  name="signature"
                  value={formData.signature}
                  onChange={handleInputChange}
                  className="ml-2 bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none px-1"
                  placeholder="___________"
                />
              </label>
            </div>
            <div>
              <label className="block text-sm mb-2">
                Date: 
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="ml-2 bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none px-1"
                  placeholder="___________"
                />
              </label>
            </div>

            {/* Submit Button */}
            <button
              // type="submit"
              className="mt-6 bg-yellow-500 text-black font-bold px-8 py-3 rounded hover:bg-yellow-400 transition-colors"
              onClick={goToGame}
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        {/* <div className="mt-12 text-center">
          <Footer/>
         
        </div> */}
      </div>
      <Footer/>
    </div>
  );
}