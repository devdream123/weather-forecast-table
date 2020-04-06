import React, { createContext, useState } from 'react';
import { getWeatherByLocCode } from '../data/api';
import countries from '../data/countries';

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [weather, setWeather] = useState();
  async function getWeatherData(locationCode) {
    try {
      const { data } = await getWeatherByLocCode(locationCode);
      setWeather(data);
      return data;
    } catch (error) {
      throw error;
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        countries,
        weather,
        getWeatherData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
