import axios from 'axios';

export const getWeatherByLocCode = (locationCode, hours = 24) => {
  return axios.get(
    `https://ws.weatherzone.com.au/?lt=aploc&lc=${locationCode}&locdet=1&latlon=1&pdf=twc(period=${hours},detail=2)&u=1&format=json`
  );
};
