import React from "react";

const Dropdown = () => {
  const links = [
    { text: "Apple", href: "/apple" },
    { text: "Mango", href: "/mango" },
    { text: "Banana", href: "/banana" },
  ];

  return (
    <div className="relative w-48 rounded-lg font-sans bg-black shadow-inner">
      <ul>
        <li className="group relative flex items-center justify-center">
          <a
            href="/#"
            className="relative inline-flex items-center justify-center px-4 py-3 text-lg font-semibold text-white transition-all duration-250"
          >
            Fruits
            <span className="ml-2 border-l-5 border-r-5 border-t-6 border-transparent border-t-white transition-transform duration-300 group-hover:rotate-180"></span>
          </a>
          <ul className="absolute left-0 top-full mt-2 w-48 origin-top transform scale-y-0 transition-transform duration-250 group-hover:scale-y-100">
            {links.map((link, index) => (
              <li key={`link-${index}`} className="mt-1">
                <a
                  href={link.href}
                  className="block w-full rounded-lg bg-black px-3 py-2 text-center text-white transition-transform duration-250 hover:scale-105 hover:shadow-inner focus:outline-none"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
