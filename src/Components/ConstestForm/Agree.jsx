import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';  
import Footer from '../LandingPage/Footer';
import Logo from "../../assets/Logo.png"

export default function Agree() {
  const navigate = useNavigate();
  const location = useLocation();  // Get current state

  const user = location.state?.user; // Get user from navigation
  const userName = user?.name || ''; // Name from navigation
  const userEmail = user?.email || ''; // Email from navigation
  const userInitials = userName ? userName.trim().split(' ').map(n => n[0]).join('').toUpperCase() : ''; // Initials from name

  const [formData, setFormData] = useState({
    participantName: userName,
    signature: userInitials,
    date: ''
  });

  // Set current date in DD-MM/YY format
  useEffect(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);
    const currentDate = `${day}-${month}/${year}`;
    
    setFormData(prev => ({
      ...prev,
      date: currentDate
    }));
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare nicely designed email body
    const emailSubject = `Consent Form - ${userName} (${formData.date})`;
    const emailBody = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background: #f4f4f4; }
        .header { background: linear-gradient(135deg, #FFD700, #FFA500); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0; }
        .info-item { background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #FFD700; }
        .info-label { font-weight: bold; color: #666; }
        .info-value { font-size: 18px; color: #333; margin-top: 5px; }
        .signature-section { margin-top: 30px; padding-top: 30px; border-top: 2px solid #eee; }
        .signature { font-size: 24px; font-weight: bold; color: #FFD700; font-family: 'Brush Script MT', cursive; }
        .date { font-style: italic; color: #666; margin-top: 10px; }
        .footer { text-align: center; margin-top: 30px; color: #888; font-size: 14px; }
    </style>
</head>
<body>
    <div class="header">
        <h1 style="margin: 0; font-size: 28px;">$20 Survival Game Show</h1>
        <p style="margin: 5px 0 0 0; font-size: 18px;">Contestant Consent & Release Form</p>
    </div>
    
    <div class="content">
        <div class="info-grid">
            <div class="info-item">
                <div class="info-label">Participant Name:</div>
                <div class="info-value">${userName}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Email:</div>
                <div class="info-value">${userEmail}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Signature:</div>
                <div class="info-value">${formData.signature}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Date Signed:</div>
                <div class="info-value">${formData.date}</div>
            </div>
        </div>
        
        <div class="signature-section">
            <div class="signature">${formData.signature}</div>
            <div class="date">Date: ${formData.date}</div>
        </div>
        
        <div style="margin-top: 30px; padding: 20px; background: #e8f5e8; border-radius: 8px; border-left: 4px solid #28a745;">
            <strong>✅ Form Status:</strong> Successfully Signed and Submitted
        </div>
    </div>
    
    <div class="footer">
        <p>This is an automated consent form submission from the $20 Survival Game Show.</p>
        <p>Produced by Nnenna Eloka | Worldwide Event</p>
    </div>
</body>
</html>
    `.trim();

    // Send email to nnennaeloka.com
    const mailtoUrl = `mailto:danfrancix@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    
    console.log('Consent form submitted:', formData);
    console.log('Email prepared with details:', { userEmail, userName, signature: formData.signature, date: formData.date });
    
    // Navigate to game after short delay to allow email client to open
    setTimeout(() => {
      goToGame();
    }, 1000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const goToGame = () => {
    if (user) {
      navigate('/game', { state: { user } });
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
            <p><span className="font-semibold">Date:</span> <span className="text-yellow-500">{formData.date}</span></p>
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
                  className="ml-2 bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none px-1 text-white"
                  placeholder="___________"
                  readOnly // Make name read-only since it comes from navigation
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
                  className="ml-2 bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none px-1 text-yellow-500 font-bold"
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
                  className="ml-2 bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none px-1 text-yellow-500 font-semibold"
                  readOnly // Date is auto-filled
                />
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 bg-yellow-500 text-black font-bold px-8 py-3 rounded hover:bg-yellow-400 transition-colors w-full"
            >
              SUBMIT & SIGN
            </button>
          </form>
        </div>

        <Footer/>
      </div>
    </div>
  );
}
