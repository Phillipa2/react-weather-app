import React from 'react';
import Weather from './Weather'

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div class="container">
      
      <Weather />
      <footer>
        This project was coded by Phillipa Atieno and is{" "}
      <a href="https://github.com/Phillipa2/react-weather-app" target="_blank" rel="noreferrer">open-sourced on GitHub.</a>
      </footer>
      </div>
    </div>
  );
}

