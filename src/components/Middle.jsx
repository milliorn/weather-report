import React from "react";

export const Middle = (props) => {
  const { dailyHigh, dailyLow, description, temp } = props;
  const fToCLow = Math.floor((dailyLow - 32) * 0.5556);
  const fToCHigh = Math.floor((dailyHigh - 32) * 0.5556);
  const fToTemp = Math.floor((temp - 32) * 0.5556);

  return (
    <div className="flex items-center justify-between middle">
      <div className="temperature font-semibold drop-shadow-md w-auto	tracking-tighter my-2.5	mx-0 sm:text-xl md:text-2xl">
        <p className="m-0 leading-10 capitalize weather-desc sm:text-xl md:text-2xl">
          {description}
        </p>
        <p className="mt-1 sm:mt-3">Low/High</p>
        <div className="sm:text-2xl md:text-3xl">
          <p>
            {fToCLow}°C / {fToCHigh}°C
          </p>
          <p>
            {dailyLow}°F / {dailyHigh}°F
          </p>
        </div>
      </div>
      <div className="temperature font drop-shadow-md	text-7xl w-auto	tracking-tighter my-2.5	mx-0">
        <p>{fToTemp}°C</p>
        <p>{temp}°F</p>
      </div>
    </div>
  );
};
