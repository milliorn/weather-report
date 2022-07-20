import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({ data, time }) => {
  console.log(data);

  const description = data.current.weather[0].description;
  const dew_point = Math.floor(data.current.dew_point);
  const heatIndex = Math.floor(data.current.feels_like);
  const humidity = data.current.humidity;
  const moonPhase = getMoonPhase(data.daily[0].moon_phase);
  const temp = Math.floor(data.current.temp);
  const uvi = data.current.uvi;
  const visibility =
    getMiles(data.current.visibility).toFixed(2) > 6.0
      ? "6 Miles"
      : getMiles(data.current.visibility).toFixed(2) + " Miles";

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
    <div className="text-white weather sm:w-96">
      <div className="flex items-center justify-between top">
        <div>
          <p className="m-0 leading-10 capitalize weather-desc sm:text-xl md:text-2xl">
            {description}
          </p>
          <div className="flex justify-between text-xs capitalize section-row">
            <span className="flex justify-between text-lg font-semibold capitalize sm:text-2xl md:text-3xl section-row">
              {currentTime}
            </span>
          </div>
        </div>
        <p className="temperature font drop-shadow-md	text-7xl w-auto	tracking-tighter my-2.5	mx-0">
          {temp}°F
        </p>
      </div>
      <div className="flex items-center justify-between bottom">
        <div className="temperature font-semibold drop-shadow-md w-auto	tracking-tighter my-2.5	mx-0 sm:text-xl md:text-2xl">
          <span>Low/High</span>
          <p className="sm:text-2xl md:text-3xl">
            {Math.floor(data.daily[0].temp.min)}°F /{" "}
            {Math.floor(data.daily[0].temp.max)}°F
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between bottom">
        <div className="w-full p-1 details">
          <div className="flex justify-between text-xs capitalize section-row">
            <span className="text-left section-name sm:text-lg md:text-xl">
              Feels like
            </span>
            <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
              {heatIndex}°F
            </span>
          </div>
          <div className="flex justify-between text-xs capitalize section-row">
            <span className="text-left section-name sm:text-lg md:text-xl">
              Dew Point
            </span>
            <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
              {dew_point}°F
            </span>
          </div>
          <div className="flex justify-between text-xs capitalize section-row">
            <span className="text-left section-name sm:text-lg md:text-xl">
              Humidity
            </span>
            <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
              {humidity}%
            </span>
          </div>
          <div className="flex justify-between text-xs capitalize section-row">
            <span className="text-left section-name sm:text-lg md:text-xl">
              Wind
            </span>
            <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
              {windSpeed} mph {windDirection}
            </span>
          </div>
          <div className="flex justify-between text-xs capitalize section-row">
            <span className="text-left section-name sm:text-lg md:text-xl">
              Gust
            </span>
            <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
              {wind_gust} mph {windDirection}
            </span>
          </div>
          <div className="flex justify-between text-xs capitalize section-row">
            <span className="text-left section-name sm:text-lg md:text-xl">
              Sunrise
            </span>
            <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
              {sunrise}
            </span>
          </div>
          <div className="flex justify-between text-xs capitalize section-row">
            <span className="text-left section-name sm:text-lg md:text-xl">
              Sunset
            </span>
            <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
              {sunset}
            </span>
          </div>
          <div className="flex justify-between text-xs capitalize section-row">
            <span className="text-left section-name sm:text-lg md:text-xl">
              UV Index
            </span>
            <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
              {uvi}
            </span>
          </div>
          <div className="flex justify-between text-xs capitalize section-row">
            <span className="text-left section-name sm:text-lg md:text-xl">
              Clouds
            </span>
            <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
              {data.current.clouds}%
            </span>
          </div>
          <div className="flex justify-between text-xs capitalize section-row">
            <span className="text-left section-name sm:text-lg md:text-xl">
              Visibility
            </span>
            <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
              {visibility}
            </span>
          </div>
          <div className="flex justify-between text-xs capitalize section-row">
            <span className="text-left section-name sm:text-lg md:text-xl">
              Moon
            </span>
            <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
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
