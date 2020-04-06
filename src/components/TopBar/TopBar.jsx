import React, { useState, useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import {
  TopBarStyled,
  DropdownContainer,
  DropdownLabel,
  DropDownList,
  SearchButton,
} from './TopBar.style';

export const TopBar = () => {
  const { getWeatherData, countries } = useContext(WeatherContext);
  const [locationCode, setLocationCode] = useState(
    countries['Australia'][0].code
  );
  const handleLocationChange = (e) => {
    e.preventDefault();
    const location = e.target.value;
    setLocationCode(location);
  };

  const submitQuery = (e) => {
    e.preventDefault();
    getWeatherData(locationCode);
  };

  return (
    <TopBarStyled onSubmit={submitQuery}>
      <DropdownContainer>
        <DropdownLabel>Select a location:</DropdownLabel>
        <DropDownList value={locationCode} onChange={handleLocationChange}>
          {countries['Australia'].map((country) => (
            <option key={country.code} value={country.code}>
              {country.location}
            </option>
          ))}
        </DropDownList>
      </DropdownContainer>
      <SearchButton type='submit'>Search</SearchButton>
    </TopBarStyled>
  );
};
