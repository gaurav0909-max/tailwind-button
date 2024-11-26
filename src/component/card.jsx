import React, { useState } from 'react';

const AdvancedInteractiveCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-64 w-full max-w-sm overflow-hidden rounded-3xl bg-gray-100 text-black font-mono shadow-md transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://images.pexels.com/photos/417083/pexels-photo-417083.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="nature-pic"
        className="h-full w-full object-cover rounded-md"
      />

      {/* Custom Shape Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-md rounded-3xl group-hover:bg-white/80">
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gray-100 shadow-md group-hover:animate-spin-slow" />
        <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-gray-100 shadow-md group-hover:animate-spin-slow" />
      </div>

      {/* Content */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-white/50 backdrop-blur-md px-6 pb-6 pt-8 rounded-b-3xl transition-transform duration-300 ${
          isHovered ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <h2 className="text-2xl font-bold">Title</h2>
        <p className="mt-2 text-sm opacity-0 transition-opacity duration-500 delay-150 group-hover:opacity-100">
          Hover over this card to see the effect.
        </p>
      </div>
    </div>
  );
};

export default AdvancedInteractiveCard;
