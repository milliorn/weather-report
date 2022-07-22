import React from "react";
import { Bottom } from "./Bottom";
import "./CurrentWeather.css";
import { Middle } from "./Middle";
import { Top } from "./Top";

const CurrentWeather = ({ data }) => {
  //console.log(data);

  const city = data.city.substr(0, data.city.indexOf(",")); // Parse city name and omit the rest.
  const clouds = data.current.clouds;
  const dailyHigh = Math.floor(data.daily[0].temp.max);
  const dailyLow = Math.floor(data.daily[0].temp.min);
  const description = data.current.weather[0].description;
  const dew_point = Math.floor(data.current.dew_point);
  const heatIndex = Math.floor(data.current.feels_like);
  const humidity = data.current.humidity;
  const moonPhase = getMoonPhase(data.daily[0].moon_phase);
  const temp = Math.floor(data.current.temp);
  const uvi = data.current.uvi;

  /**
   * 10km is the maximum reported distance which is why we cap miles at 6.0
   */
  const visibility =
    getMiles(data.current.visibility).toFixed(2) > 6.0
      ? "6.0 Miles"
      : getMiles(data.current.visibility).toFixed(2) + " Miles";

  /**
   * undefined is check here because there might be a case where this goes unreported resulting in NaN.
   */
  const wind_gust =
    Math.floor(data.current.wind_gust) < 0 ||
    data.current.wind_gust === undefined
      ? 0.0
      : Math.floor(data.current.wind_gust);
  const windDirection = getWindDirection(data.current.wind_deg);
  const windSpeed = Math.floor(data.current.wind_speed);

  /**
   * https://stackoverflow.com/a/8016205/11986604
   * split the string up so we can parse it and then pop the value we need and discard the rest.
   */
  const sunriseRaw = data.current.sunrise;
  let sunriseTime = new Date(0);
  sunriseTime.setUTCSeconds(sunriseRaw);
  const sunrise = sunriseTime
    .toLocaleString("en-US", {
      timeZone: data.timezone,
    })
    .split(",")
    .pop();

  const sunsetRaw = data.current.sunset;
  let sunsetTime = new Date(0);
  sunsetTime.setUTCSeconds(sunsetRaw);
  const sunset = sunsetTime
    .toLocaleString("en-US", {
      timeZone: data.timezone,
    })
    .split(",")
    .pop();

  const timeRaw = data.current.dt;
  let timeDate = new Date(0);
  timeDate.setUTCSeconds(timeRaw);
  const currentTime = timeDate
    .toLocaleString("en-US", {
      timeZone: data.timezone,
    })
    .split(",")
    .pop();

  /**
   * Parse string to be readable
   */
  const timezone = data.timezone.replace(/[^a-zA-Z ]/g, ", ");

  return (
    <div className="w-auto h-full text-white weather sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
      <Top city={city} currentTime={currentTime} />
      <Middle
        dailyHigh={dailyHigh}
        dailyLow={dailyLow}
        description={description}
        temp={temp}
      />
      <Bottom
        clouds={clouds}
        dew_point={dew_point}
        heatIndex={heatIndex}
        humidity={humidity}
        moonPhase={moonPhase}
        sunrise={sunrise}
        sunset={sunset}
        timezone={timezone}
        uvi={uvi}
        visibility={visibility}
        windDirection={windDirection}
        windSpeed={windSpeed}
        wind_gust={wind_gust}
      />
    </div>
  );

  function getMoonPhase(phase) {
    let phaseType = "";
    /**
     * https://www.visualcrossing.com/resources/documentation/weather-api/how-to-include-sunrise-sunset-and-moon-phase-data-into-your-api-requests/
     */
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
