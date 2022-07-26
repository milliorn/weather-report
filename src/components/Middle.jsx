import React from "react";
import { toCelsius } from "../helper";

export const Middle = (props) => {
  const { dailyHigh, dailyLow, description, temp } = props;
  const fToCLow = toCelsius(dailyLow);
  const fToCHigh = toCelsius(dailyHigh);
  const fToTemp = toCelsius(temp);

  return (
    <div className="flex items-center justify-between middle">
      <div className="temperature drop-shadow-md font-semibold drop-shadow-md w-auto	tracking-tighter my-2.5	mx-0 sm:text-xl drop-shadow-md md:text-2xl">
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
      <div className="temperature drop-shadow-md	text-6xl sm:text-7xl w-auto	tracking-tighter my-2.5	mx-0 drop-shadow-md">
        <p>{fToTemp}°C</p>
        <p>{temp}°F</p>
      </div>
    </div>
  );
};
