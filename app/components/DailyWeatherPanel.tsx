"use client";

import { BuildPanelProps } from "../models/componentProps";
import { WeatherItem } from "../models/weatherTypes";
import { PERCENT_MULTIPLIER, RAIN_PRECISION } from "../utils/config";
import {
  getMoonPhase,
  mmToInches,
  parseTime,
  toCelsius,
  toKph
} from "../utils/weatherUtils";

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
    { id: "Rain", result: `${item.pop * PERCENT_MULTIPLIER}%` },
    {
      id: "Precipitation",
      result:
        item.rain !== undefined && item.rain >= 0
          ? `${item.rain}mm | ${mmToInches(item.rain).toFixed(
              RAIN_PRECISION
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
 * Renders a panel displaying daily weather information.
 * @param item - The weather data for the day.
 * @param timezone - The timezone to display the weather data in.
 * @returns An array of JSX elements representing the daily weather panel.
 */
const DailyWeatherPanel = ({
  item,
  timezone
}: BuildPanelProps): JSX.Element[] => {
  const weatherData = formatWeatherData(item, timezone);

  return weatherData.map((data, i) => (
    <div
      key={`${data.id}_${i}`}
      className="flex items-center justify-between h-8 capitalize"
    >
      <span className="text-neutral-100 drop-shadow-md">{data.id}</span>
      <span className="drop-shadow-md">{data.result}</span>
    </div>
  ));
};

export default DailyWeatherPanel;
