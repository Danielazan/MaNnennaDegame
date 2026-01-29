import { useState,useEffect } from 'react'
import SignUp from "../SignUp"  // Fixed import path consistency
import AdminDashboard from './AdminDashboard';
import ShoppingGame from "./ShoppingGame"
import { useNavigate,useLocation } from 'react-router-dom';

function GamePage() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null);
  const [isAdminMode, setIsAdminMode] = useState(false);


   useEffect(() => {
    const userFromState = location.state?.user;
    if (userFromState) {
      setUser(userFromState);
      if (userFromState.role === 'admin') {
        setIsAdminMode(true);
      }
    }
  }, [location.state]);

  const handleLogin = (userData) => {
    setUser(userData);
    if (userData.role === 'admin') {
      setIsAdminMode(true);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsAdminMode(false);
  };

  if (!user && !location.state?.user) {
    return <SignUp onLogin={handleLogin} isAdminLogin={isAdminMode} />;
  }

  // Show loading if we have state but haven't set it yet
  if (!user) {
    return <div>Loading game...</div>;
  }

  return (
    <div>
      {/* Top Navigation Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛒</span>
            <div>
              <h1 className="font-bold">Shopping Spree Game</h1>
              <p className="text-sm opacity-90">
                Welcome, {user?.name || 'Player'}! 
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  user.role === 'admin' 
                    ? 'bg-yellow-500 text-black' 
                    : 'bg-white text-blue-600'
                }`}>
                  {user.role === 'admin' ? '⭐ Admin' : '🎮 Player'}
                </span>
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Show different content based on user role */}
      {user.role === 'admin' ? (
        <AdminDashboard 
          user={user} 
          onResetGame={() => {/* reset function */}}
        />
      ) : (
        <ShoppingGame user={user} />
      )}
    </div>
  );
}

export default GamePage;
