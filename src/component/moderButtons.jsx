import React, { useState } from 'react';

const ModernButtons = () => {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex flex-col items-center justify-center space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* 1. Animated Gradient Button */}
        <button className="relative px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold rounded-lg text-sm uppercase tracking-wider 
          transform transition-all duration-300 hover:scale-105 hover:brightness-110 
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-600 before:via-pink-600 before:to-blue-600 
          before:opacity-0 hover:before:opacity-20 before:rounded-lg before:transition-opacity">
          Gradient Pulse
        </button>

        {/* 2. Minimal Outline Button with Hover Effect */}
        <button className="relative px-6 py-3 text-sm font-medium text-gray-700 border-2 border-gray-300 rounded-lg 
          hover:text-black hover:border-black transition-all duration-300 
          before:absolute before:inset-0 before:border-2 before:border-transparent before:rounded-lg 
          hover:before:border-black before:transition-all hover:before:animate-pulse">
          Outline Minimal
        </button>

        {/* 3. Glassmorphic Interactive Button */}
        <button className="px-6 py-3 bg-white/30 backdrop-blur-lg border border-white/20 text-gray-800 
          rounded-xl shadow-xl transition-all duration-300 
          hover:bg-white/50 hover:shadow-2xl hover:scale-105 
          active:bg-white/70 active:scale-95">
          Glassmorphic
        </button>

        {/* 4. Animated Border Button */}
        <button className="relative px-6 py-3 text-sm font-medium text-gray-900 bg-white 
          rounded-lg overflow-hidden group
          before:absolute before:inset-0 before:border-2 before:border-black 
          before:opacity-0 before:transition-opacity before:duration-300 
          hover:before:opacity-100 
          after:absolute after:inset-0 after:border-2 after:border-black 
          after:opacity-0 after:transition-opacity after:duration-300 
          after:delay-200 hover:after:opacity-100">
          Animated Border
        </button>

        {/* 5. Modern Neomorphic Button */}
        <button className="px-6 py-3 text-sm font-medium text-gray-800 
          bg-gray-100 rounded-lg 
          shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.8)]
          hover:shadow-[inset_4px_4px_10px_0px_rgba(0,0,0,0.1),inset_-4px_-4px_10px_0px_rgba(255,255,255,0.8)]
          transition-shadow duration-300">
          Neomorphic
        </button>

        {/* 6. Animated Underline Button */}
        <button className="relative px-6 py-3 text-sm font-medium text-gray-800 
          after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
          after:bg-black after:scale-x-0 after:origin-right 
          hover:after:scale-x-100 hover:after:origin-left 
          after:transition-transform after:duration-300">
          Underline Reveal
        </button>
      </div>
    </div>
  );
};

export default ModernButtons;