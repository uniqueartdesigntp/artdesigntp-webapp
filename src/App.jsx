import './index.css';
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 text-gray-800 p-4 space-y-4">
      <h1 className="text-4xl md:text-6xl font-bold text-center drop-shadow-lg">🔥 Welcome to ArtDesignTP 🔥</h1>
      <p className="text-lg md:text-xl text-center max-w-2xl text-gray-700">Discover our premium Print On Demand collections on top marketplaces.</p>
      
      <div className="flex flex-wrap justify-center gap-4 pt-4">
        <a href="https://artdesigntp.store" target="_blank" className="bg-white py-3 px-6 rounded-xl shadow-md hover:scale-105 transition">Main Store</a>
        <a href="https://artdesigntp.redbubble.com" target="_blank" className="bg-white py-3 px-6 rounded-xl shadow-md hover:scale-105 transition">Redbubble</a>
        <a href="http://tee.pub/lic/ff-EM3.CCdM" target="_blank" className="bg-white py-3 px-6 rounded-xl shadow-md hover:scale-105 transition">TeePublic</a>
        <a href="https://www.amazon.com/shop/unique.artdesigntp" target="_blank" className="bg-white py-3 px-6 rounded-xl shadow-md hover:scale-105 transition">Amazon</a>
        <a href="https://www.etsy.com/shop/ArtDesignTP" target="_blank" className="bg-white py-3 px-6 rounded-xl shadow-md hover:scale-105 transition">Etsy</a>
      </div>
    </div>
  );
};

export default App;
