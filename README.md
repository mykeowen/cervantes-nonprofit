# Agrovia Foundation (React + Vite)

A two-page non-profit website: Home and About.

## Run it
    npm install
    npm run dev

Open the address Vite prints (usually http://localhost:5173).

## Build for production
    npm run build
    npm run preview

## Structure
    src/
    ├── assets/
    │   ├── images/          photos
    │   └── images.js        one place that imports every photo
    ├── components/
    │   ├── Navbar.jsx       top navigation (Home, About, theme toggle)
    │   ├── Footer.jsx
    │   ├── Hero.jsx         homepage slideshow
    │   ├── Card.jsx         reusable card for programs and stories
    │   ├── DonateBox.jsx    donation picker
    │   └── ContactForm.jsx  "Say hello" form
    ├── data/content.js      all text content
    ├── hooks/useTheme.js    light/dark theme
    ├── pages/
    │   ├── Home.jsx
    │   └── About.jsx
    ├── App.jsx              routes
    ├── index.css            styles and themes
    └── main.jsx             entry point
