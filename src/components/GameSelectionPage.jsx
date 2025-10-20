import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameSelectionPage = () => {
  const navigate = useNavigate();

  const simulations = [
    {
      id: 1,
      title: 'The Educator',
      description: 'Step into the classroom. Manage student behavior, deliver engaging lessons, and handle parent-teacher conferences in this dynamic simulation.',
      icon: '👨‍🏫',
      route: '/game/teacher',
      gradient: 'from-blue-500 to-cyan-500',
      shadowColor: 'shadow-blue-500/50'
    },
    {
      id: 2,
      title: 'The Healer',
      description: 'Diagnose patients in a high-stakes environment. Analyze symptoms, make critical decisions, and test your medical knowledge.',
      icon: '👨‍⚕️',
      route: '/game/doctor',
      gradient: 'from-red-500 to-pink-500',
      shadowColor: 'shadow-red-500/50'
    },
    {
      id: 3,
      title: 'The Advocate',
      description: 'Negotiate deals, argue in court, and analyze complex cases. Your logic and persuasion skills will be put to the test.',
      icon: '⚖️',
      route: '/game/lawyer',
      gradient: 'from-purple-500 to-indigo-500',
      shadowColor: 'shadow-purple-500/50'
    }
  ];

  return (
    <div className="min-h-screen px-4 py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Choose Your Simulation
          </h1>
          <p className="text-gray-300 text-lg">Select a career path to explore and develop your skills</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {simulations.map((simulation, index) => (
            <div 
              key={simulation.id}
              className="group backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-8 shadow-xl transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/15 cursor-pointer animate-slideUp"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => navigate(simulation.route)}
            >
              {/* Icon with gradient background */}
              <div className={`text-6xl mb-6 text-center w-20 h-20 mx-auto bg-gradient-to-br ${simulation.gradient} rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${simulation.shadowColor} shadow-lg`}>
                {simulation.icon}
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-purple-300 transition-colors duration-300">
                {simulation.title}
              </h2>
              
              <p className="text-gray-200 mb-6 leading-relaxed text-center min-h-[120px]">
                {simulation.description}
              </p>
              
              <button 
                onClick={(e) => { e.stopPropagation(); navigate(simulation.route); }}
                className={`w-full py-3 bg-gradient-to-r ${simulation.gradient} hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:${simulation.shadowColor} transform hover:-translate-y-1`}
              >
                Play Now →
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default GameSelectionPage;
