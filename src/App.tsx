import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import UserNameModal from './components/UserNameModal';
import { UserService } from './services/api';
import { User } from './types';

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [showNameModal, setShowNameModal] = useState<boolean>(true);
  const [, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for saved username
    const savedUserName = localStorage.getItem('userName');
    if (savedUserName) {
      setUserName(savedUserName);
      setShowNameModal(false);
    }

    // Fetch user data (id=1 as per requirements)
    const fetchUser = async () => {
      try {
        const userData = await UserService.getUserById(1);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  const handleUserNameSubmit = (name: string) => {
    setUserName(name);
    setShowNameModal(false);
    localStorage.setItem('userName', name);
    document.body.classList.remove('locked');
  };

  // Add locked class to body when modal is shown
  useEffect(() => {
    if (showNameModal) {
      document.body.classList.add('locked');
    } else {
      document.body.classList.remove('locked');
    }
  }, [showNameModal]);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-custom-purple-50">
          {showNameModal && (
            <UserNameModal 
              onSubmit={handleUserNameSubmit} 
            />
          )}
          
          <Navbar userName={userName} />
          
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;