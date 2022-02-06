import react, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <h3 className="display-2 fw-bolder">{Math.round(props.celcius)}</h3>
        <div className="weather-temp">
          <h3>
            <p className="celcius">
              °C |{" "}
              <a href="/" onClick={showFahrenheit}>
                °F
              </a>
            </p>
          </h3>
        </div>
      </div>
    );
  } else {
let fahrenheit = (props.celcius * 9/5) + 32;

    return (
      <div className="WeatherTemperature">
        <h3 className="display-2 fw-bolder">{Math.round(fahrenheit)}</h3>
        <div className="weather-temp">
          <h3>
            <p className="celcius">
              <a href="/" onClick={showCelcius}>
                °C{" "}
              </a>{" "}
              | °F
            </p>
          </h3>
        </div>
      </div>
    );
  }
}
