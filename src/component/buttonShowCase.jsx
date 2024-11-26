import React, { useState } from 'react';

const ButtonShowcase = () => {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 p-4">
      {/* 1. Glass Morphic Button */}
      <button 
        className="relative overflow-hidden w-40 h-15 text-lg font-bold text-center bg-white/30 backdrop-blur-md rounded-lg border border-white/20 shadow-lg cursor-pointer transition duration-500 transform hover:scale-105 hover:shadow-xl"
      >
        Glass Button
      </button>

      {/* 2. Frosted Neon Button */}
      <button 
        className="relative w-40 h-15 text-lg font-bold bg-white/20 backdrop-blur-lg rounded-full border border-white/10 text-blue-500 shadow-2xl ring-2 ring-blue-500/30 hover:ring-blue-500/60 transition-all duration-300 hover:scale-110 hover:bg-white/40"
      >
        Frosted Neon
      </button>

      {/* 3. Interactive Open/Closed Toggle */}
      <button 
        onClick={() => setActiveButton(activeButton === 3 ? null : 3)}
        className={`relative w-40 h-15 text-lg font-bold rounded-lg transition-all duration-500 ${
          activeButton === 3 
            ? 'bg-green-500 text-white border-green-600 shadow-xl transform scale-110' 
            : 'bg-white/30 backdrop-blur-md text-gray-800 border border-white/20 hover:scale-105'
        }`}
      >
        {activeButton === 3 ? 'Open' : 'Closed'}
      </button>

      {/* 4. Gradient Glass Button */}
      <button 
        className="relative w-40 h-15 text-lg font-bold text-white bg-gradient-to-br from-purple-500/40 to-blue-500/40 backdrop-blur-lg rounded-xl border border-white/20 shadow-2xl hover:from-purple-500/60 hover:to-blue-500/60 transition-all duration-500 transform hover:scale-105"
      >
        Gradient Glass
      </button>

      {/* 5. 3D Glassmorphic Button */}
      <button 
        className="relative w-40 h-15 text-lg font-bold text-gray-800 bg-white/20 backdrop-blur-xl rounded-lg border border-white/10 shadow-[0_15px_25px_rgba(0,0,0,0.15)] transition-all duration-500 transform perspective-1000 hover:translate-y-[-5px] hover:shadow-[0_20px_30px_rgba(0,0,0,0.2)]"
      >
        3D Glass
      </button>
    </div>
  );
};

export default ButtonShowcase;