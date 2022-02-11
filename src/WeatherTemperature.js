import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <h3 className="display-2 fw-bolder">{Math.round(props.celcius)}</h3>
      <div className="weather-temp">
        <h3>
          <p className="celcius">°C</p>
        </h3>
      </div>
    </div>
  );
}
