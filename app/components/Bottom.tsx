"use client";

import { toCelsius, toKph } from "../utils/weatherUtils";
import { BottomProps } from "../models/componentProps";
import { WeatherDetail } from "../models/weatherTypes";
import Warnings from "./Warnings";

/**
 * Renders the bottom component that displays weather details.
 * @param {Object} props - The component props.
 * @param {number} props.clouds - The cloudiness percentage.
 * @param {number} props.dew_point - The dew point temperature.
 * @param {number} props.heatIndex - The heat index temperature.
 * @param {number} props.humidity - The humidity percentage.
 * @param {number} props.lat - The latitude.
 * @param {number} props.lon - The longitude.
 * @param {number} props.uvi - The UV index.
 * @param {number} props.visibility - The visibility distance.
 * @param {number} props.windSpeed - The wind speed.
 * @param {number} props.wind_gust - The wind gust speed.
 * @param {string} props.alert - The weather alert.
 * @param {string} props.moonPhase - The moon phase.
 * @param {string} props.sunrise - The sunrise time.
 * @param {string} props.sunset - The sunset time.
 * @param {string} props.timezone - The timezone.
 * @param {string} props.windDirection - The wind direction.
 * @returns {JSX.Element} The rendered bottom component.
 */
const Bottom = (props: BottomProps): JSX.Element => {
  const {
    alert,
    clouds,
    // eslint-disable-next-line camelcase
    dew_point,
    heatIndex,
    humidity,
    lat,
    lon,
    moonPhase,
    sunrise,
    sunset,
    timezone,
    uvi,
    visibility,
    windDirection,
    windSpeed,
    // eslint-disable-next-line camelcase
    wind_gust
  } = props;

  /**
   * Data array containing weather information.
   *
   * @type {WeatherDetail[]}
   */
  const data: WeatherDetail[] = [
    {
      id: "Feels like",
      result: toCelsius(heatIndex) + "°C | " + heatIndex + "°F"
    },
    {
      id: "Dew Point",
      // eslint-disable-next-line camelcase
      result: toCelsius(dew_point) + "°C | " + dew_point + "°F"
    },
    { id: "Humidity", result: humidity + "%" },
    { id: "Wind", result: toKph(windSpeed) + " kph | " + windSpeed + " mph" },
    { id: "Direction", result: windDirection },
    // eslint-disable-next-line camelcase
    { id: "Gust", result: toKph(wind_gust) + " kph | " + wind_gust + " mph" },
    { id: "Sunrise", result: sunrise },
    { id: "Sunset", result: sunset },
    { id: "UV Index", result: uvi },
    { id: "Clouds", result: clouds + "%" },
    {
      id: "Visibility",
      result: toKph(visibility) + " km | " + Math.floor(visibility) + " mi"
    },
    { id: "Moon", result: moonPhase },
    { id: "Time Zone", result: timezone },
    { id: "Latitude", result: lat },
    { id: "Longitude", result: lon }
  ];

  return (
    <div className="flex items-center justify-between bottom">
      <div className="w-full p-1 details">
        {data.map((e, i) => {
          return (
            <div
              key={i}
              className="flex justify-between text-sm drop-shadow-md section-row"
            >
              <span className="text-left capitalize text-neutral-100 section-name sm:text-lg md:text-xl 2xl:text-2xl drop-shadow-md">
                {e.id}
              </span>
              <span
                className="font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl 2xl:text-2xl"
                aria-label={`Weather detail for ${e.id}: ${e.result}`}
              >
                {e.result}
              </span>
            </div>
          );
        })}
        <Warnings alert={alert} />
      </div>
    </div>
  );
};

export default Bottom;
