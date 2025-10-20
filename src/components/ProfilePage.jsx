import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';

const ProfilePage = () => {
  const achievements = [
    { id: 1, title: 'First Simulation Completed', date: 'Oct 15, 2025', icon: '🎉', color: 'from-green-500 to-emerald-500' },
    { id: 2, title: 'Master Communicator', date: 'Oct 18, 2025', icon: '💬', color: 'from-blue-500 to-cyan-500' },
    { id: 3, title: 'Critical Thinker', date: 'Oct 19, 2025', icon: '🧠', color: 'from-purple-500 to-pink-500' }
  ];

  const skills = [
    { name: 'Communication', percentage: 85, color: 'from-blue-500 to-cyan-500' },
    { name: 'Problem Solving', percentage: 72, color: 'from-purple-500 to-pink-500' },
    { name: 'Leadership', percentage: 68, color: 'from-orange-500 to-red-500' },
    { name: 'Creativity', percentage: 91, color: 'from-green-500 to-emerald-500' }
  ];

  // Radar chart data
  const radarData = [
    { skill: 'Communication', value: 85, fullMark: 100 },
    { skill: 'Problem Solving', value: 72, fullMark: 100 },
    { skill: 'Leadership', value: 68, fullMark: 100 },
    { skill: 'Creativity', value: 91, fullMark: 100 },
    { skill: 'Teamwork', value: 78, fullMark: 100 },
    { skill: 'Critical Thinking', value: 82, fullMark: 100 }
  ];

  return (
    <div className="min-h-screen px-4 py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - User Info & Achievements */}
          <div className="lg:col-span-1 space-y-6">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-8 shadow-xl animate-slideRight">
              {/* Avatar with gradient border */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-5xl">
                  👤
                </div>
              </div>
              
              {/* User Info */}
              <h2 className="text-2xl font-bold text-white text-center mb-2">
                Rasikumar Nishantha
              </h2>
              <p className="text-purple-300 text-center mb-2 font-medium">
                Aspiring Data Scientist
              </p>
              <div className="flex justify-center gap-2 mb-6">
                <span className="px-3 py-1 text-xs bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/50 rounded-full text-purple-200">
                  Level 12
                </span>
                <span className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-blue-400/50 rounded-full text-blue-200">
                  850 XP
                </span>
              </div>
              
              {/* Recent Achievements */}
              <div className="border-t border-white/20 pt-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span>🏆</span> Recent Achievements
                </h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={achievement.id}
                      className="group backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer animate-fadeIn"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${achievement.color} rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium text-sm">
                            {achievement.title}
                          </p>
                          <p className="text-gray-400 text-xs mt-1">
                            {achievement.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Skill Profile */}
          <div className="lg:col-span-2 space-y-6">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-8 shadow-xl animate-slideLeft">
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <span className="text-4xl">📊</span>
                Your Skill Profile
              </h2>
              <p className="text-gray-300 mb-8">Track your progress across different skill areas</p>
              
              {/* Radar Chart */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-lg p-8 mb-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <ResponsiveContainer width="100%" height={400}>
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="#ffffff20" />
                      <PolarAngleAxis 
                        dataKey="skill" 
                        tick={{ fill: '#e5e7eb', fontSize: 12 }}
                      />
                      <PolarRadiusAxis 
                        angle={90} 
                        domain={[0, 100]}
                        tick={{ fill: '#9ca3af', fontSize: 10 }}
                      />
                      <Radar
                        name="Skills"
                        dataKey="value"
                        stroke="#A855F7"
                        fill="#A855F7"
                        fillOpacity={0.6}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'rgba(0, 0, 0, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '8px',
                          color: 'white'
                        }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Skills Progress Bars */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white mb-4">Skill Breakdown</h3>
                {skills.map((skill, index) => (
                  <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-purple-400 font-bold">{skill.percentage}%</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                        style={{ 
                          width: `${skill.percentage}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="backdrop-blur-md bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300">
                <p className="text-3xl font-bold text-blue-300">3</p>
                <p className="text-gray-300 text-sm mt-1">Simulations</p>
              </div>
              <div className="backdrop-blur-md bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300">
                <p className="text-3xl font-bold text-purple-300">12h</p>
                <p className="text-gray-300 text-sm mt-1">Total Time</p>
              </div>
              <div className="backdrop-blur-md bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300">
                <p className="text-3xl font-bold text-green-300">8</p>
                <p className="text-gray-300 text-sm mt-1">Achievements</p>
              </div>
              <div className="backdrop-blur-md bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300">
                <p className="text-3xl font-bold text-orange-300">79%</p>
                <p className="text-gray-300 text-sm mt-1">Avg Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
          animation-fill-mode: both;
        }
        .animate-slideRight {
          animation: slideRight 0.8s ease-out;
        }
        .animate-slideLeft {
          animation: slideLeft 0.8s ease-out;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;
