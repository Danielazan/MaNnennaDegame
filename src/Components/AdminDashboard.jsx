// AdminDashboard.jsx
import React, { useState } from 'react';
import ShoppingGame from './ShoppingGame'; // Assuming you have ShoppingGame

const AdminDashboard = ({ user, onResetGame }) => {
  const [gameItems, setGameItems] = useState([
    { id: 1, name: 'Burger', price: 5, emoji: '🍔' },
    { id: 2, name: 'Soft Drink', price: 2, emoji: '🥤' },
    { id: 3, name: 'Headphones', price: 10, emoji: '🎧' },
    { id: 4, name: 'Chocolate', price: 1, emoji: '🍫' },
    { id: 5, name: 'Pizza', price: 8, emoji: '🍕' },
    { id: 6, name: 'Ice Cream', price: 3, emoji: '🍦' },
  ]);
  const [showGame, setShowGame] = useState(false);

  const handleAddItem = () => {
    const newItem = {
      id: gameItems.length + 1,
      name: 'New Item',
      price: 1,
      emoji: '🛍️'
    };
    setGameItems([...gameItems, newItem]);
  };

  const handlePriceChange = (id, newPrice) => {
    setGameItems(items => 
      items.map(item => 
        item.id === id ? { ...item, price: Number(newPrice) } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-6 mb-8 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">🎮 Admin Control Panel</h1>
            <p className="text-purple-100 mt-2">Welcome, {user.name}!</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button
              onClick={() => setShowGame(!showGame)}
              className="bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition flex items-center gap-2"
            >
              {showGame ? '← Back to Admin' : '🎮 Preview Game'}
            </button>
            <button
              onClick={onResetGame}
              className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition flex items-center gap-2"
            >
              🔄 Reset All Games
            </button>
          </div>
        </div>
      </div>

      {showGame ? (
        // Game Preview Mode
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Game Preview</h2>
          <ShoppingGame 
            items={gameItems}
            isPreview={true}
          />
        </div>
      ) : (
        // Admin Controls
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Game Items Manager */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                🛒 Manage Game Items
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {gameItems.map(item => (
                  <div key={item.id} className="border-2 border-gray-200 rounded-xl p-4 hover:border-purple-300 transition">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-4xl">{item.emoji}</span>
                      <button className="text-red-500 hover:text-red-700 text-xl">
                        🗑️
                      </button>
                    </div>
                    <input
                      type="text"
                      value={item.name}
                      className="w-full font-bold text-lg mb-2 p-2 border rounded"
                      onChange={(e) => setGameItems(items => 
                        items.map(i => i.id === item.id ? { ...i, name: e.target.value } : i)
                      )}
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Price:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">$</span>
                        <input
                          type="number"
                          min="0.5"
                          max="20"
                          step="0.5"
                          value={item.price}
                          onChange={(e) => handlePriceChange(item.id, e.target.value)}
                          className="w-20 p-2 border rounded text-right font-bold text-lg"
                        />
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-500">
                      Takes ${item.price} from $20 budget
                    </div>
                  </div>
                ))}
                
                {/* Add New Item Card */}
                <button
                  onClick={handleAddItem}
                  className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center hover:border-purple-400 hover:bg-purple-50 transition"
                >
                  <span className="text-4xl mb-2">➕</span>
                  <span className="text-gray-700 font-medium">Add New Item</span>
                  <span className="text-gray-500 text-sm">Click to add</span>
                </button>
              </div>
            </div>

            {/* Game Settings */}
            <div className="space-y-8">
              {/* Budget Settings */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">💰 Budget Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Starting Balance</label>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">$</span>
                      <input
                        type="number"
                        min="5"
                        max="100"
                        defaultValue="20"
                        className="w-full p-3 border-2 border-gray-300 rounded-xl text-2xl font-bold text-center"
                      />
                    </div>
                  </div>
                  <button className="w-full bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition">
                    💾 Save Settings
                  </button>
                </div>
              </div>

              {/* Player Stats */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">📊 Player Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span>Total Players</span>
                    <span className="font-bold text-blue-600">0</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span>Games Played</span>
                    <span className="font-bold text-green-600">0</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span>Most Popular Item</span>
                    <span className="font-bold text-purple-600">🍔</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">⚡ Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-100 text-blue-700 p-3 rounded-xl hover:bg-blue-200 transition flex items-center justify-between">
                    <span>Export Player Data</span>
                    <span>📥</span>
                  </button>
                  <button className="w-full bg-yellow-100 text-yellow-700 p-3 rounded-xl hover:bg-yellow-200 transition flex items-center justify-between">
                    <span>Reset Current Game</span>
                    <span>🔄</span>
                  </button>
                  <button className="w-full bg-red-100 text-red-700 p-3 rounded-xl hover:bg-red-200 transition flex items-center justify-between">
                    <span>Clear All Data</span>
                    <span>⚠️</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Admin Footer */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>🔒 Admin Mode Active • Session expires in 60 minutes</p>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;