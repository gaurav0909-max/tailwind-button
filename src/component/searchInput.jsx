import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Using the search icon from react-icons

const SearchInput = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-500">
      <div className="relative flex items-center">
        {/* Search Icon */}
        <div
          onClick={handleClick}
          className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out transform ${
            isOpen
              ? "bg-transparent shadow-none scale-110"
              : "bg-[#4511a7] shadow-lg hover:scale-105"
          }`}
        >
          <FiSearch
            className={`w-6 h-6 transition-all duration-300 transform ${
              isOpen ? "text-[#4511a7]" : "text-white"
            }`}
          />
        </div>

        {/* Input Field */}
        <div
          className={`ml-3 flex items-center transition-all duration-500 ease-out ${
            isOpen ? "w-[250px] opacity-100 border-b-4 border-[#4511a7]" : "w-0 opacity-0"
          }`}
        >
          <input
            type="text"
            placeholder="Search..."
            className={`h-12 text-base pr-10 outline-none bg-transparent transition-all duration-500 ease-out ${
              isOpen ? "w-full px-4 opacity-100" : "opacity-0 w-0"
            }`}
            style={{ transitionDuration: "0.5s", transitionTimingFunction: "ease-out" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
