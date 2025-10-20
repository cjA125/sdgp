import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import LandingPage from './components/LandingPage.jsx';
import GameSelectionPage from './components/GameSelectionPage.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import TeacherGame from './components/TeacherGame.jsx';
import DoctorGame from './components/DoctorGame.jsx';
import LawyerGame from './components/LawyerGame.jsx';
import AuthPage from './components/AuthPage.jsx';
import AchievementsPage from './components/AchievementsPage.jsx';
import CareerRecommendations from './components/CareerRecommendations.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-slate-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/select" element={<GameSelectionPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/game/teacher" element={<TeacherGame />} />
          <Route path="/game/doctor" element={<DoctorGame />} />
          <Route path="/game/lawyer" element={<LawyerGame />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/recommendations" element={<CareerRecommendations />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
