import React from "react";
import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast";
import "./Forecast.css";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <main>
          <div className="container">
            <h1>{props.data.city}</h1>
            <div className="today-date">
              <FormattedDate date={props.data.date} />
            </div>
            <div className="row">
              <div className="col">{props.data.icon}</div>
              <div className="col">
                <p className="description">{props.data.description}</p>

                <p className="bottom-margin">
                  Wind: <span>{Math.round(props.data.wind)}</span> Km/h
                </p>
                <p>
                  Humidity: <span>{props.data.humidity}</span>%
                </p>
                <span>
                  <h3 className="display-2 fw-bolder">
                    {Math.round(props.data.temperature)}
                  </h3>
                  <div className="weather-temp">
                    <h3>
                      <p className="celcius">°C</p>
                    </h3>
                  </div>
                </span>
              </div>
            </div>
            <div className="weather-forecast">
              <Forecast />
            </div>
          </div>
        </main>
      </div>
    );
}