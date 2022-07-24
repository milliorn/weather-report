import React from "react";
import { toCelsius, toKph } from "../helper";

export const Bottom = (props) => {
  const {
    alert,
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

  const data = [
    {
      id: "Feels like",
      result: toCelsius(heatIndex) + "°C | " + heatIndex + "°F",
    },
    {
      id: "Dew Point",
      result: toCelsius(dew_point) + "°C | " + dew_point + "°F",
    },
    { id: "Humidity", result: humidity + "%" },
    { id: "Wind", result: toKph(windSpeed) + " kph | " + windSpeed + " mph" },
    { id: "Direction", result: windDirection },
    { id: "Gust", result: toKph(wind_gust) + " kph | " + wind_gust + " mph" },
    { id: "Sunrise", result: sunrise },
    { id: "Sunset", result: sunset },
    { id: "UV Index", result: uvi },
    { id: "Clouds", result: clouds + "%" },
    {
      id: "Visibility",
      result: toKph(visibility) + " km | " + Math.floor(visibility) + " mi",
    },
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

  const Warnings = () => {
    console.log(alert);
    /**
     * https://stackoverflow.com/a/20940191/11986604
     */
    if (Array.isArray(alert) && alert.length) {
      return (
        <div className="my-4">
          <p>
            Warning: {alert[0].tags[0].toUpperCase()}. {alert[0].event} Issued
            by {alert[0].sender_name}
          </p>
        </div>
      );
    }
  };

  return (
    <div className="flex items-center justify-between bottom">
      <div className="w-full p-1 details">
        <BuildSections />
        <Warnings />
      </div>
    </div>
  );
};
