"use client";

import {
  getMoonPhase,
  mmToInches,
  parseTime,
  toCelsius,
  toKph
} from "../helper";
import { BuildPanelProps } from "../models/componentProps";

/**
 * This builds the panel with weather information by mapping over the data and pushing its value into elements
 * @param {Object} value - The weather data object.
 * @returns {JSX.Element[]} An array of JSX elements representing the weather panel.
 */
const DailyWeatherPanel = (value: BuildPanelProps): JSX.Element[] => {
  const { timezone } = value;

  const clouds = value.item.clouds + "%";
  const description = value.item.weather[0].description;
  const humidity = value.item.humidity + "%";
  const rain = value.item.pop * 100 + "%"; // Rain is given to us from 0-1, 1 meaning 100%
  const uvi = value.item.uvi;

  const moon = getMoonPhase(value.item.moon_phase);
  const sunrise = parseTime(value.item.sunrise, "en-US", timezone);
  const sunset = parseTime(value.item.sunset, "en-US", timezone);

  const dewPoint =
    toCelsius(value.item.dew_point) + "°C | " + value.item.dew_point + "°F";

  const precipitation =
    value.item.rain! < 0 || typeof value.item.rain === "undefined"
      ? "0.00"
      : value.item.rain +
        "mm | " +
        mmToInches(value.item.rain).toFixed(2) +
        "in";

  const windSpeed =
    toKph(value.item.wind_speed) + " kph | " + value.item.wind_speed + " mph";

  const windGust =
    toKph(value.item.wind_gust) + " kph | " + value.item.wind_gust + " mph";

  const collection = [
    { id: "Forecast", result: description },
    { id: "Dew Point", result: dewPoint },
    { id: "Clouds", result: clouds },
    { id: "Humidity", result: humidity },
    { id: "Rain", result: rain },
    { id: "Precipitation", result: precipitation },

    { id: "UV Index", result: uvi },
    { id: "Moon", result: moon },
    { id: "Wind", result: windSpeed },
    { id: "Gust", result: windGust },
    { id: "Sunrise", result: sunrise },
    { id: "Sunset", result: sunset }
  ];

  return collection.map((e, i) => {
    return (
      <div
        key={e + " " + i}
        className="flex items-center justify-between h-8 capitalize"
      >
        <span className="text-neutral-100 drop-shadow-md">{e.id}</span>
        <span className="drop-shadow-md">{e.result}</span>
      </div>
    );
  });
};

export default DailyWeatherPanel;
