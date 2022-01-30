import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Forecast from "./Forecast";
import "./Forecast.css";
export default function Weather() {
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
              <h1>Tokyo</h1>
              <p className="today-date">Mon 31 Jan</p>
              <div className="row">
                <div className="col">
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="#ffd608"
                    size={170}
                    animate={true}
                  />
                </div>
                <div className="col">
                  <p className="description">Clear</p>

                  <p className="bottom-margin">
                    Wind: <span>5</span>Km/h
                  </p>
                  <p>
                    Humidity: <span>81</span>%
                  </p>
                  <h3 className="display-2 fw-bolder">12</h3>
                  <div className="weather-temp">
                    <h3>
                      <p className="celcius">°C</p>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="weather-forecast">
                <Forecast />
              </div>
            </div>
          </main>
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/allapieczara/weather-react.git"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Alla pieczara
      </footer>
    </div>
  );
}
