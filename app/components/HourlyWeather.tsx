import Image from "next/image";
import { Percent, Time } from "../config";
import { HourlyWeatherProps } from "../models/componentProps";
import { toCelsius } from "../utils/MiscUtils";
import { toKph } from "../utils/WindUtils";

const HourlyWeather = ({ hourly, timezone }: HourlyWeatherProps) => {
  //  console.log(hourly);

  return (
    <div className="hourly-weather-container">
      <h2 className="text-center my-8 sm:text-lg md:text-xl lg:text-2xl">
        24-Hour Forecast
      </h2>
      <div
        className="flex overflow-x-auto gap-4 pb-4"
        style={{ scrollbarWidth: "auto" }}
      >
        {hourly.slice(0, Time.NUM_HOURS).map((hour, index) => (
          <div
            key={`${index}_${hour.dt}`}
            className="hourly-weather-card min-w-max bg-transparent shadow-md p-4 rounded-lg border border-gray-200"
          >
            <p className="hour">
              {new Date(hour.dt * Time.TIMESTAMP_MULTIPLIER).toLocaleTimeString(
                [],
                {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                  timeZone: timezone
                }
              )}
            </p>
            <Image
              alt={hour.weather[0].description}
              src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
              width={48}
              height={48}
            />
            <p>
              {toCelsius(hour.temp)}°C | {Math.floor(hour.temp)}°F
            </p>
            <p className="description capitalize">
              {hour.weather[0].description}
            </p>
            <p className="chance-of-rain">
              Rain: {hour.pop * Percent.PERCENT_MULTIPLIER}%
            </p>
            <p className="humidity">Humidity: {hour.humidity}%</p>
            <p className="wind">
              Wind: {toKph(hour.wind_speed)} kph | {Math.floor(hour.wind_speed)}{" "}
              mph
            </p>
            <p className="uvindex">UV Index: {hour.uvi}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyWeather;
