"use client";

import Image from "next/image";
import { useMemo } from "react";
import { Percent, Time } from "../config";
import { toCelsius } from "../utils/MiscUtils";
import { toKph } from "../utils/WindUtils";
import { HourlyWeatherItem } from "../models/componentProps";

// Child component for each hourly weather card.
const HourlyWeatherCard = ({
  hour,
  timezone
}: {
  hour: HourlyWeatherItem;
  timezone: string;
}) => {
  // Memoize the formatted time to avoid recalculation on each render.
  const formattedTime = useMemo(() => {
    return new Date(hour.dt * Time.TIMESTAMP_MULTIPLIER).toLocaleTimeString(
      [],
      {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: timezone
      }
    );
  }, [hour.dt, timezone]);

  return (
    <div className="hourly-weather-card min-w-max bg-transparent shadow-md p-4 rounded-lg border border-gray-200">
      <p className="hour">{formattedTime}</p>
      <Image
        alt={hour.weather[0].description}
        src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
        width={48}
        height={48}
      />
      <p>
        {toCelsius(hour.temp)}°C | {Math.floor(hour.temp)}°F
      </p>
      <p className="description capitalize">{hour.weather[0].description}</p>
      <p className="chance-of-rain">
        Rain: {hour.pop * Percent.PERCENT_MULTIPLIER}%
      </p>
      <p className="humidity">Humidity: {hour.humidity}%</p>
      <p className="wind">
        Wind: {toKph(hour.wind_speed)} kph | {Math.floor(hour.wind_speed)} mph
      </p>
      <p className="uvindex">UV Index: {hour.uvi}</p>
    </div>
  );
};

export default HourlyWeatherCard;
