// CartSummary.jsx
import React, { useState } from 'react';

const CartSummary = ({ 
  items = [], 
  totalSpent = 0, 
  budget = 20,
  onRemoveItem,
  isEditable = false 
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const remainingBudget = budget - totalSpent;

  // Calculate item counts by category
  const categoryCounts = items.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  // Calculate total items and average price
  const totalItems = items.length;
  const averagePrice = totalItems > 0 ? (totalSpent / totalItems).toFixed(2) : 0;

  // Calculate budget utilization
  const budgetUsed = (totalSpent / budget) * 100;

  // Sort items by price (highest first)
  const sortedItems = [...items].sort((a, b) => b.price - a.price);

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl border-2 border-blue-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🛒</div>
            <div>
              <h2 className="text-xl font-bold">Shopping Cart</h2>
              <p className="text-blue-100 text-sm">Your purchased items</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">${totalSpent.toFixed(2)}</div>
            <div className="text-blue-100 text-sm">{totalItems} items</div>
          </div>
        </div>
      </div>

      {/* Cart Stats */}
      <div className="p-5 border-b border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-3 rounded-xl shadow-sm text-center">
            <div className="text-2xl text-green-600">${remainingBudget.toFixed(2)}</div>
            <div className="text-xs text-gray-600 mt-1">Money Left</div>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-sm text-center">
            <div className="text-2xl text-blue-600">{totalItems}</div>
            <div className="text-xs text-gray-600 mt-1">Total Items</div>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-sm text-center">
            <div className="text-2xl text-purple-600">${averagePrice}</div>
            <div className="text-xs text-gray-600 mt-1">Avg. Price</div>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-sm text-center">
            <div className="text-2xl text-orange-600">{Object.keys(categoryCounts).length}</div>
            <div className="text-xs text-gray-600 mt-1">Categories</div>
          </div>
        </div>
      </div>

      {/* Budget Progress Bar */}
      <div className="px-5 pt-5">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Budget Used: ${totalSpent.toFixed(2)} / ${budget.toFixed(2)}</span>
          <span>{budgetUsed.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className={`h-3 rounded-full transition-all duration-500 ${
              budgetUsed < 50 ? 'bg-green-500' : 
              budgetUsed < 80 ? 'bg-yellow-500' : 
              'bg-red-500'
            }`}
            style={{ width: `${Math.min(budgetUsed, 100)}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          {budgetUsed < 50 ? '💰 Spending wisely!' : 
           budgetUsed < 80 ? '⚠️ Budget getting tight' : 
           budgetUsed >= 100 ? '🎯 Budget fully used!' : 
           '🚨 Almost out of money!'}
        </div>
      </div>

      {/* Items List */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800 flex items-center gap-2">
            <span>📦</span>
            Items in Cart
          </h3>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
            <span className="text-lg">{showDetails ? '▲' : '▼'}</span>
          </button>
        </div>

        {totalItems === 0 ? (
          // Empty Cart State
          <div className="text-center py-10">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="text-xl font-bold text-gray-600 mb-2">Your cart is empty!</h3>
            <p className="text-gray-500">Click on items above to start shopping</p>
          </div>
        ) : (
          <>
            {/* Categories Overview */}
            <div className="mb-6">
              <div className="text-sm text-gray-600 mb-3">Shopping by category:</div>
              <div className="flex flex-wrap gap-2">
                {Object.entries(categoryCounts).map(([category, count]) => (
                  <div 
                    key={category} 
                    className="bg-white border border-gray-200 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm"
                  >
                    <span className="text-lg">
                      {category === 'food' ? '🍽️' : 
                       category === 'drink' ? '🥤' : 
                       category === 'tech' ? '💻' : 
                       category === 'snack' ? '🍬' : 
                       category === 'fun' ? '🎮' : '📦'}
                    </span>
                    <span className="font-medium">{category}</span>
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                      {count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {sortedItems.map((item, index) => (
                <div 
                  key={`${item.id}-${index}`} 
                  className="relative group"
                  title={`${item.name} - $${item.price}`}
                >
                  <div className="bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                    {/* Item Emoji */}
                    <div className="text-3xl text-center mb-2">{item.emoji}</div>
                    
                    {/* Item Details */}
                    {showDetails && (
                      <div className="text-center">
                        <div className="font-medium text-sm truncate">{item.name}</div>
                        <div className="text-xs text-gray-500 mt-1">${item.price.toFixed(2)}</div>
                      </div>
                    )}
                    
                    {/* Price Badge */}
                    <div className={`text-xs font-bold px-2 py-1 rounded-full text-center mt-2 ${
                      item.price < 3 ? 'bg-green-100 text-green-800' :
                      item.price < 7 ? 'bg-yellow-100 text-yellow-800' :
                      item.price < 12 ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                  
                  {/* Remove Button (if editable) */}
                  {isEditable && (
                    <button
                      onClick={() => onRemoveItem && onRemoveItem(item.id)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-600 shadow-lg"
                      title="Remove item"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Price Summary Table (Show/Hide) */}
            {showDetails && (
              <div className="mt-6 border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-3 text-sm font-medium text-gray-700">Item</th>
                      <th className="text-left p-3 text-sm font-medium text-gray-700">Price</th>
                      <th className="text-left p-3 text-sm font-medium text-gray-700">Category</th>
                      {isEditable && (
                        <th className="text-left p-3 text-sm font-medium text-gray-700">Actions</th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sortedItems.map((item, index) => (
                      <tr key={index} className="border-t border-gray-100 hover:bg-blue-50">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{item.emoji}</span>
                            <span className="font-medium">{item.name}</span>
                          </div>
                        </td>
                        <td className="p-3 font-bold">${item.price.toFixed(2)}</td>
                        <td className="p-3">
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {item.category}
                          </span>
                        </td>
                        {isEditable && (
                          <td className="p-3">
                            <button
                              onClick={() => onRemoveItem && onRemoveItem(item.id)}
                              className="text-red-600 hover:text-red-800 text-sm font-medium"
                            >
                              Remove
                            </button>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-50 font-bold">
                    <tr>
                      <td className="p-3">Total</td>
                      <td className="p-3 text-green-600">${totalSpent.toFixed(2)}</td>
                      <td className="p-3">{totalItems} items</td>
                      {isEditable && <td className="p-3"></td>}
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}

            {/* Shopping Insights */}
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span>💡</span>
                Shopping Insights
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-lg">💰</span>
                  <span>
                    <span className="font-medium">Most expensive:</span>{' '}
                    {sortedItems[0]?.name} (${sortedItems[0]?.price})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📊</span>
                  <span>
                    <span className="font-medium">Budget used:</span>{' '}
                    {budgetUsed.toFixed(1)}%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚖️</span>
                  <span>
                    <span className="font-medium">Best value:</span>{' '}
                    {items.reduce((lowest, item) => 
                      item.price < lowest.price ? item : lowest
                    ).name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎯</span>
                  <span>
                    <span className="font-medium">Could still buy:</span>{' '}
                    {Math.floor(remainingBudget / (averagePrice || 1))} more items
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Action Buttons */}
      <div className="p-5 border-t border-gray-200 bg-gray-50">
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              // This would be handled by parent
              console.log('Export cart data');
            }}
            className="flex-1 bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 py-3 rounded-xl font-medium transition flex items-center justify-center gap-2"
          >
            <span>📤</span>
            Export Cart Data
          </button>
          <button
            onClick={() => {
              // This would be handled by parent
              console.log('Share cart');
            }}
            className="flex-1 bg-blue-500 text-white hover:bg-blue-600 py-3 rounded-xl font-medium transition flex items-center justify-center gap-2"
          >
            <span>📱</span>
            Share My Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Default props
CartSummary.defaultProps = {
  items: [],
  totalSpent: 0,
  budget: 20,
  isEditable: false,
  onRemoveItem: null
};

export default CartSummary;