"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black text-white py-6 px-10 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-3">
        <img src="/epic4.png" alt="EPIC Logo" className="w-10 h-10" />
        <span className="text-2xl font-semibold ml-2">EPIC™</span>
      </div>
      <nav className="flex space-x-8 text-lg">
        <a href="#" className="hover:text-gray-400">
          Solutions ▼
        </a>
        <a href="#" className="hover:text-gray-400">
          Customers ▼
        </a>
        <a href="#" className="hover:text-gray-400">
          Resources ▼
        </a>
        <a href="#" className="hover:text-gray-400">
          Company ▼
        </a>
        <a href="#" className="hover:text-gray-400">
          Blog
        </a>
      </nav>
      <div className="flex space-x-4">
        <Link href="/get-started">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-700 shadow-lg hover:shadow-xl transition">
            Get started now
          </button>
        </Link>

        <Link href="/login">
          <button className="bg-white text-black px-6 py-2 rounded-lg text-lg font-medium hover:bg-gray-200 shadow-lg hover:shadow-xl transition">
            Log in
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
