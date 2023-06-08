# Gr8fit Weather Task

A fully responsive weather application.

## Technology used

- 📦 TypeScript.JS (create-react-app --template typescript)
- 🎨 Tailwind CSS for styling
- 🎨 MUI icons for icons.
- 🌥️ OpenWeather map API for weather forecast.

In the project directory, you can run:

## Cloning into this repo
- First fork this repository to have it in your GitHub repo(optional).
- git clone https://github.com/Dhei-vid/weather-gr8fit/.git in terminal.
- cd into the project folder.

## Getting the API Key
- Navigate to https://openweathermap.org/
- if (have account) {
    sign in
  } else {
    sign up
  }
- Get the free API key
- create a .env file in src 
- type 
```
REACT_APP_OPEN_WEATHER_API_KEY={API KEY}
```

## Installation

- After opening project on preferred IDE (vs code, atom...)
- In the terminal type "npm install" (to install dependencies).
- Then run dev server with:

```
  npm start
  or
  yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure


```
T-Weather
└─ weather
   ├─ .env
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ favicon.ico
   │  ├─ index.html
   │  ├─ logo192.png
   │  ├─ logo512.png
   │  ├─ manifest.json
   │  └─ robots.txt
   ├─ README.md
   ├─ src
   │  ├─ App.test.tsx
   │  ├─ App.tsx
   │  ├─ assets
   │  │  ├─ weather_logo.png
   │  │  └─ weather_logo_svg.svg
   │  ├─ component
   │  │  ├─ error
   │  │  │  └─ error.component.tsx
   │  │  ├─ layout
   │  │  │  └─ weather.layout.component.tsx
   │  │  └─ utility
   │  │     ├─ banner.component.tsx
   │  │     └─ searchbar.component.tsx
   │  ├─ index.css
   │  ├─ index.tsx
   │  ├─ logo.svg
   │  ├─ react-app-env.d.ts
   │  ├─ reportWebVitals.ts
   │  ├─ setupTests.ts
   │  └─ types
   │     └─ types.ts
   ├─ tailwind.config.js
   └─ tsconfig.json

```
