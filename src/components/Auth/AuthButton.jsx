import React from 'react';

const AuthButton = ({ children, onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition duration-200"
    >
      {isLoading ? 'Please wait...' : children}
    </button>
  );
};

export default AuthButton;