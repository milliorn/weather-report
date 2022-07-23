import React from "react";

export const Middle = (props) => {
  const { dailyHigh, dailyLow, description, temp } = props;
  const fToCLow = Math.floor((dailyLow - 32) * 0.5556);
  const fToCHigh = Math.floor((dailyHigh - 32) * 0.5556);

  return (
    <div className="flex items-center justify-between middle">
      <div className="temperature font-semibold drop-shadow-md w-auto	tracking-tighter my-2.5	mx-0 sm:text-xl md:text-2xl">
        <p className="m-0 leading-10 capitalize weather-desc sm:text-xl md:text-2xl">
          {description}
        </p>
        <span>Low/High</span>
        <div className="sm:text-2xl md:text-3xl">
          <p>
            {fToCLow}°C / {fToCHigh}°C
          </p>
          <p>
            {dailyLow}°F / {dailyHigh}°F
          </p>
        </div>
      </div>
      <p className="temperature font drop-shadow-md	text-7xl w-auto	tracking-tighter my-2.5	mx-0">
        {temp}°F
      </p>
    </div>
  );
};
