"use client";

import { toCelsius } from "../helper";
import { MiddleProps } from "../models/componentProps";

/**
 * Renders the middle section of the weather component.
 *
 * @param {MiddleProps} props - The component props.
 * @returns {JSX.Element} The rendered middle section.
 */
const Middle = ({
  dailyHigh,
  dailyLow,
  description,
  temp,
}: MiddleProps): JSX.Element => {
  const fToCHigh = toCelsius(dailyHigh);
  const fToCLow = toCelsius(dailyLow);
  const fToTemp = toCelsius(temp);

  return (
    <div className="flex items-center justify-between middle">
      <div className="temperature font-semibold w-auto	tracking-tighter my-2.5	mx-0 sm:text-xl drop-shadow-md md:text-2xl">
        <p className="m-0 leading-10 capitalize text-neutral-100 weather-desc sm:text-xl md:text-2xl drop-shadow-md">
          {description}
        </p>
        <p className="my-1 sm:mt-3 text-neutral-100">Low | High</p>
        <div className="sm:text-2xl md:text-3xl drop-shadow-md">
          <p>
            {fToCLow}°C | {fToCHigh}°C
          </p>
          <p>
            {dailyLow}°F | {dailyHigh}°F
          </p>
        </div>
      </div>
      <div className="temperature	text-6xl sm:text-7xl w-auto	tracking-tighter my-2.5	mx-0 drop-shadow-md">
        <p>{fToTemp}°C</p>
        <p>{temp}°F</p>
      </div>
    </div>
  );
};

export default Middle;
