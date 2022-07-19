import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({ data, time }) => {
  const imageSrc = `icons/${data.current.weather[0].icon}.png`;

  console.log(data);

  const city = data.current.city;
  const description = data.current.weather[0].description;
  const dew_point = Math.floor(data.current.dew_point);
  const heatIndex = Math.floor(data.current.feels_like);
  const humidity = data.current.humidity;
  const temp = Math.floor(data.current.temp);
  const uvi = data.current.uvi;
  const visibility = getMiles(data.current.visibility).toFixed(2);
  const moonPhase = getMoonPhase(data.daily[0].moon_phase);

  const wind_gust =
    Math.floor(data.current.wind_gust) < 0 ||
    data.current.wind_gust === undefined
      ? 0.0
      : Math.floor(data.current.wind_gust);
  const windDirection = getWindDirection(data.current.wind_deg);
  const windSpeed = Math.floor(data.current.wind_speed);

  const milliseconds = 1000; // we need this to convert to milliseconds for Date.
  const sunrise = getParsedTime(new Date(data.current.sunrise * milliseconds));
  const sunset = getParsedTime(new Date(data.current.sunset * milliseconds));
  const currentTime = time.time_12.replace(/^(?:00:)?0?/, ""); // https://stackoverflow.com/a/42879207/11986604

  return (
    <div className="weather sm:w-96 rounded-md	text-white">
      <div className="top flex justify-between items-center">
        <div>
          <p className="city font-semibold drop-shadow-md text-lg	m-0 tracking-widest">
            {city}
          </p>
          <p className="weather-desc leading-10 m-0 capitalize">
            {description}
          </p>
          <div className="section-row flex justify-between text-xs capitalize">
            <span className="section-row font-semibold flex justify-between text-xs capitalize">
              {currentTime}
            </span>
          </div>
        </div>
        <img
          src={imageSrc}
          alt="current-weather"
          className="icon-current-weather w-28"
        />
      </div>
      <div className="bottom flex justify-between items-center">
        <div className="temperature font-semibold drop-shadow-md w-auto	tracking-tighter my-2.5	mx-0">
          <span>Low/High</span>
          <p>
            {Math.floor(data.daily[0].temp.min)}°F /{" "}
            {Math.floor(data.daily[0].temp.max)}°F
          </p>
        </div>
      </div>
      <div className="bottom flex justify-between items-center">
        <p className="temperature font drop-shadow-md	text-7xl w-auto	tracking-tighter my-2.5	mx-0">
          {temp}°F
        </p>
        <div className="details w-full pl-5">
          <div className="section-row flex justify-between text-xs capitalize">
            <span className="section-name text-left	">Feels like</span>
            <span className="section-result text-right font-semibold drop-shadow-md text-xs">
              {heatIndex}°F
            </span>
          </div>
          <div className="section-row flex justify-between text-xs capitalize">
            <span className="section-name text-left	">Dew Point</span>
            <span className="section-result text-right font-semibold drop-shadow-md text-xs">
              {dew_point}°F
            </span>
          </div>
          <div className="section-row flex justify-between text-xs capitalize">
            <span className="section-name text-left	">Humidity</span>
            <span className="section-result text-right font-semibold drop-shadow-md text-xs">
              {humidity}%
            </span>
          </div>
          <div className="section-row flex justify-between text-xs capitalize">
            <span className="section-name text-left	">Wind</span>
            <span className="section-result text-right font-semibold drop-shadow-md text-xs">
              {windSpeed} mph {windDirection}
            </span>
          </div>
          <div className="section-row flex justify-between text-xs capitalize">
            <span className="section-name text-left	">Gust</span>
            <span className="section-result text-right font-semibold drop-shadow-md text-xs">
              {wind_gust} mph {windDirection}
            </span>
          </div>
          <div className="section-row flex justify-between text-xs capitalize">
            <span className="section-name text-left	">Sunrise</span>
            <span className="section-result text-right font-semibold drop-shadow-md text-xs">
              {sunrise}
            </span>
          </div>
          <div className="section-row flex justify-between text-xs capitalize">
            <span className="section-name text-left	">Sunset</span>
            <span className="section-result text-right font-semibold drop-shadow-md text-xs">
              {sunset}
            </span>
          </div>
          <div className="section-row flex justify-between text-xs capitalize">
            <span className="section-name text-left	">UV Index</span>
            <span className="section-result text-right font-semibold drop-shadow-md text-xs">
              {uvi}
            </span>
          </div>
          <div className="section-row flex justify-between text-xs capitalize">
            <span className="section-name text-left	">Clouds</span>
            <span className="section-result text-right font-semibold drop-shadow-md text-xs">
              {data.current.clouds}%
            </span>
          </div>
          <div className="section-row flex justify-between text-xs capitalize">
            <span className="section-name text-left	">Visibility</span>
            <span className="section-result text-right font-semibold drop-shadow-md text-xs">
              {visibility} miles
            </span>
          </div>
          <div className="section-row flex justify-between text-xs capitalize">
            <span className="section-name text-left	">Moon</span>
            <span className="section-result text-right font-semibold drop-shadow-md text-xs">
              {moonPhase}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  function getMoonPhase(phase) {
    let phaseType = "";

    //https://www.visualcrossing.com/resources/documentation/weather-api/how-to-include-sunrise-sunset-and-moon-phase-data-into-your-api-requests/
    if (phase > 0 && phase < 0.25) phaseType = "Waxing Crescent";
    else if (phase > 0 && phase < 0.25) phaseType = "Waxing Crescent";
    else if (phase === 0.25) phaseType = "First Quarter";
    else if (phase > 0.25 && phase < 0.5) phaseType = "Waxing Gibbous";
    else if (phase === 0.5) phaseType = "Full Moon";
    else if (phase > 0.5 && phase < 0.75) phaseType = "Waning Gibbous";
    else if (phase === 0.75) phaseType = "Last Quarter";
    else if (phase > 0.75 && phase < 1) phaseType = "Waning Crescent";
    else phaseType = "New Moon";

    return phaseType;
  }

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
