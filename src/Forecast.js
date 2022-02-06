import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="week-days">
        <div className="row temp">
          <div className="col">16°C</div>
          <div className="col">16°C</div>
          <div className="col">16°C</div>
          <div className="col">16°C</div>
          <div className="col">16°C</div>
        </div>
        <div className="row">
          <div className="col">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#ffd608"
              size={40}
              animate={true}
            />
          </div>
          <div className="col">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#ffd608"
              size={40}
              animate={true}
            />
          </div>
          <div className="col">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#ffd608"
              size={40}
              animate={true}
            />
          </div>
          <div className="col">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#ffd608"
              size={40}
              animate={true}
            />
          </div>
          <div className="col">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#ffd608"
              size={40}
              animate={true}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">Friday</div>
          <div className="col">Saturday</div>
          <div className="col">Sunday</div>
          <div className="col">Monday</div>
          <div className="col">Tuesday</div>
        </div>
      </div>
    </div>
  );
}
