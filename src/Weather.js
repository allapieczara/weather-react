import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      coordinates: response.data.coord,
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].main,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let metric = "&units=metric";

    const apiKey = "b015cb71b14a6b0a5f7551a9ef540747";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}${metric}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="app-wrapper">
          <div className="app-body">
            <header>
              <form className="d-flex" onSubmit={handleSubmit}>
                <input
                  placeholder="Type your city in here"
                  className="form-control rounded"
                  type="search"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <button
                  className="btn btn-outline-primary"
                  type="submit"
                  value="Search"
                >
                  Search
                </button>
              </form>
            </header>
            <WeatherInfo data={weatherData} />
            <Forecast code="Clear" coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
