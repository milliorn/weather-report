import React from "react";

export const Bottom = (props) => {
  return (
    <div className="flex items-center justify-between bottom">
      <div className="w-full p-1 details">
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Feels like
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {props.heatIndex}°F
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Dew Point
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {props.dew_point}°F
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Humidity
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {props.humidity}%
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Wind
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {props.windSpeed} mph {props.windDirection}
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Gust
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {props.wind_gust} mph {props.windDirection}
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Sunrise
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {props.sunrise}
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Sunset
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {props.sunset}
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            UV Index
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {props.uvi}
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Clouds
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {props.clouds}%
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Visibility
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {props.visibility}
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Moon
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {props.moonPhase}
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Time Zone
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {props.timezone}
          </span>
        </div>
      </div>
    </div>
  );
};
