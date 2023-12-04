import React from "react";

const WeatherCard = ({ date, degrees, humidity, sky, sky_description, icon }) => {
  return (
    <section className="weatherCard">
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <h5>{date}</h5>
      <h3>It's {degrees}ºC</h3>
      <h3>The humidity is {humidity}%</h3>
      <h3>{sky}</h3>
      <h5>{sky_description}</h5>
    </section>
  );
};

export default WeatherCard;
