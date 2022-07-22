import React from "react";

export const Bottom = (props) => {
  const {
    clouds,
    dew_point,
    heatIndex,
    humidity,
    moonPhase,
    sunrise,
    sunset,
    timezone,
    uvi,
    visibility,
    windDirection,
    windSpeed,
    wind_gust,
  } = props;

  return (
    <div className="flex items-center justify-between bottom">
      <div className="w-full p-1 details">
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Feels like
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {heatIndex}°F
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Dew Point
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {dew_point}°F
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Humidity
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {humidity}%
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Wind
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {windSpeed} mph {windDirection}
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Gust
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {wind_gust} mph {windDirection}
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Sunrise
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {sunrise}
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Sunset
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {sunset}
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            UV Index
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {uvi}
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Clouds
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {clouds}%
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Visibility
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {visibility}
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Moon
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {moonPhase}
          </span>
        </div>
        <div className="flex justify-between text-xs capitalize section-row">
          <span className="text-left section-name sm:text-lg md:text-xl">
            Time Zone
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {timezone}
          </span>
        </div>
      </div>
    </div>
  );
};
