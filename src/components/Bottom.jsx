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

  function toCelsius(num) {
    return Math.floor((num - 32) * 0.5556) + "°C / ";
  }

  function toKph(speed) {
    return Math.floor(speed * 1.609344) + " kph / ";
  }

  const toKilometer = Math.floor(1.609344 * visibility) + " km / ";

  const data = [
    { id: "Feels like", result: toCelsius(heatIndex) + heatIndex + "°F" },
    { id: "Dew Point", result: toCelsius(dew_point) + dew_point + "°F" },
    { id: "Humidity", result: humidity + "%" },
    { id: "Wind", result: toKph(windSpeed) + windSpeed + " mph" },
    { id: "Direction", result: windDirection },
    { id: "Gust", result: toKph(wind_gust) + wind_gust + " mph" },
    { id: "Sunrise", result: sunrise },
    { id: "Sunset", result: sunset },
    { id: "UV Index", result: uvi },
    { id: "Clouds", result: clouds + "%" },
    { id: "Visibility", result: toKilometer + Math.floor(visibility) + " mi" },
    { id: "Moon", result: moonPhase },
    { id: "Time Zone", result: timezone },
  ];

  const BuildSections = () =>
    data.map((e, i) => {
      return (
        <div key={i} className="flex justify-between text-xs section-row">
          <span className="text-left capitalize section-name sm:text-lg md:text-xl">
            {e.id}
          </span>
          <span className="text-xs font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl">
            {e.result}
          </span>
        </div>
      );
    });

  return (
    <div className="flex items-center justify-between bottom">
      <div className="w-full p-1 details">
        <BuildSections />
      </div>
    </div>
  );
};
