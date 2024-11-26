import React from 'react';

const Input = () => {
  return (
    <div className="relative mt-20">
      <input
        type="email"
        id="input19"
        placeholder="Input type email"
        className="w-full h-10 text-base text-black border border-light-gray focus:outline-none focus:pl-3 pl-[100px] transition-all duration-500 ease-in-out"
      />
      <label
        htmlFor="input19"
        className="absolute top-0 left-0 h-10 text-white bg-black px-5 transition-all duration-500 ease-in-out transform text-center flex items-center"
      >
        Email
      </label>

      {/* Focus Effect */}
      <style jsx>{`
        input:focus + label {
          transform: translateY(-120%) translateX(0%);
          transition: all 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Input;
