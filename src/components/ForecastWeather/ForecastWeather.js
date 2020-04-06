import React, { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import moment from 'moment';
import {
  ForecastWeatherStyled,
  ForecastHeading,
  TableHead,
  TableRow,
} from './ForecastWeather.style';

export const ForecastWeather = () => {
  const { weather } = useContext(WeatherContext);
  console.log('weather: ', weather);
  if (!weather) {
    return null;
  }
  const forecasts =
    weather.countries[0].locations[0].part_day_forecasts.forecasts;
  const countryCode = weather.countries[0].code;
  const cityName = weather.countries[0].locations[0].name;
  return (
    <ForecastWeatherStyled>
      <ForecastHeading>
        {cityName}, {countryCode}
      </ForecastHeading>
      <table>
        <TableHead>
          <TableRow>
            <th>Date/Time</th>
            <th>Temperature</th>
            <th>Wind Speed</th>
            <th>Wind Direction</th>
          </TableRow>
        </TableHead>
        <tbody>
          {forecasts.map((forecast) => {
            const dateTime = moment(forecast.local_time).format(
              'dddd, Do MMMM YYYY, h:mm a'
            );
            return (
              <TableRow key={forecast.timestamp}>
                <td>{dateTime}</td>
                <td>{forecast.temperature}°C</td>
                <td>{forecast.wind_speed} knots</td>
                <td>
                  {forecast.wind_direction}° {forecast.wind_direction_compass}
                </td>
              </TableRow>
            );
          })}
        </tbody>
      </table>
    </ForecastWeatherStyled>
  );
};
