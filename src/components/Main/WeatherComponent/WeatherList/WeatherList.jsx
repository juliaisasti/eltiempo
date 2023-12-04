import React from "react";
import WeatherCard from "./WeatherCard";
import { v4 as uuidv4 } from 'uuid';

const WeatherList = ({dataCity, city}) => {

  const paintCard = () => {
    // leer estado de array deseos y devolver array componentes producto
    return dataCity.list.map((weather) => 
    <WeatherCard 
      key={uuidv4()} 
      date={weather.dt_txt} 
      degrees={weather.main.temp} 
      humidity={weather.main.humidity}
      sky={weather.weather[0].main} 
      sky_description={weather.weather[0].description}
      icon={weather.weather[0].icon} />) 
  }

  return (
    <>
    <h1>The weather in {city}</h1>
    {dataCity ? paintCard() : ""}
    
    </>
  )
};

export default WeatherList;
