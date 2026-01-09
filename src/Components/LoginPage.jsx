// LoginPage.jsx
import React, { useState } from 'react';

const LoginPage = ({ onLogin, isAdminLogin = false }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // List of admin emails (in real app, this would come from backend)
  const adminEmails = ['admin@shoppinggame.com', 'youtube@channel.com', 'host@game.com'];
  
  // Check if email belongs to admin
  const isAdminUser = adminEmails.includes(email.toLowerCase());

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Basic email validation
    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    // If this is admin login page OR user has admin email, require password
    if (isAdminLogin || isAdminUser) {
      if (!password) {
        setError('Admin login requires password');
        setIsLoading(false);
        return;
      }

      // Simulate admin password check (in real app, this would be API call)
      setTimeout(() => {
        const correctPassword = 'admin123'; // Default admin password
        
        if (password !== correctPassword) {
          setError('Invalid admin password');
          setIsLoading(false);
          return;
        }

        // Admin login successful
        onLogin({
          email,
          role: 'admin',
          name: email.split('@')[0], // Use part before @ as name
          permissions: ['view_all', 'reset_game', 'edit_items']
        });
        setIsLoading(false);
      }, 1000);
    } else {
      // Regular user login - just email needed
      setTimeout(() => {
        onLogin({
          email,
          role: 'player',
          name: email.split('@')[0] || 'Player',
          permissions: ['play_game']
        });
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        {/* Logo/Title */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🛒🎮</div>
          <h1 className="text-3xl font-bold text-gray-800">
            Shopping Spree Game
          </h1>
          <p className="text-gray-600 mt-2">
            {isAdminLogin ? 'Admin Portal' : 'Join the Shopping Game!'}
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">📧</span>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              />
            </div>
            {isAdminUser && email && (
              <p className="text-sm text-purple-600 mt-2 flex items-center gap-1">
                ⭐ Admin account detected
              </p>
            )}
          </div>

          {/* Password Field - Only show for admin login or admin emails */}
          {(isAdminLogin || isAdminUser) && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
                <span className="text-red-500">*</span>
                <span className="text-xs text-gray-500 ml-2">(Admins only)</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">🔒</span>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required={isAdminLogin || isAdminUser}
                />
              </div>
            </div>
          )}

          {/* Info Box */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <div className="text-blue-500 text-xl">ℹ️</div>
              <div>
                <p className="text-sm text-blue-800">
                  {isAdminLogin 
                    ? 'Admin login requires email + password'
                    : 'Players: Just enter email! Admin accounts need password.'}
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  Demo admin: admin@shoppinggame.com / admin123
                </p>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg border border-red-200 flex items-center gap-2">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-xl font-bold text-white transition-all ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Logging in...
              </span>
            ) : (
              `Enter ${isAdminLogin ? 'Admin Portal' : 'Game'}`
            )}
          </button>

          {/* Switch Login Type */}
          <div className="text-center pt-4 border-t">
            <p className="text-gray-600 text-sm">
              {isAdminLogin ? (
                <>
                  Here to play?{' '}
                  <button
                    type="button"
                    onClick={() => onLogin({ role: 'player', name: 'Guest Player' })}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Enter as player
                  </button>
                </>
              ) : (
                <>
                  Game host?{' '}
                  <button
                    type="button"
                    onClick={() => onLogin({ role: 'admin', name: 'Admin', email: 'admin@shoppinggame.com' })}
                    className="text-purple-600 hover:underline font-medium"
                  >
                    Admin login
                  </button>
                </>
              )}
            </p>
          </div>
        </form>

        {/* Demo Credentials */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-700 font-medium mb-2">For Testing:</p>
          <div className="grid grid-cols-1 gap-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-600">Player (any email):</span>
              <code className="bg-gray-200 px-2 py-1 rounded">player@test.com</code>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Admin:</span>
              <code className="bg-gray-200 px-2 py-1 rounded">admin@shoppinggame.com</code>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Admin Password:</span>
              <code className="bg-gray-200 px-2 py-1 rounded">admin123</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;