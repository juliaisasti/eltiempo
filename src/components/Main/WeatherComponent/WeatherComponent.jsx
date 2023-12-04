import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import WeatherList from "./WeatherList"
import WeatherForm from "./WeatherForm"

const WeatherComponent = () => {
  const [dataCity, setDataCity] = useState("");
  const [city, setCity] = useState("Madrid");

  // Fetch a la API para conseguir latitud y longitud
  useEffect(() => {
    const getCity = async () => {
      const resp = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=9648e99ac37fa5eee3a6b8955526e716`
      );
      console.log(city);
      const weather = resp.data[0];
      console.log(weather);
      if (weather.lat != undefined) {
        const resp = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${weather.lat}&lon=${weather.lon}&units=metric&appid=9648e99ac37fa5eee3a6b8955526e716`
        );
        const cityWeather = resp.data;
        console.log(cityWeather);
        setDataCity(cityWeather);
      }
    };
    getCity();
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputCity = e.target.ciudad.value;

    setCity(inputCity); // Modificando el estado de Value
    console.log(dataCity);
  };
  return (
    <>
    <WeatherForm handleSubmit={handleSubmit} />
    <WeatherList dataCity={dataCity} city={city}/>
    </>
  );
};

export default WeatherComponent;
