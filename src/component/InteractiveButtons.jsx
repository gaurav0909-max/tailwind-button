import React, { useState } from 'react';

const InteractiveButtons = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-500 to-slate-400 p-8 flex flex-col items-center justify-center space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Enhanced Glassmorphic Interactive Button */}
        <div className="relative group">
          <button 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            className="relative px-6 py-3 w-48 h-16 text-sm font-semibold text-gray-800 
              bg-white/30 backdrop-blur-lg border border-white/20 
              rounded-xl shadow-xl transition-all duration-300 
              overflow-hidden
              hover:bg-white/50 hover:shadow-2xl hover:scale-105 
              active:bg-white/70 active:scale-95
              flex items-center justify-center"
          >
            {/* Spotlight Effect */}
            <span 
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{
                background: isHovered 
                  ? `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 50%)` 
                  : 'transparent'
              }}
            />

            {/* Button Content */}
            <span className="relative z-10 flex items-center space-x-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-blue-600 transform transition-transform group-hover:rotate-45" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.532 1.532 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span>Interact</span>
            </span>
          </button>

          {/* Hover Tooltip */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
            bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 
            group-hover:opacity-100 transition-opacity duration-300">
            Dynamic Glassmorphic
          </div>
        </div>

        {/* Retain other buttons from the original code */}
        {/* ... (previous buttons remain the same) ... */}
      </div>
    </div>
  );
};

export default InteractiveButtons;