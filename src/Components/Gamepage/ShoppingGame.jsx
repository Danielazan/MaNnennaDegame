// ShoppingGame.jsx - Example usage
import React, { useState } from 'react';
import ItemCard from './ItemCard';
import BalanceDisplay from './BalanceDisplay';
import CartSummary from './CartSummary';

const ShoppingGame = ({ user }) => {
  const [balance, setBalance] = useState(20.00);
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);
  const budget = 20;

  // Example items array
  const [items, setItems] = useState([
    { id: 1, name: 'Burger', price: 5, emoji: '🍔', category: 'food' },
    { id: 2, name: 'Soft Drink', price: 2, emoji: '🥤', category: 'drink' },
    { id: 3, name: 'Headphones', price: 10, emoji: '🎧', category: 'tech' },
    { id: 4, name: 'Chocolate', price: 1, emoji: '🍫', category: 'snack' },
    { id: 5, name: 'Pizza Slice', price: 3.50, emoji: '🍕', category: 'food' },
    { id: 6, name: 'Video Game', price: 15, emoji: '🎮', category: 'fun' },
  ]);

  const handleBuyItem = (item) => {
    if (balance >= item.price) {
      // Deduct from balance
      const newBalance = balance - item.price;
      setBalance(newBalance);
      
      // Add to purchased items
      setPurchasedItems([...purchasedItems, item]);
      
      // Update total spent
      const newTotalSpent = totalSpent + item.price;
      setTotalSpent(newTotalSpent);
      
      // Optional: Play sound or show animation
      console.log(`Bought ${item.name} for $${item.price}`);
    }
  };

  const isItemPurchased = (itemId) => {
    return purchasedItems.some(item => item.id === itemId);
  };

  // Function to remove item from cart
  const handleRemoveItem = (itemId) => {
    const itemToRemove = purchasedItems.find(item => item.id === itemId);
    if (itemToRemove) {
      // Remove from cart
      const updatedItems = purchasedItems.filter(item => item.id !== itemId);
      setPurchasedItems(updatedItems);
      
      // Refund money
      setTotalSpent(prev => prev - itemToRemove.price);
    }
  };

  // Function to clear cart
  const handleClearCart = () => {
    setPurchasedItems([]);
    setTotalSpent(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 p-4 md:p-8">
      {/* Top Bar */}
      <div className="max-w-6xl mx-auto">
        <BalanceDisplay balance={balance} totalSpent={totalSpent} />
        
        {/* Player Info */}
        <div className="bg-white rounded-xl shadow-md p-4 mt-4 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Shopping Spree!</h2>
              <p className="text-gray-600">Welcome, {user?.name}! Click items to buy them.</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Items Bought</div>
              <div className="text-2xl font-bold text-blue-600">{purchasedItems.length}</div>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>🛍️</span>
            Available Items
            <span className="text-sm text-gray-500 font-normal ml-2">
              ({items.length} items to choose from)
            </span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map(item => (
              <ItemCard
                key={item.id}
                item={item}
                balance={balance}
                onBuy={handleBuyItem}
                isPurchased={isItemPurchased(item.id)}
                isOutOfStock={isItemPurchased(item.id)}
              />
            ))}
          </div>
        </div>

        {/* Cart Summary Section */}
      <div className="mt-8">
        <CartSummary
          items={purchasedItems}
          totalSpent={totalSpent}
          budget={budget}
          isEditable={true} // Set to false if you don't want remove option
          onRemoveItem={handleRemoveItem}
        />
        
        {/* Optional: Clear Cart Button */}
        {purchasedItems.length > 0 && (
          <div className="text-center mt-4">
            <button
              onClick={handleClearCart}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:from-red-600 hover:to-orange-600 transition shadow-md flex items-center gap-2 mx-auto"
            >
              <span>🗑️</span>
              Clear Entire Cart & Get Refund
            </button>
          </div>
        )}
      </div>

        {/* Reset Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => {
              setBalance(20.00);
              setPurchasedItems([]);
              setTotalSpent(0);
            }}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:from-red-600 hover:to-orange-600 transition shadow-lg"
          >
            🔄 Reset Game & Start Over
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingGame;