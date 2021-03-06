import React from "react";
import FormattedDate from "./FormattedDate";


import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <main>
        <div className="container">
          <h1>{props.data.city}</h1>
          <div className="today-date">
            <FormattedDate date={props.data.date} />
          </div>
          <div className="row">
            <div className="col">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="col">
              <p className="description">{props.data.description}</p>

              <p className="bottom-margin">
                Wind: <span>{Math.round(props.data.wind)}</span> Km/h
              </p>
              <p>
                Humidity: <span>{props.data.humidity}</span>%
              </p>
              <span>
                <WeatherTemperature celcius={props.data.temperature} />
              </span>
            </div>
          </div>
          <div className="weather-forecast">
           
          </div>
        </div>
      </main>
    </div>
  );
}
