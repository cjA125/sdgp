import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CareerRecommendations = () => {
  const navigate = useNavigate();

  const recommendations = [
    {
      id: 1,
      career: 'Data Scientist',
      match: 92,
      icon: '📊',
      gradient: 'from-blue-500 to-cyan-500',
      skills: ['Problem Solving', 'Analytical Thinking', 'Creativity'],
      salary: '$95,000 - $150,000',
      growth: '+35% (High Demand)',
      description: 'Your analytical skills and creativity make you perfect for data science!'
    },
    {
      id: 2,
      career: 'Software Engineer',
      match: 88,
      icon: '💻',
      gradient: 'from-purple-500 to-pink-500',
      skills: ['Logical Thinking', 'Problem Solving', 'Technical Skills'],
      salary: '$90,000 - $160,000',
      growth: '+25% (Very High)',
      description: 'Your logical approach and problem-solving ability align perfectly with software development.'
    },
    {
      id: 3,
      career: 'UX Designer',
      match: 85,
      icon: '🎨',
      gradient: 'from-pink-500 to-orange-500',
      skills: ['Creativity', 'Communication', 'Empathy'],
      salary: '$75,000 - $120,000',
      growth: '+15% (Growing)',
      description: 'Your creative thinking and communication skills are ideal for UX design.'
    },
    {
      id: 4,
      career: 'Product Manager',
      match: 82,
      icon: '📱',
      gradient: 'from-green-500 to-emerald-500',
      skills: ['Leadership', 'Communication', 'Strategic Thinking'],
      salary: '$100,000 - $170,000',
      growth: '+20% (High)',
      description: 'Your leadership and strategic thinking make you a great product manager candidate.'
    }
  ];

  return (
    <div className="min-h-screen px-4 py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Your Career Matches
          </h1>
          <p className="text-xl text-gray-300">
            Based on your simulation performance and skill profile
          </p>
        </motion.div>

        {/* Recommendations Grid */}
        <div className="space-y-6">
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
              onClick={() => navigate('/select')}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Icon & Match Score */}
                <div className="flex items-center gap-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${rec.gradient} rounded-xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {rec.icon}
                  </div>
                  <div className="text-center">
                    <div className={`text-4xl font-bold bg-gradient-to-br ${rec.gradient} bg-clip-text text-transparent`}>
                      {rec.match}%
                    </div>
                    <div className="text-xs text-gray-400">Match</div>
                  </div>
                </div>

                {/* Career Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {rec.career}
                  </h3>
                  <p className="text-gray-300 mb-3">{rec.description}</p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {rec.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs bg-gradient-to-r ${rec.gradient} bg-opacity-20 border border-white/20 rounded-full text-white`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">💰</span>
                      <span className="text-gray-300">{rec.salary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">📈</span>
                      <span className="text-green-400">{rec.growth}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="md:ml-auto">
                  <button className={`px-6 py-3 bg-gradient-to-r ${rec.gradient} hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-300 whitespace-nowrap`}>
                    Explore Path →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why These Matches */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-3xl">🎯</span>
            Why These Matches?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="font-semibold text-white mb-1">Skill Alignment</h3>
                <p className="text-sm">Matches based on your demonstrated skills in simulations</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <h3 className="font-semibold text-white mb-1">Performance Data</h3>
                <p className="text-sm">Analyzed from your gameplay and decision-making patterns</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎮</span>
              <div>
                <h3 className="font-semibold text-white mb-1">Interest Indicators</h3>
                <p className="text-sm">Based on simulations you've completed and enjoyed</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌟</span>
              <div>
                <h3 className="font-semibold text-white mb-1">Market Demand</h3>
                <p className="text-sm">Considers current and future job market trends</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/select')}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Try More Simulations
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerRecommendations;
