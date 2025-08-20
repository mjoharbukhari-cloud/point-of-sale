import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/signup");
  };
  const handleClick = () => {
    navigate("/login");
  };

  const menuItems = [
    { label: "Home", anchor: "home" },
    { label: "About", anchor: "about" },
    { label: "Services", anchor: "services" },
    { label: "Pricing", anchor: "pricing" },
    { label: "FAQs", anchor: "faqs" },
    { label: "Contact", anchor: "contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-2 py-3 flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Title */}
        <div className=" gap-4">
          
          <h1 className="text-2xl font-bold text-gray-800">
            AL Syed <span className="text-green-600">POS System</span>
          </h1>
        </div>

        <nav className="flex gap-4 text-gray-700">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.anchor}`}
              className="hover:text-green-600 transition hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-4 md:mt-0 space-x-3">
          <button
            onClick={handleStartClick}
            className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-2 rounded-md font-semibold shadow-sm"
          >
            Register
          </button>
          <button
            onClick={handleClick}
            className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-2 rounded-md font-semibold shadow-sm"
          >
            login
          </button>
        </div>
      </div>
    </header>
  );
}
