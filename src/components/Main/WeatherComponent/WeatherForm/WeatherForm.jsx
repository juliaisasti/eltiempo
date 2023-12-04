import React from "react";

import "./WeatherForm.css";

const WeatherForm = ({ handleSubmit }) => {

  return (
    <section>
      <h1>Weather App</h1>
      <h2>Search by city</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="ciudad" placeholder="City" />
        <br />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default WeatherForm;
