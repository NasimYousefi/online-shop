import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useCart } from '../contexts/CartContext';
import Logo from './Logo';

interface NavbarProps {
  userName: string;
}

const Navbar: React.FC<NavbarProps> = ({ userName }) => {
  const { getTotalItems } = useCart();

  return (
    
    <header className="bg-custom-purple-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {userName && (
            <div className="flex items-center space-x-2">
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`} 
                alt="User Avatar" 
                className="w-10 h-10 rounded-full"
              />
              <span className="text-custom-dark-blue text-lg">Hi, {userName}</span>
            </div>
          )}
        </div>

        <div className="text-center flex-1 flex justify-center">
          <Link to="/" className="text-2xl font-bold text-custom-dark-blue">
            {/* Online Shop */}
            <Logo/>
          </Link>
        </div>
        
        <div className="cart-container flex items-center">
          <span className="cart-label mr-2 text-custom-dark-blue">Cart</span>
          <Link to="/cart" className="cart-count bg-custom-purple text-white rounded-full px-3 py-1 hover:bg-custom-dark-blue">
            {getTotalItems()}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;