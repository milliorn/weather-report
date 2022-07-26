import React from "react";
import { toCelsius, toKph } from "../helper";
import { Warnings } from "./Warnings";

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

  const BuildBottom = () =>
    data.map((e, i) => {
      return (
        <div
          key={i}
          className="flex justify-between text-xs drop-shadow-md section-row"
        >
          <span className="text-left capitalize text-neutral-300 section-name sm:text-lg md:text-xl 2xl:text-2xl drop-shadow-md">
            {e.id}
          </span>
          <span className="text-xs font-semibold text-right text-neutral-300 section-result drop-shadow-md sm:text-xl md:text-2xl 2xl:text-2xl">
            {e.result}
          </span>
        </div>
      );
    });

  return (
    <div className="flex items-center justify-between bottom">
      <div className="w-full p-1 details">
        <BuildBottom />
        <Warnings alert={alert} />
      </div>
    </div>
  );
};
