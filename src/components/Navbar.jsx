import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import bachanest from '../assets/bachanest6.png'; // Example image import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Updated isActive to check hash (for sections) or empty hash (for home)
  const isActive = (section) => {
    const currentSection = location.hash.substring(1) || 'home';
    return currentSection === section;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="rounded-lg flex items-center justify-center">
              <img src={bachanest} alt="BachaNest Logo" className="w-40" />
            </div>
            {/* <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Bachanest
            </span> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex font-poppins font-semibold text-lg items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors hover:text-[#E89A38] ${isActive('home') ? 'text-[#E89A38]' : 'text-foreground'
                }`}
            >
              Home
            </Link>
            <a
              href="#features"
              className={`transition-colors hover:text-[#E89A38] ${isActive('features') ? 'text-[#E89A38]' : 'text-foreground'
                }`}
            >
              Features
            </a>
            <a
              href="#about"
              className={`transition-colors hover:text-[#E89A38] ${isActive('about') ? 'text-[#E89A38]' : 'text-foreground'
                }`}
            >
              About
            </a>
            <a
              href="#contact"
              className={`transition-colors hover:text-[#E89A38] ${isActive('contact') ? 'text-[#E89A38]' : 'text-foreground'
                }`}
            >
              Contact
            </a>
            {/* <button className="font-poppins bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out">
              Download App
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <Link
              to="/"
              className={`block px-4 py-2 rounded-lg transition-colors ${isActive('home') ? 'bg-primary text-white' : 'hover:bg-muted'
                }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a
              href="#features"
              className={`block px-4 py-2 rounded-lg transition-colors ${isActive('features') ? 'bg-primary text-white' : 'hover:bg-muted'
                }`}
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#about"
              className={`block px-4 py-2 rounded-lg transition-colors ${isActive('about') ? 'bg-primary text-white' : 'hover:bg-muted'
                }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className={`block px-4 py-2 rounded-lg transition-colors ${isActive('contact') ? 'bg-primary text-white' : 'hover:bg-muted'
                }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button className="w-full px-6 py-2 bg-gradient-primary text-white rounded-full font-medium hover:shadow-glow transition-all duration-300">
              Download App
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;