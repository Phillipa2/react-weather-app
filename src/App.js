import React from 'react';
import Weather from './Weather'

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div class="container">
      
      <Weather defaultCity="Nairobi"/>
      <footer>
        This project was coded by Phillipa Atieno and is{" "}
      <a href="https://github.com/Phillipa2/react-weather-app" target="_blank" rel="noopener noreferrer">open-sourced on GitHub</a>{" "}and{" "}<a href="https://creative-manatee-ed31c1.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a>.
      </footer>
      </div>
    </div>
  );
}

