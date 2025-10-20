import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LawyerGame = () => {
  const navigate = useNavigate();
  const [gameStarted, setGameStarted] = useState(false);

  const startSimulation = () => {
    setGameStarted(true);
    // TODO: Connect to actual game simulation here
    alert('Lawyer simulation will load here. This will connect to your game when ready!');
  };

  return (
    <div className="min-h-screen px-4 py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <button
          onClick={() => navigate('/select')}
          className="mb-8 px-4 py-2 text-gray-300 hover:text-white transition-all duration-200 flex items-center gap-2 backdrop-blur-sm bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform duration-200">←</span>
          Back to Simulations
        </button>

        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl animate-fadeIn">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-6xl shadow-lg shadow-purple-500/50 animate-bounce">
                ⚖️
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              The Advocate
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Navigate complex legal scenarios and advocate for justice in the courtroom
            </p>
          </div>

          {!gameStarted ? (
            <div className="space-y-6">
              <div className="backdrop-blur-sm bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-400/30 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚖️</span>
                  What You'll Experience:
                </h3>
                <ul className="text-gray-200 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">▸</span>
                    <span>Analyze complex legal cases and evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">▸</span>
                    <span>Negotiate settlements and contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">▸</span>
                    <span>Present compelling arguments in court</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">▸</span>
                    <span>Cross-examine witnesses effectively</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">▸</span>
                    <span>Navigate ethical dilemmas in legal practice</span>
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🌟</span>
                  Skills You'll Develop:
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 border border-purple-400/50 rounded-lg text-white text-sm hover:scale-105 transition-transform duration-200 cursor-default">
                    🧩 Analytical Thinking
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 border border-purple-400/50 rounded-lg text-white text-sm hover:scale-105 transition-transform duration-200 cursor-default">
                    🗣️ Persuasion
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 border border-purple-400/50 rounded-lg text-white text-sm hover:scale-105 transition-transform duration-200 cursor-default">
                    🤝 Negotiation
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 border border-purple-400/50 rounded-lg text-white text-sm hover:scale-105 transition-transform duration-200 cursor-default">
                    🔬 Research Skills
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 border border-purple-400/50 rounded-lg text-white text-sm hover:scale-105 transition-transform duration-200 cursor-default">
                    🎤 Public Speaking
                  </span>
                </div>
              </div>

              <button
                onClick={startSimulation}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
              >
                Start Simulation →
              </button>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 animate-bounce">🎮</div>
              <h2 className="text-2xl font-bold text-white mb-4">Loading Simulation...</h2>
              <p className="text-gray-300 mb-8">
                The game simulation will be embedded here when your game is ready!
              </p>
              <div className="mt-8 p-8 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-2 border-dashed border-purple-400/50 rounded-xl">
                <p className="text-purple-300 font-mono text-sm">
                  🔌 Game Integration Point - Connect your Unity/Godot/Web game here
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LawyerGame;
