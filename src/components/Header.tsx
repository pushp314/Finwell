import React, { useState } from 'react';
import { Play, ChevronDown } from 'lucide-react';
import { Link } from '../types';

const links: Link[] = [
  { name: 'Company', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Story', href: '#' },
  { name: 'Press', href: '#' },
  { name: 'Contact', href: '#' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-[#83C54F] rounded-md p-1 mr-2">
            <Play className="w-6 h-6 text-white" fill="white" />
          </div>
          <span className="text-2xl font-bold text-gray-800">ARYA</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Language Selector */}
        <div className="hidden md:flex items-center">
          <button className="flex items-center space-x-1">
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="English"
              className="w-8 h-auto rounded-full"
            />
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 py-2 bg-white rounded-lg shadow-lg">
          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-gray-800 font-medium py-2 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center py-2">
              <img
                src="https://flagcdn.com/w40/gb.png"
                alt="English"
                className="w-8 h-auto rounded-full"
              />
              <ChevronDown className="w-4 h-4 ml-1 text-gray-600" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;