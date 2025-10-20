import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

const AchievementsPage = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const achievements = [
    {
      id: 1,
      title: 'First Steps',
      description: 'Complete your first simulation',
      icon: '🎯',
      unlocked: true,
      rarity: 'common',
      gradient: 'from-gray-500 to-gray-600',
      points: 10,
      unlockedDate: 'Oct 15, 2025'
    },
    {
      id: 2,
      title: 'Triple Threat',
      description: 'Complete all three core simulations',
      icon: '⭐',
      unlocked: true,
      rarity: 'rare',
      gradient: 'from-blue-500 to-cyan-500',
      points: 50,
      unlockedDate: 'Oct 18, 2025'
    },
    {
      id: 3,
      title: 'Perfect Score',
      description: 'Achieve 100% in any simulation',
      icon: '💯',
      unlocked: true,
      rarity: 'epic',
      gradient: 'from-purple-500 to-pink-500',
      points: 100,
      unlockedDate: 'Oct 19, 2025'
    },
    {
      id: 4,
      title: 'Speed Demon',
      description: 'Complete a simulation in under 5 minutes',
      icon: '⚡',
      unlocked: false,
      rarity: 'rare',
      gradient: 'from-yellow-500 to-orange-500',
      points: 75
    },
    {
      id: 5,
      title: 'Week Warrior',
      description: 'Play simulations 7 days in a row',
      icon: '🔥',
      unlocked: false,
      rarity: 'epic',
      gradient: 'from-red-500 to-orange-500',
      points: 150
    },
    {
      id: 6,
      title: 'Jack of All Trades',
      description: 'Complete 10 different simulations',
      icon: '🎭',
      unlocked: false,
      rarity: 'legendary',
      gradient: 'from-purple-600 to-pink-600',
      points: 200
    },
    {
      id: 7,
      title: 'Master Communicator',
      description: 'Max out Communication skill to 100%',
      icon: '💬',
      unlocked: false,
      rarity: 'epic',
      gradient: 'from-green-500 to-emerald-500',
      points: 125
    },
    {
      id: 8,
      title: 'Problem Solver Elite',
      description: 'Max out Problem Solving skill to 100%',
      icon: '🧠',
      unlocked: false,
      rarity: 'epic',
      gradient: 'from-indigo-500 to-blue-500',
      points: 125
    },
    {
      id: 9,
      title: 'Social Butterfly',
      description: 'Share 5 achievements on social media',
      icon: '🦋',
      unlocked: false,
      rarity: 'common',
      gradient: 'from-pink-400 to-rose-400',
      points: 25
    },
    {
      id: 10,
      title: 'Night Owl',
      description: 'Complete a simulation after midnight',
      icon: '🦉',
      unlocked: false,
      rarity: 'rare',
      gradient: 'from-slate-600 to-slate-800',
      points: 50
    },
    {
      id: 11,
      title: 'Career Explorer',
      description: 'View all career recommendations',
      icon: '🧭',
      unlocked: false,
      rarity: 'common',
      gradient: 'from-teal-500 to-cyan-500',
      points: 15
    },
    {
      id: 12,
      title: 'Ultimate Champion',
      description: 'Unlock all other achievements',
      icon: '👑',
      unlocked: false,
      rarity: 'legendary',
      gradient: 'from-yellow-400 to-orange-600',
      points: 500
    }
  ];

  const stats = {
    total: achievements.length,
    unlocked: achievements.filter(a => a.unlocked).length,
    points: achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.points, 0)
  };

  const handleAchievementClick = (achievement) => {
    if (achievement.unlocked) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const getRarityBadge = (rarity) => {
    const badges = {
      common: { color: 'text-gray-400', bg: 'bg-gray-500/20', label: 'Common' },
      rare: { color: 'text-blue-400', bg: 'bg-blue-500/20', label: 'Rare' },
      epic: { color: 'text-purple-400', bg: 'bg-purple-500/20', label: 'Epic' },
      legendary: { color: 'text-yellow-400', bg: 'bg-yellow-500/20', label: 'Legendary' }
    };
    return badges[rarity];
  };

  return (
    <div className="min-h-screen px-4 py-24 relative overflow-hidden">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            🏆 Achievements
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Unlock badges and earn points as you progress
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-6 py-3">
              <div className="text-3xl font-bold text-purple-400">{stats.unlocked}/{stats.total}</div>
              <div className="text-sm text-gray-300">Unlocked</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-6 py-3">
              <div className="text-3xl font-bold text-yellow-400">{stats.points}</div>
              <div className="text-sm text-gray-300">Total Points</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-6 py-3">
              <div className="text-3xl font-bold text-green-400">{Math.round((stats.unlocked / stats.total) * 100)}%</div>
              <div className="text-sm text-gray-300">Completion</div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const rarityBadge = getRarityBadge(achievement.rarity);
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleAchievementClick(achievement)}
                className={`backdrop-blur-md border rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                  achievement.unlocked
                    ? 'bg-white/10 border-white/20 hover:bg-white/15 hover:scale-105'
                    : 'bg-white/5 border-white/10 opacity-60 grayscale'
                }`}
              >
                {/* Icon & Rarity */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center text-3xl shadow-lg ${
                    achievement.unlocked ? 'animate-bounce' : ''
                  }`}>
                    {achievement.unlocked ? achievement.icon : '🔒'}
                  </div>
                  <span className={`px-3 py-1 text-xs rounded-full ${rarityBadge.bg} ${rarityBadge.color} font-semibold`}>
                    {rarityBadge.label}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{achievement.description}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-white font-semibold">{achievement.points} pts</span>
                  </div>
                  {achievement.unlocked && (
                    <span className="text-xs text-green-400">{achievement.unlockedDate}</span>
                  )}
                  {!achievement.unlocked && (
                    <span className="text-xs text-gray-500">Locked</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            Pro Tips
          </h3>
          <ul className="space-y-2 text-gray-200">
            <li>• Complete simulations daily to unlock the "Week Warrior" badge</li>
            <li>• Try to get perfect scores for maximum points and rare achievements</li>
            <li>• Click on unlocked achievements to celebrate with confetti! 🎉</li>
            <li>• Share your achievements to unlock social badges</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AchievementsPage;
