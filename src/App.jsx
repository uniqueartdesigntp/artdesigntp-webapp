import './index.css';
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 p-8">
      <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">🔥 Welcome to ArtDesignTP 🔥</h1>
      <p className="text-lg mb-6 text-white">Discover our full collection of Print on Demand products ✨</p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <a href="https://artdesignptp.store" target="_blank" className="bg-white py-3 px-4 rounded-lg shadow hover:scale-105 transition-transform text-center">🛒 ArtDesignTP Store</a>
        <a href="https://artdesignptp.redbubble.com" target="_blank" className="bg-white py-3 px-4 rounded-lg shadow hover:scale-105 transition-transform text-center">🎨 Redbubble Store</a>
        <a href="http://tee.pub/lic/ff-EM3.CCdM" target="_blank" className="bg-white py-3 px-4 rounded-lg shadow hover:scale-105 transition-transform text-center">👕 TeePublic Products</a>
        <a href="https://www.amazon.com/shop/unique.artdesigntp" target="_blank" className="bg-white py-3 px-4 rounded-lg shadow hover:scale-105 transition-transform text-center">🛍️ Amazon Storefront</a>
        <a href="https://www.etsy.com/shop/ArtDesignTP" target="_blank" className="bg-white py-3 px-4 rounded-lg shadow hover:scale-105 transition-transform text-center">✨ Etsy Shop</a>
      </div>
    </div>
  );
};

export default App;
