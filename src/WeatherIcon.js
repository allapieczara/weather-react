
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  switch (props.code) {
    case "Clear":
      return (
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="#ffd608"
          size={170}
          animate={true}
        />
      );
      break;
    case "Clouds":
      return (
        <ReactAnimatedWeather
          icon="CLOUDY"
          color="#3cc4fa"
          size={170}
          animate={true}
        />
      );
      break;
    case "Rain":
      return (
        <ReactAnimatedWeather
          icon="RAIN"
          color="#6aa3ba"
          size={170}
          animate={true}
        />
      );
      break;
    case "Snow":
      return (
        <ReactAnimatedWeather
          icon="SNOW"
          color="#65e3fc"
          size={170}
          animate={true}
        />
      );
      break;
    case "Drizzle":
      return (
        <ReactAnimatedWeather
          icon="RAIN"
          color="#6aa3ba"
          size={170}
          animate={true}
        />
      );
      break;
    case "Thunderstorm":
      return (
        <ReactAnimatedWeather
          icon="RAIN"
          color="#6aa3ba"
          size={170}
          animate={true}
        />
      );
      break;
    case "Mist":
      return (
        <ReactAnimatedWeather
          icon="FOG"
          color="#87c7d4"
          size={170}
          animate={true}
        />
      );
      break;
    default:
      return (
        <ReactAnimatedWeather
          icon="FOG"
          color="#87c7d4"
          size={170}
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
