import React from "react";
import WeatherIconForecast from "./WeatherIconForecast";

export default function WeatherForecastDaily(props) {
  function maxTemperature() {
    console.log(props.data);
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDaily">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIconForecast code={props.data.weather[0].main} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
