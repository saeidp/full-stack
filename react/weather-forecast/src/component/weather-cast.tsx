import React, { useEffect, useState } from 'react';
import { Weather } from '../api/weather-type';
import { fetchWeather } from '../api/weather-api';


export function WeatherCast() {
  const initialWeatherList: Weather[] = [];
  const [weatherList, setWeatherList] = useState(initialWeatherList);

  useEffect(() => {
    const fetch = async () => {
      console.log('Hello');
      const data = await fetchWeather();
      console.log(data);
      setWeatherList(data);


    };
    fetch();
  }, []);

  return (
    <div className='App-header'>
      {weatherList.map(x => (
        <h2>
          {x.summary}
        </h2>
      ))}
    </div>


  )
}





