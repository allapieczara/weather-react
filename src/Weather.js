import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import Forecast from "./Forecast";
import "./Forecast.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data.dt);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.date.dt * 1000),
      icon: (
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="#ffd608"
          size={170}
          animate={true}
        />
      ),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="app-wrapper">
          <div className="app-body">
            <header>
              <form className="d-flex">
                <input
                  placeholder="Type your city in here"
                  className="form-control rounded"
                  type="search"
                  aria-label="Search"
                  id="city-search"
                  autoFocus="on"
                />
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
                <button
                  className="btn btn-outline-success"
                  id="current-btn"
                  type="button"
                >
                  Current
                </button>
              </form>
            </header>
            <main>
              <div className="container">
                <h1>{weatherData.city}</h1>
                <p className="today-date">
                  <FormattedDate date={weatherData.date} />
                </p>
                <div className="row">
                  <div className="col">{weatherData.icon}</div>
                  <div className="col">
                    <p className="description">{weatherData.description}</p>

                    <p className="bottom-margin">
                      Wind: <span>{Math.round(weatherData.wind)}</span> Km/h
                    </p>
                    <p>
                      Humidity: <span>{weatherData.humidity}</span>%
                    </p>
                    <span>
                      <h3 className="display-2 fw-bolder">
                        {Math.round(weatherData.temperature)}
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
        </div>
      </div>
    );
  } else {
    let metric = "&units=metric";

    const apiKey = "38d62e96e6e4fcc736d1b2b751f08c2d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}${metric}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
