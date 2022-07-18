import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({ data, time }) => {
  const imageSrc = `icons/${data.weather[0].icon}.png`;

  const city = data.city;
  const description = data.weather[0].description;
  const heatIndex = Math.floor(data.main.feels_like);
  const humidity = data.main.humidity;
  const temp = Math.floor(data.main.temp);
  const visibility = getMiles(data.visibility).toFixed(2);

  const windDirection = getWindDirection(data.wind.deg);
  const windSpeed = Math.floor(data.wind.speed);

  const milliseconds = 1000; // we need this to convert to milliseconds for Date.
  const sunrise = getParsedTime(new Date(data.sys.sunrise * milliseconds));
  const sunset = getParsedTime(new Date(data.sys.sunset * milliseconds));
  const currentTime = time.time_12.replace(/^(?:00:)?0?/, ""); // https://stackoverflow.com/a/42879207/11986604

  return (
    <div className="weather w-80 rounded-md	text-white">
      <div className="top">
        <div>
          <p className="city">{city}</p>
          <p className="weather-desc">{description}</p>
          <div className="section-row">
            <span className="section-row">{currentTime}</span>
          </div>
        </div>
        <img
          src={imageSrc}
          alt="current-weather"
          className="icon-current-weather"
        />
      </div>
      <div className="bottom">
        <p className="temperature">{temp}°F</p>
        <div className="details">
          <div className="section-row">
            <span className="section-name">Feels like</span>
            <span className="section-result"> {heatIndex}°F</span>
          </div>
          <div className="section-row">
            <span className="section-name">Humidity</span>
            <span className="section-result"> {humidity}%</span>
          </div>
          <div className="section-row">
            <span className="section-name">Wind</span>
            <span className="section-result">
              {windSpeed} mph {windDirection}
            </span>
          </div>
          <div className="section-row">
            <span className="section-name">Sunrise</span>
            <span className="section-result">{sunrise}</span>
          </div>
          <div className="section-row">
            <span className="section-name">Sunset</span>
            <span className="section-result">{sunset}</span>
          </div>
          <div className="section-row">
            <span className="section-name">Visibility</span>
            <span className="section-result">{visibility} miles</span>
          </div>
        </div>
      </div>
    </div>
  );

  /**
   * https://stackoverflow.com/a/20674508/11986604
   */
  function getMiles(meters) {
    return meters * 0.000621371192;
  }

  function getParsedTime(time) {
    let [hours, minutes] = time.toTimeString().split(" ")[0].split(":");
    const rawString = parseInt(hours);
    let amPm = "AM";
    if (rawString > 12) {
      hours = Math.abs(12 - rawString).toString(); // make adjustment from 24 to 12 hours.
      amPm = "PM";
    }
    return +hours + ":" + minutes + " " + amPm; // unary + operator to remove leading zeros.
  }

  /**
   * https://stackoverflow.com/a/57769076/11986604
   */
  function getWindDirection(direction) {
    return [
      "N",
      "N/NE",
      "N/E",
      "E/NE",
      "E",
      "E/SE",
      "SE",
      "S/SE",
      "S",
      "S/SW",
      "SW",
      "W/SW",
      "W",
      "W/NW",
      "NW",
      "N/NW",
    ][Math.round(direction / 22.5) % 16];
  }
};

export default CurrentWeather;
