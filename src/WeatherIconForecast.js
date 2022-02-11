import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIconForecast(props) {
  switch (props.code) {
    case "Clear":
      return (
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="#ffd608"
          size={40}
          animate={true}
        />
      );

    case "Clouds":
      return (
        <ReactAnimatedWeather
          icon="CLOUDY"
          color="#3cc4fa"
          size={40}
          animate={true}
        />
      );

    case "Rain":
      return (
        <ReactAnimatedWeather
          icon="RAIN"
          color="#6aa3ba"
          size={40}
          animate={true}
        />
      );

    case "Snow":
      return (
        <ReactAnimatedWeather
          icon="SNOW"
          color="#65e3fc"
          size={40}
          animate={true}
        />
      );

    case "Drizzle":
      return (
        <ReactAnimatedWeather
          icon="RAIN"
          color="#6aa3ba"
          size={40}
          animate={true}
        />
      );

    case "Thunderstorm":
      return (
        <ReactAnimatedWeather
          icon="RAIN"
          color="#6aa3ba"
          size={40}
          animate={true}
        />
      );

    case "Mist":
      return (
        <ReactAnimatedWeather
          icon="FOG"
          color="#87c7d4"
          size={40}
          animate={true}
        />
      );

    default:
      return (
        <ReactAnimatedWeather
          icon="FOG"
          color="#87c7d4"
          size={40}
          animate={true}
        />
      );
  }
}

/*<ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="#ffd608"
          size={170}
          animate={true}
        />  */
