"use client";

import { MAX_VISIBILITY_MILES } from "../config";
import "../css/current-weather.css";
import { getMiles, getMoonPhase, getWindDirection, parseTime } from "../helper";
import {
  CurrentWeatherData,
  CurrentWeatherProps
} from "../models/componentProps";
import Bottom from "./Bottom";
import Forecast from "./Forecast";
import Middle from "./Middle";
import Top from "./Top";

/**
 * Parses the weather data to be used in the component.
 *
 * @param data - The weather data to be parsed.
 * @returns The parsed weather data.
 */
const parseWeatherData = (data: CurrentWeatherData) => ({
  alert: data.alerts,
  clouds: data.current.clouds,
  dailyHigh: Math.floor(data.daily[0].temp.max),
  dailyLow: Math.floor(data.daily[0].temp.min),
  description: data.current.weather[0].description,
  dewPoint: Math.floor(data.current.dew_point),
  heatIndex: Math.floor(data.current.feels_like),
  humidity: data.current.humidity,
  moonPhase: getMoonPhase(data.daily[0].moon_phase),
  temp: Math.floor(data.current.temp),
  timezone: data.timezone,
  uvi: data.current.uvi,
  visibility: getVisibility(data.current.visibility),
  windDirection: getWindDirection(data.current.wind_deg),
  windGust: getWindGust(data.current.wind_gust),
  windSpeed: Math.floor(data.current.wind_speed)
});

/**
 * Parses the city name from a string that includes the city and state.
 *
 * @param city - The string containing the city and state.
 * @returns The parsed city name.
 */
const parseCity = (city: string) => city.substring(0, city.indexOf(","));

/**
 * Calculates the visibility in miles based on the provided visibility in meters.
 * @param visibility - The visibility in meters.
 * @returns The visibility in miles, capped at the maximum visibility defined by MAX_VISIBILITY_MILES.
 */
const getVisibility = (visibility: number) => {
  const visibilityMiles = getMiles(visibility);

  return visibilityMiles > MAX_VISIBILITY_MILES
    ? MAX_VISIBILITY_MILES
    : visibilityMiles;
};

/**
 * Returns the wind gust value, rounded down to the nearest integer.
 * If the wind gust value is undefined or less than 0, it returns 0.
 *
 * @param windGust - The wind gust value.
 * @returns The rounded down wind gust value.
 */
const getWindGust = (windGust?: number) =>
  typeof windGust === "undefined" || windGust < 0 ? 0 : Math.floor(windGust);

/**
 * Renders the current weather component.
 *
 * @param {CurrentWeatherProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const CurrentWeather = ({ data }: CurrentWeatherProps): JSX.Element => {
  const {
    alert,
    clouds,
    dailyHigh,
    dailyLow,
    description,
    dewPoint,
    heatIndex,
    humidity,
    moonPhase,
    temp,
    timezone,
    uvi,
    visibility,
    windDirection,
    windGust,
    windSpeed
  } = parseWeatherData(data);

  const city = parseCity(data.city);
  const currentTime = parseTime(data.current.dt, "en-US", data.timezone);
  const sunrise = parseTime(data.current.sunrise, "en-US", data.timezone);
  const sunset = parseTime(data.current.sunset, "en-US", data.timezone);

  return (
    <div className="w-auto h-full text-white backdrop-contrast-100 drop-shadow-md weather sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 backdrop-filter backdrop-blur-sm bg-opacity-50">
      <Top city={city} currentTime={currentTime} />
      <Middle
        dailyHigh={dailyHigh}
        dailyLow={dailyLow}
        description={description}
        temp={temp}
      />
      <Bottom
        alert={alert}
        clouds={clouds}
        dew_point={dewPoint}
        heatIndex={heatIndex}
        humidity={humidity}
        lat={data.lat}
        lon={data.lon}
        moonPhase={moonPhase}
        sunrise={sunrise}
        sunset={sunset}
        timezone={timezone}
        uvi={uvi}
        visibility={visibility}
        windDirection={windDirection}
        windSpeed={windSpeed}
        wind_gust={windGust}
      />
      <Forecast data={data} timezone={data.timezone} />
    </div>
  );
};

export default CurrentWeather;
