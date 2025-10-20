import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 shadow-2xl relative z-10 animate-fadeIn">
        <div className="text-center">
          {/* Logo/Icon */}
          <div className="mb-8 inline-block">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center text-4xl shadow-lg animate-bounce">
              🎯
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Discover Your Future Career Path
          </h1>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
            Engage in realistic, AI-powered simulations to uncover your unique skills and find the profession you were meant for.
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="px-4 py-2 backdrop-blur-sm bg-white/10 border border-white/20 rounded-full text-sm text-gray-200">
              ✨ AI-Powered
            </span>
            <span className="px-4 py-2 backdrop-blur-sm bg-white/10 border border-white/20 rounded-full text-sm text-gray-200">
              🎮 Interactive
            </span>
            <span className="px-4 py-2 backdrop-blur-sm bg-white/10 border border-white/20 rounded-full text-sm text-gray-200">
              📊 Skill Tracking
            </span>
          </div>

          <Link 
            to="/select"
            className="group inline-block px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 relative overflow-hidden"
          >
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
