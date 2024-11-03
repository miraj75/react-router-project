import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-red-500 to-pink-600">
      <div className="bg-white text-center p-10 rounded-lg shadow-lg animate-fade-in-down transform transition duration-500 ease-in-out hover:scale-105">
        <h1 className="text-6xl font-bold text-red-600 animate-pulse">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">Oops! Page not found</p>
        <p className="text-gray-600 mt-2">The page you are looking for doesn’t exist.</p>
        <button 
          className="mt-6 px-6 py-2 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-110"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
