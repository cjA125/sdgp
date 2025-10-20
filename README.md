# VocaLens - Career Path Discovery Platform

A modern, futuristic web application that helps users discover their ideal career path through AI-powered, realistic career simulations.

## 🎯 Features

- **Modern Glassmorphism UI**: Beautiful frosted glass design with purple accents
- **Career Simulations**: Interactive games for Teacher, Doctor, and Lawyer professions
- **Skill Tracking**: Profile page to track your progress and developed skills
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **React Router**: Smooth navigation between pages

## 🚀 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Google Fonts (Inter)** - Modern typography

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:3000`

## 🎮 Connecting Your Game Simulations

The website is ready to connect with your game simulations! Here's how:

### For Unity Games:
1. Build your Unity game for WebGL
2. Place the build files in the `public/games/` folder
3. Update the game component files to load your Unity game

### For Web-based Games:
1. Add your game files to the project
2. Import and render them in the respective game component:
   - `src/components/TeacherGame.js`
   - `src/components/DoctorGame.js`
   - `src/components/LawyerGame.js`

### Integration Points:
Each game page has a placeholder marked with:
```javascript
// TODO: Connect to actual game simulation here
```

Replace the alert/placeholder with your actual game loading logic.

## 📁 Project Structure

```
sdgpweb/
├── src/
│   ├── components/
│   │   ├── LandingPage.js      # Homepage
│   │   ├── GameSelectionPage.js # Choose simulation
│   │   ├── ProfilePage.js       # User progress
│   │   ├── Navbar.js            # Navigation
│   │   ├── TeacherGame.js       # Teacher simulation
│   │   ├── DoctorGame.js        # Doctor simulation
│   │   └── LawyerGame.js        # Lawyer simulation
│   ├── App.js                   # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Design System

- **Background**: Dark gradient (gray-900 → purple-900 → slate-800)
- **Primary Color**: Purple (#A855F7)
- **Text**: White and light gray
- **Style**: Glassmorphism with frosted glass effects
- **Font**: Inter (Google Fonts)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📝 Next Steps

1. ✅ Website structure is ready
2. 🎮 Connect your game simulations
3. 🔐 Add user authentication (optional)
4. 📊 Implement skill tracking logic
5. 🚀 Deploy to hosting platform

## 🌐 Deployment

To deploy your website:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to:
   - Vercel
   - Netlify
   - GitHub Pages
   - Or any static hosting service

## 📄 License

This project is ready for your game integration!

---

**Created with ❤️ for VocaLens**
