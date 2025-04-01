"use client";

// Importing necessary modules and types
import { Time } from "../config";
import { HourlyWeatherProps } from "../models/componentProps";
import HourlyWeatherCard from "./HourlyWeatherCard";

/**
 * HourlyWeather Component
 *
 * This component renders a horizontally scrollable list of hourly weather forecast cards.
 * It displays a heading ("24-Hour Forecast") and maps over the hourly forecast data,
 * slicing it to show only the number of hours defined in Time.NUM_HOURS.
 *
 * @param {HourlyWeatherProps} props - The component props including:
 *    - hourly: An array of hourly forecast data.
 *    - timezone: The timezone string used for time formatting.
 * @returns {JSX.Element} The rendered hourly weather forecast section.
 */
const HourlyWeather = ({
  hourly,
  timezone
}: HourlyWeatherProps): JSX.Element => {
  return (
    // Container for the hourly weather forecast
    <div className="hourly-weather-container">
      {/* Heading for the forecast section */}
      <h2 className="text-center my-8 sm:text-lg md:text-xl lg:text-2xl">
        24-Hour Forecast
      </h2>
      {/* Scrollable container for hourly forecast cards */}
      <div
        className="flex overflow-x-auto gap-4 pb-4"
        style={{ scrollbarWidth: "auto" }}
      >
        {/* Map over the hourly data, limited to the number of hours defined in Time.NUM_HOURS */}
        {hourly.slice(0, Time.NUM_HOURS).map((hour, index) => (
          // Render an HourlyWeatherCard for each hour
          // Use a combination of the index and hour.dt to ensure unique keys
          <HourlyWeatherCard
            key={`${index}_${hour.dt}`}
            hour={hour}
            timezone={timezone}
          />
        ))}
      </div>
    </div>
  );
};

export default HourlyWeather;
