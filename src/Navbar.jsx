import React from "react";

const Navbar = ({ category, onCategorySelect }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-2xl font-bold tracking-wide cursor-pointer"
          onClick={() => onCategorySelect("general")}
        >
          NewsMag
        </h1>
        <nav className="space-x-4">
          <button
            onClick={() => onCategorySelect("Sports")}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              category === "Sports"
                ? "bg-white text-blue-600 font-semibold"
                : "hover:bg-blue-600 hover:bg-opacity-30"
            }`}
          >
            Sports
          </button>
          <button
            onClick={() => onCategorySelect("Technology")}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              category === "Technology"
                ? "bg-white text-blue-600 font-semibold"
                : "hover:bg-blue-600 hover:bg-opacity-30"
            }`}
          >
            Technology
          </button>
          <button
            onClick={() => onCategorySelect("Health")}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              category === "Health"
                ? "bg-white text-blue-600 font-semibold"
                : "hover:bg-blue-600 hover:bg-opacity-30"
            }`}
          >
            Health
          </button>
          <button
            onClick={() => onCategorySelect("Entertainment")}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              category === "Entertainment"
                ? "bg-white text-blue-600 font-semibold"
                : "hover:bg-blue-600 hover:bg-opacity-30"
            }`}
          >
            Entertainment
          </button>
          <button
            onClick={() => onCategorySelect("Business")}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              category === "Business"
                ? "bg-white text-blue-600 font-semibold"
                : "hover:bg-blue-600 hover:bg-opacity-30"
            }`}
          >
            Business
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
