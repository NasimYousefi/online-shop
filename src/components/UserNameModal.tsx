import React, { useState } from 'react';

interface UserNameModalProps {
  onSubmit: (name: string) => void;
}

const UserNameModal: React.FC<UserNameModalProps> = ({ onSubmit }) => {
  const [userName, setUserName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      onSubmit(userName.trim());
    }
  };

  return (
    <div className="user-name-container fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form 
        onSubmit={handleSubmit} 
        className="user-name-form bg-white p-6 rounded-lg shadow-lg"
      >
        <h4 className="text-xl text-custom-purple mb-4">Enter Your Name</h4>
        <input 
          type="text" 
          className="form-control w-full p-2 border-2 border-custom-purple rounded mb-4" 
          placeholder="Your Name" 
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required 
        />
        <button 
          type="submit" 
          className="btn-primary w-full bg-custom-purple text-white p-2 rounded hover:bg-custom-dark-blue"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserNameModal;