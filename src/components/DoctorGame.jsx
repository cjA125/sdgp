import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorGame = () => {
  const navigate = useNavigate();
  const [gameStarted, setGameStarted] = useState(false);

  const startSimulation = () => {
    setGameStarted(true);
    // TODO: Connect to actual game simulation here
    alert('Doctor simulation will load here. This will connect to your game when ready!');
  };

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/select')}
          className="mb-8 text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
        >
          ← Back to Simulations
        </button>

        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">👨‍⚕️</div>
            <h1 className="text-4xl font-bold text-white mb-4">The Healer</h1>
            <p className="text-xl text-gray-200 mb-6">
              Diagnose patients and make critical medical decisions in high-pressure situations
            </p>
          </div>

          {!gameStarted ? (
            <div className="space-y-6">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">What You'll Experience:</h3>
                <ul className="text-gray-200 space-y-2">
                  <li>• Analyze patient symptoms and medical history</li>
                  <li>• Make critical diagnoses under time pressure</li>
                  <li>• Communicate with patients and families compassionately</li>
                  <li>• Handle emergency medical situations</li>
                  <li>• Apply medical knowledge to real-world scenarios</li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Skills You'll Develop:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-purple-500/30 border border-purple-400/50 rounded-lg text-white text-sm">
                    Critical Thinking
                  </span>
                  <span className="px-4 py-2 bg-purple-500/30 border border-purple-400/50 rounded-lg text-white text-sm">
                    Decision Making
                  </span>
                  <span className="px-4 py-2 bg-purple-500/30 border border-purple-400/50 rounded-lg text-white text-sm">
                    Empathy
                  </span>
                  <span className="px-4 py-2 bg-purple-500/30 border border-purple-400/50 rounded-lg text-white text-sm">
                    Attention to Detail
                  </span>
                  <span className="px-4 py-2 bg-purple-500/30 border border-purple-400/50 rounded-lg text-white text-sm">
                    Stress Management
                  </span>
                </div>
              </div>

              <button
                onClick={startSimulation}
                className="w-full py-4 bg-purple-500 hover:bg-purple-600 text-white text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#A855F7' }}
              >
                Start Simulation
              </button>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎮</div>
              <h2 className="text-2xl font-bold text-white mb-4">Loading Simulation...</h2>
              <p className="text-gray-300">
                The game simulation will be embedded here when your game is ready!
              </p>
              <div className="mt-8 p-8 bg-purple-500/10 border-2 border-dashed border-purple-400/50 rounded-xl">
                <p className="text-purple-300 font-mono text-sm">
                  Game Integration Point - Connect your Unity/Godot/Web game here
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorGame;
