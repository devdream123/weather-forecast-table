import React from 'react';
import TopBar from '../components/TopBar';
import ForecastWeather from '../components/ForecastWeather';
import { WeatherProvider } from '../context/WeatherContext';
import { AppStyled } from './App.style.js';

function App() {
  return (
    <WeatherProvider>
      <AppStyled>
        <TopBar />
        <ForecastWeather />
      </AppStyled>
    </WeatherProvider>
  );
}

export default App;
