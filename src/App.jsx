import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">🔥 Welcome to ArtDesignTP 🔥</h1>
      <p className="text-lg mb-6">Discover our Print on Demand collections 👇</p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <a href="https://artdesigntp.store" target="_blank" className="bg-white py-3 px-4 rounded-lg shadow hover:scale-105 transition">🌐 Fourthwall Official Store</a>
        <a href="https://artdesigntp.redbubble.com" target="_blank" className="bg-white py-3 px-4 rounded-lg shadow hover:scale-105 transition">🎨 Redbubble Designs</a>
        <a href="http://tee.pub/lic/ff-EM3_cCdw" target="_blank" className="bg-white py-3 px-4 rounded-lg shadow hover:scale-105 transition">👕 TeePublic Products</a>
        <a href="https://www.amazon.com/shop/unique.artdesigntp" target="_blank" className="bg-white py-3 px-4 rounded-lg shadow hover:scale-105 transition">🛒 Amazon Storefront</a>
      </div>
    </div>
  );
};

export default App;
