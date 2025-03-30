/* eslint-disable no-console */
"use client";

import {
  Conversion,
  Display,
  MoonPhases,
  Percent,
  Thresholds,
  WeatherParsing
} from "../config";
import { CurrentWeatherData } from "../models/componentProps";
import { WeatherItem } from "../models/weatherTypes";
import { getMiles, mmToInches } from "./MeasurementUtils";
import { parseTime } from "./TimeUtils";
import { getWindDirection, getWindGust, toKph } from "./WindUtils";

/**
 * Returns the moon phase based on the given phase value.
 * @param {number} phase - The phase value of the moon (between 0 and 1).
 * @returns {string} - The moon phase type.
 * @example
 * getMoonPhase(0.5); // "Full Moon"
 * getMoonPhase(0.75); // "Last Quarter"
 * getMoonPhase(0.1); // "Waxing Crescent"
 * getMoonPhase(0.9); // "Waning Crescent"
 * getMoonPhase(0); // "New Moon"
 */
const getMoonPhase = (phase: number): string => {
  if (phase > 0 && phase < MoonPhases.QUARTER_PHASE) {
    return "Waxing Crescent";
  } else if (phase === MoonPhases.QUARTER_PHASE) {
    return "First Quarter";
  } else if (
    phase > MoonPhases.QUARTER_PHASE &&
    phase < MoonPhases.HALF_PHASE
  ) {
    return "Waxing Gibbous";
  } else if (phase === MoonPhases.HALF_PHASE) {
    return "Full Moon";
  } else if (
    phase > MoonPhases.HALF_PHASE &&
    phase < MoonPhases.THREE_QUARTER_PHASE
  ) {
    return "Waning Gibbous";
  } else if (phase === MoonPhases.THREE_QUARTER_PHASE) {
    return "Last Quarter";
  } else if (phase > MoonPhases.THREE_QUARTER_PHASE && phase < 1) {
    return "Waning Crescent";
  } else {
    return "New Moon";
  }
};

/**
 * Converts a temperature from Fahrenheit to Celsius.
 * @param {number} num - The temperature in Fahrenheit.
 * @returns {number} The temperature in Celsius.
 * @example
 * toCelsius(32); // 0
 * toCelsius(212); // 100
 * toCelsius(98.6); // 37
 */
const toCelsius = (num: number): number =>
  Math.floor(
    (num - Conversion.FAHRENHEIT_BASE) * Conversion.FAHRENHEIT_TO_CELSIUS
  );

/**
 * Returns the day of the week for a given item.
 * @param {Object} item - The item object containing the dt property.
 * @returns {string} The day of the week.
 * @example
 * dayOfWeek({ dt: 1620000000 }); // "Mon"
 * dayOfWeek({ dt: 1620086400 }); // "Tue"
 * dayOfWeek({ dt: 1620172800 }); // "Wed"
 * dayOfWeek({ dt: 1620259200 }); // "Thu"
 * dayOfWeek({ dt: 1620345600 }); // "Fri"
 * dayOfWeek({ dt: 1620432000 }); // "Sat"
 * dayOfWeek({ dt: 1620518400 }); // "Sun"
 */
const dayOfWeek = (item: { dt: number }): string =>
  new Date(item.dt * Thresholds.POPULATION_THRESHOLD)
    .toString()
    .split(" ")
    .slice(0, Display.SLICE_END_INDEX)
    .join(" ")
    .trim();

/**
 * Formats the weather data for a given item.
 * @param item - The weather item to format.
 * @param timezone - The timezone to use for formatting time-related data.
 * @returns An array of objects containing the formatted weather data.
 */
const formatWeatherData = (item: WeatherItem, timezone: string) => {
  return [
    { id: "Forecast", result: item.weather[0].description },
    {
      id: "Dew Point",
      result: `${toCelsius(item.dew_point)}°C | ${item.dew_point}°F`
    },
    { id: "Clouds", result: `${item.clouds}%` },
    { id: "Humidity", result: `${item.humidity}%` },
    { id: "Rain", result: `${item.pop * Percent.PERCENT_MULTIPLIER}%` },
    {
      id: "Precipitation",
      result:
        item.rain !== undefined && item.rain >= 0
          ? `${item.rain}mm | ${mmToInches(item.rain).toFixed(
            Thresholds.RAIN_PRECISION
          )}in`
          : "0.00"
    },
    { id: "UV Index", result: item.uvi },
    { id: "Moon", result: getMoonPhase(item.moon_phase) },
    {
      id: "Wind",
      result: `${toKph(item.wind_speed)} kph | ${item.wind_speed} mph`
    },
    {
      id: "Gust",
      result: `${toKph(item.wind_gust)} kph | ${item.wind_gust} mph`
    },
    { id: "Sunrise", result: parseTime(item.sunrise, "en-US", timezone) },
    { id: "Sunset", result: parseTime(item.sunset, "en-US", timezone) }
  ];
};

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
const parseCity = (city: string): string => {
  const commaIndex = city.indexOf(",");
  // console.log(`name: ${city}`);
  return commaIndex !== -1 ? city.substring(0, commaIndex) : city;
};

/**
 * Calculates the visibility in miles based on the provided visibility in meters.
 * @param visibility - The visibility in meters.
 * @returns The visibility in miles, capped at the maximum visibility defined by MAX_VISIBILITY_MILES.
 */
const getVisibility = (visibility: number) => {
  const visibilityMiles = getMiles(visibility);

  return visibilityMiles > WeatherParsing.MAX_VISIBILITY_MILES
    ? WeatherParsing.MAX_VISIBILITY_MILES
    : visibilityMiles;
};

/**
 * Fetches cities based on the provided input.
 * @param inputTrimmed - The trimmed input string used for searching cities.
 * @returns A promise that resolves to the JSON response containing the cities.
 * @throws An error if the HTTP request fails.
 */
const fetchCities = async (inputTrimmed: string) => {
  const response = await fetch(`/api/searchCities?query=${inputTrimmed}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export {
  dayOfWeek,
  fetchCities,
  formatWeatherData,
  getMiles,
  getMoonPhase,
  getVisibility,
  mmToInches,
  parseCity,
  parseTime,
  parseWeatherData,
  toCelsius
};
