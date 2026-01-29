// ItemCard.jsx
import React, { useState } from 'react';

const ItemCard = ({ 
  item, 
  onBuy, 
  balance, 
  isPurchased = false,
  isOutOfStock = false 
}) => {
  const { id, name, price, emoji = '🛍️', category = 'Misc' } = item;
  const canAfford = balance >= price && !isOutOfStock;
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Color themes based on price range
  const getPriceTheme = () => {
    if (price < 3) return 'bg-green-50 border-green-200 text-green-800';
    if (price < 7) return 'bg-yellow-50 border-yellow-200 text-yellow-800';
    if (price < 12) return 'bg-orange-50 border-orange-200 text-orange-800';
    return 'bg-red-50 border-red-200 text-red-800';
  };

  // Category emojis
  const categoryEmojis = {
    food: '🍽️',
    drink: '🥤',
    tech: '💻',
    snack: '🍬',
    fun: '🎮',
    Misc: '📦'
  };

  const handleClick = () => {
    if (canAfford && !isPurchased) {
      setIsClicked(true);
      onBuy(item);
      // Reset click animation after 300ms
      setTimeout(() => setIsClicked(false), 300);
    }
  };

  return (
    <div 
      className={`relative transition-all duration-300 transform ${
        isClicked ? 'scale-95' : isHovered ? 'scale-105' : 'scale-100'
      } ${isPurchased ? 'opacity-60' : 'opacity-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Item Card */}
      <div className={`
        relative overflow-hidden rounded-2xl border-2 p-5 shadow-lg
        ${isPurchased 
          ? 'bg-gray-100 border-gray-300 cursor-not-allowed' 
          : canAfford 
            ? 'bg-white border-blue-300 cursor-pointer hover:shadow-xl hover:border-blue-400' 
            : 'bg-gray-50 border-gray-300 cursor-not-allowed opacity-80'
        }
        transition-all duration-300
      `}>
        
        {/* Corner Category Badge */}
        <div className="absolute top-2 right-2">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex items-center gap-1">
            {categoryEmojis[category] || '📦'}
            <span className="hidden sm:inline">{category}</span>
          </span>
        </div>

        {/* Item Emoji */}
        <div className="text-center mb-4">
          <div className={`
            inline-flex items-center justify-center w-20 h-20 rounded-2xl text-4xl
            ${isPurchased 
              ? 'bg-gray-200' 
              : canAfford 
                ? 'bg-gradient-to-br from-blue-100 to-purple-100' 
                : 'bg-gray-200'
            }
            transition-all duration-300
          `}>
            {emoji}
          </div>
        </div>

        {/* Item Name */}
        <h3 className={`text-xl font-bold text-center mb-2 ${
          isPurchased ? 'text-gray-500 line-through' : 'text-gray-800'
        }`}>
          {name}
        </h3>

        {/* Price Tag */}
        <div className={`
          mb-4 px-4 py-2 rounded-xl text-center font-bold text-lg border-2
          ${getPriceTheme()}
          ${isPurchased ? 'opacity-50' : ''}
        `}>
          ${price.toFixed(2)}
          <div className="text-xs font-normal mt-1">
            {price < 5 ? 'Cheap!' : price < 10 ? 'Good deal' : 'Splurge!'}
          </div>
        </div>

        {/* Buy Button */}
        <button
          onClick={handleClick}
          disabled={!canAfford || isPurchased}
          className={`
            w-full py-3 rounded-xl font-bold text-lg transition-all duration-300
            ${isPurchased 
              ? 'bg-green-500 text-white cursor-default' 
              : canAfford 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 active:scale-95' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
            flex items-center justify-center gap-2
          `}
        >
          {isPurchased ? (
            <>
              <span>✅</span>
              Purchased!
            </>
          ) : canAfford ? (
            <>
              <span>🛒</span>
              BUY NOW
              <span className="text-sm opacity-90">
                (-${price.toFixed(2)})
              </span>
            </>
          ) : (
            <>
              <span>🔒</span>
              Need ${(price - balance).toFixed(2)} more
            </>
          )}
        </button>

        {/* Money Impact Indicator */}
        {!isPurchased && canAfford && (
          <div className="mt-3 text-center">
            <div className="inline-flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              <span className="mr-1">💰</span>
              {((price / 20) * 100).toFixed(0)}% of your budget
            </div>
            <div className="mt-1 text-xs text-gray-500">
              You'll have ${(balance - price).toFixed(2)} left
            </div>
          </div>
        )}

        {/* Visual Feedback Rings */}
        {isClicked && (
          <div className="absolute inset-0 rounded-2xl border-4 border-green-400 animate-ping opacity-30 pointer-events-none"></div>
        )}

        {/* Sold Out Overlay */}
        {isOutOfStock && !isPurchased && (
          <div className="absolute inset-0 bg-red-100 bg-opacity-90 rounded-2xl flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-3xl mb-2">⛔</div>
              <div className="font-bold text-red-700">OUT OF STOCK</div>
              <div className="text-sm text-red-600">Already purchased</div>
            </div>
          </div>
        )}
      </div>

      {/* Affordability Indicator Bar */}
      {!isPurchased && (
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-500 ${
              canAfford ? 'bg-green-500' : 'bg-red-500'
            }`}
            style={{ width: `${Math.min((price / 20) * 100, 100)}%` }}
          ></div>
        </div>
      )}

      {/* Price Comparison Helper */}
      {!isPurchased && (
        <div className="mt-2 text-xs text-gray-500 text-center">
          {price === 20 ? "Exactly your budget!" : 
           price > 20 ? "Can't afford this alone!" : 
           price > 10 ? "Big purchase!" : 
           price > 5 ? "Medium price" : "Small price"}
        </div>
      )}
    </div>
  );
};

// Default props in case some are missing
ItemCard.defaultProps = {
  item: {
    id: 1,
    name: 'Unknown Item',
    price: 0,
    emoji: '❓',
    category: 'Misc'
  },
  onBuy: () => {},
  balance: 0,
  isPurchased: false,
  isOutOfStock: false
};

export default ItemCard;