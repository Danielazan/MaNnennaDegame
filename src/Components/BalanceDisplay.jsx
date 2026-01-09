
import React from 'react';


const BalanceDisplay = ({ balance, totalSpent = 0 }) => {
  // Check if money is getting low (less than $5)
  const isLowBalance = balance < 5;
  // Check if completely out of money
  const isOutOfMoney = balance === 0;

  return (
    <div className="bg-blue-50 p-6 rounded-xl shadow-md border-2 border-blue-200">
      {/* Title */}
      <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
        <span className="text-3xl">💰</span>
        Your Shopping Money
      </h2>
      
      {/* Main Balance Display */}
      <div className={`p-5 rounded-lg text-center transition-all duration-300 ${
        isOutOfMoney 
          ? 'bg-red-100 border-2 border-red-300' 
          : isLowBalance 
            ? 'bg-yellow-100 border-2 border-yellow-300' 
            : 'bg-green-100 border-2 border-green-300'
      }`}>
        <p className="text-lg font-semibold text-gray-700 mb-1">
          Remaining Balance:
        </p>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl font-bold text-gray-900">
            ${balance.toFixed(2)}
          </span>
          <span className="text-gray-600 text-sm">CAD</span>
        </div>
        
        {/* Money Status Message */}
        {isOutOfMoney ? (
          <p className="mt-3 text-red-600 font-bold animate-pulse">
            ⚠️ Out of money! Shopping time is over!
          </p>
        ) : isLowBalance ? (
          <p className="mt-3 text-yellow-700 font-medium">
            💡 Money is getting low! Choose carefully!
          </p>
        ) : (
          <p className="mt-3 text-green-700 font-medium">
            ✅ Plenty of money to shop!
          </p>
        )}
      </div>

      {/* Progress Bar (Optional but fun!) */}
      <div className="mt-6">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Spent: ${totalSpent.toFixed(2)}</span>
          <span>Total: $20.00</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className="bg-blue-600 h-4 rounded-full transition-all duration-500"
            style={{ width: `${(totalSpent / 20) * 100}%` }}
          ></div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-1">
          {Math.round((totalSpent / 20) * 100)}% of budget used
        </p>
      </div>

      {/* Money Faces (Fun visual indicator) */}
      <div className="flex justify-center mt-4 gap-6">
        <div className="text-center">
          <div className="text-3xl">
            {balance >= 15 ? '😃' : balance >= 10 ? '🙂' : balance >= 5 ? '😐' : '😟'}
          </div>
          <p className="text-xs text-gray-500 mt-1">Money Mood</p>
        </div>
        <div className="text-center">
          <div className="text-3xl">
            {balance >= 15 ? '💵' : balance >= 10 ? '💰' : balance >= 5 ? '💸' : '💳'}
          </div>
          <p className="text-xs text-gray-500 mt-1">Wallet Status</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceDisplay;