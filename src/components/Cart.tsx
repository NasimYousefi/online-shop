import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert('Thank you for your order!');
      clearCart();
      setIsCheckingOut(false);
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto text-center py-16">
        <h2 className="text-2xl text-custom-purple mb-6">Your Cart is Empty</h2>
        <Link 
          to="/" 
          className="bg-custom-purple text-white py-2 px-6 rounded hover:bg-custom-dark-blue"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-custom-purple mb-6">Your Cart</h2>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-custom-purple-200 text-custom-dark-blue">
            <tr>
              <th className="py-3 px-4 text-left">Product</th>
              <th className="py-3 px-4 text-center">Price</th>
              <th className="py-3 px-4 text-center">Quantity</th>
              <th className="py-3 px-4 text-right">Total</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id} className="border-b">
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-16 h-16 object-contain mr-4"
                    />
                    <span className="font-medium">{item.title}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">${item.price.toFixed(2)}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 p-1 rounded"
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 p-1 rounded"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>
                </td>
                <td className="py-4 px-4 text-right font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="py-4 px-4 text-center">
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-between items-start">
        <Link 
          to="/" 
          className="bg-gray-200 text-gray-800 py-2 px-6 rounded hover:bg-gray-300 mb-4 md:mb-0"
        >
          Continue Shopping
        </Link>
        
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-80">
          <h3 className="text-lg font-bold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="border-t pt-2 mt-2 flex justify-between font-bold">
            <span>Total:</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <button 
            onClick={handleCheckout}
            disabled={isCheckingOut}
            className={`w-full mt-4 py-2 rounded text-white ${
              isCheckingOut ? 'bg-gray-400' : 'bg-custom-purple hover:bg-custom-dark-blue'
            }`}
          >
            {isCheckingOut ? 'Processing...' : 'Checkout'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;