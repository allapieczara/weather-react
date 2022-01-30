import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="week-days">
        <div class="row">
          <div class="col">16°C</div>
          <div class="col">16°C</div>
          <div class="col">16°C</div>
          <div class="col">16°C</div>
          <div class="col">16°C</div>
        </div>
        <div class="row">
          <div class="col">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#ffd608"
              size="40"
              animate="true"
            />
          </div>
          <div class="col">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#ffd608"
              size="40"
              animate="true"
            />
          </div>
          <div class="col">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#ffd608"
              size="40"
              animate="true"
            />
          </div>
          <div class="col">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#ffd608"
              size="40"
              animate="true"
            />
          </div>
          <div class="col">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#ffd608"
              size="40"
              animate="true"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">Friday</div>
          <div class="col">Saturday</div>
          <div class="col">Sunday</div>
          <div class="col">Monday</div>
          <div class="col">Tuesday</div>
        </div>
      </div>
    </div>
  );
}
