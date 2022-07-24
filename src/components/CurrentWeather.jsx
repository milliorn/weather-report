/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "../css/CurrentWeather.css";
import { getMoonPhase, getWindDirection } from "../helper";
import { Bottom } from "./Bottom";
import { Forecast } from "./Forecast";
import { Middle } from "./Middle";
import { Top } from "./Top";

const CurrentWeather = ({ data }) => {
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

  const currentTime = parseTime(data.current.dt, data.timezone, "en-US");
  const sunrise = parseTime(data.current.sunrise, data.timezone, "en-US");
  const sunset = parseTime(data.current.sunset, data.timezone, "en-US");

  /**
   * 10km is the maximum reported distance which is why we cap miles at 6.0
   */
  const visibility =
    getMiles(data.current.visibility).toFixed(2) > 6.0
      ? "6.0"
      : getMiles(data.current.visibility).toFixed(2);

  /**
   * undefined is check here because there might be a case where this goes unreported resulting in NaN.
   */
  const wind_gust =
    Math.floor(data.current.wind_gust) < 0 ||
    data.current.wind_gust === undefined
      ? 0
      : Math.floor(data.current.wind_gust);
  const windDirection = getWindDirection(data.current.wind_deg);
  const windSpeed = Math.floor(data.current.wind_speed);

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
      <Forecast data={data} />
    </div>
  );

  /**
   * https://stackoverflow.com/a/8016205/11986604
   * split the string and pop the value we need, discard the rest.
   */
  function parseTime(time, timeZone, locale) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(time);
    return dateTime
      .toLocaleString("en-US", {
        timeZone: data.timezone,
      })
      .split(",")
      .pop();
  }

  /**
   * https://stackoverflow.com/a/20674508/11986604
   */
  function getMiles(meters) {
    return meters * 0.000621371192;
  }
};

export default CurrentWeather;
