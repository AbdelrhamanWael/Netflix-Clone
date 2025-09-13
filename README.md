# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


````markdown
# 🎬 Movie Discovery App

## 📋 Project Overview
A modern web application that allows users to discover movies, watch trailers, and explore categories.  
Built with **React + Vite** and powered by **Firebase** & **TMDB API**, the app ensures a smooth and responsive user experience.

### ✨ Highlights
- 🔐 Authentication (Signup, Login, Validation)
- 🎥 Movie discovery by categories
- ▶️ Video player with trailer playback
- 📱 Responsive UI/UX design
- 🧭 Intuitive navigation components

---

## 🛠️ Technology Stack

**Frontend:**  
![React](https://img.shields.io/badge/React-18.2.0-blue)  
![Vite](https://img.shields.io/badge/Vite-4.0-646CFF)  
![CSS3](https://img.shields.io/badge/CSS3-1572B6)

**Backend & APIs:**  
![Firebase](https://img.shields.io/badge/Firebase-9.0-orange)  
![Firestore](https://img.shields.io/badge/Firestore-Enabled-yellow)  
![TMDB](https://img.shields.io/badge/TMDB-API-green)

**UI Libraries:**  
![Toastify](https://img.shields.io/badge/React--Toastify-Enabled-purple)  
![Firebase Hooks](https://img.shields.io/badge/Firebase%20Hooks-Ready-lightgrey)

**Dev Tools:**  
![ESLint](https://img.shields.io/badge/ESLint-Enabled-blueviolet)  
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6)

---

## 🚀 Setup Instructions

### ✅ Prerequisites
- Node.js >= 16
- Firebase project & API keys
- TMDB API key

### ⚙️ Installation
```bash
# Clone repository
git clone https://github.com/your-username/your-repo.git

# Navigate to project
cd your-repo

# Install dependencies
npm install
````

### 🔑 Environment Variables

Create a `.env` file in the root folder:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_TMDB_API_KEY=your_tmdb_api_key
```

### ▶️ Running the App

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

---

## 📁 Project Structure

```
src/
 ├── components/      # Reusable UI components
 ├── pages/           # Page-level components
 ├── services/        # API and Firebase logic
 ├── hooks/           # Custom React hooks
 ├── assets/          # Images, icons, etc.
 └── App.tsx          # Main application entry
```

---

## 🎯 Feature Explanations

* **Authentication Flow**: Signup/login with Firebase Auth + validation
* **Movie Data Flow**: TMDB API for movie lists, categories, and details
* **Responsive Design**: Mobile-first UI with adaptive layouts

---

## 🔧 Configuration Guide

### 🔥 Firebase Setup

```javascript
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

export const app = initializeApp(firebaseConfig);
```

### 🎬 TMDB API

Use the TMDB API with your key:

```javascript
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return res.json();
};
```

---

## 🐛 Troubleshooting

* **Firebase errors** → Check API keys in `.env`
* **CORS issues** → Ensure TMDB API requests include HTTPS
* **Build fails** → Run `npm run lint` to fix ESLint issues

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m "Added new feature"`)
4. Push to branch (`git push origin feature-branch`)
5. Open a Pull Request

---

## 📞 Support

* 📚 [Firebase Docs](https://firebase.google.com/docs)
* 🎬 [TMDB API Docs](https://developers.themoviedb.org/3)
* 🛠️ Open an issue in this repo for help

---

