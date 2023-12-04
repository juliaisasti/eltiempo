import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom"
import WeatherComponent from "./WeatherComponent";



const Main = () => {



  return (
    <main>
      <Routes>
        <Route path="/" element={<WeatherComponent />} />
      </Routes>
    </main>
  );
};

export default Main;
