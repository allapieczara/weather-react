import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Forecast from "./Forecast";
export default function Weather() {
  return (
    <div className="Weather">
      <div class="app-wrapper">
        <div class="app-body">
          <header>
            <form id="search-form" class="d-flex">
              <input
                placeholder="Type your city in here"
                class="form-control rounded"
                type="search"
                aria-label="Search"
                id="city-search"
              />
              <button class="btn btn-outline-primary" type="submit">
                Search
              </button>
              <button
                class="btn btn-outline-success"
                id="current-btn"
                type="button"
              >
                Current
              </button>
            </form>
          </header>
          <main>
            <div class="container">
              <h1 id="current-city">Tokyo</h1>
              <p id="today-date">Mon 31 Jan</p>
              <div class="row">
                <div class="col">
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="#ffd608"
                    size="170"
                    animate="true"
                  />
                </div>
                <div class="col" id="weather-info">
                  <p class="description" id="description">
                    Clear
                  </p>

                  <p class="bottom-margin">
                    Wind: <span id="wind">5</span>Km/h
                  </p>
                  <p>
                    Humidity: <span id="humidity">81</span>%
                  </p>
                  <h3 class="display-2 fw-bolder" id="current-temp">
                    12
                  </h3>
                  <div class="weather-temp">
                    <h3>
                      <a href="#" class="active" id="celcius">
                        °C
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div class="weather-forecast" id="forecast">
                <Forecast />
              </div>
            </div>
          </main>
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/allapieczara/Vanilla-Weather-App"
          target="_blank"
        >
          Open-source code
        </a>{" "}
        by Alla pieczara
      </footer>
    </div>
  );
}
