import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-950 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">MyPortfolio</h1>
        <nav className="space-x-4 hidden md:flex">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
