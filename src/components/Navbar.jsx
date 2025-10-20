import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(null);

  const navLinks = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Simulations', path: '/select', icon: '🎮' },
    { name: 'Profile', path: '/profile', icon: '👤' },
    { name: 'Achievements', path: '/achievements', icon: '🏆' },
    { name: 'Careers', path: '/recommendations', icon: '🎯' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center group">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <span className="text-2xl">🎯</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              VocaLens
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setIsHovered(link.path)}
                  onMouseLeave={() => setIsHovered(null)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium flex items-center gap-2 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/50'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.name}</span>
                  {(isActive || isHovered === link.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  )}
                </Link>
              );
            })}
            
            {/* Login Button */}
            <Link
              to="/auth"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
