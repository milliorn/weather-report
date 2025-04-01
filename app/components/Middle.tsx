"use client";

import { useMemo } from "react";
import { MiddleProps } from "../models/componentProps";
import { toCelsius } from "../utils/MiscUtils";

/**
 * Renders the middle section of the weather component.
 *
 * This section displays the weather description, low/high temperatures in both
 * Celsius and Fahrenheit, and the current temperature.
 *
 * @param {MiddleProps} props - The component props including:
 *    - dailyHigh: The high temperature in Fahrenheit.
 *    - dailyLow: The low temperature in Fahrenheit.
 *    - description: A description of the weather.
 *    - temp: The current temperature in Fahrenheit.
 * @returns {JSX.Element} The rendered middle section.
 */
const Middle = (props: MiddleProps): JSX.Element => {
  // Destructure properties from props for clarity.
  const { dailyHigh, dailyLow, description, temp } = props;

  // Convert Fahrenheit values to Celsius using the helper function.
  const fToCHigh = useMemo(() => toCelsius(dailyHigh), [dailyHigh]);
  const fToCLow = useMemo(() => toCelsius(dailyLow), [dailyLow]);
  const fToTemp = useMemo(() => toCelsius(temp), [temp]);

  return (
    // Container for the middle section with Tailwind classes for layout.
    <div className="flex items-center justify-between middle">
      {/* Left section: displays weather description and daily low/high temperatures */}
      <div className="temperature font-semibold w-auto tracking-tighter my-2.5 mx-0 sm:text-xl drop-shadow-md md:text-2xl">
        {/* Weather description */}
        <p className="m-0 leading-10 capitalize text-neutral-100 weather-desc sm:text-xl md:text-2xl drop-shadow-md">
          {description}
        </p>
        {/* Label for temperature ranges */}
        <p className="my-1 sm:mt-3 text-neutral-100">Low | High</p>
        {/* Temperature values in Celsius and Fahrenheit */}
        <div className="sm:text-2xl md:text-3xl drop-shadow-md">
          <p>
            {fToCLow}°C | {fToCHigh}°C
          </p>
          <p>
            {dailyLow}°F | {dailyHigh}°F
          </p>
        </div>
      </div>
      {/* Right section: displays the current temperature in both units */}
      <div className="temperature text-6xl sm:text-7xl w-auto tracking-tighter my-2.5 mx-0 drop-shadow-md">
        <p>{fToTemp}°C</p>
        <p>{temp}°F</p>
      </div>
    </div>
  );
};

export default Middle;
