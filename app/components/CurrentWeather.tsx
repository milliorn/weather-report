import "../css/CurrentWeather.css";
import {
  getMiles,
  getMoonPhase,
  getWindDirection,
  parseTime,
  toCelsius,
  toKph,
} from "../utils/weatherUtils";
import { Forecast } from "./Forecast";

type CurrentWeatherProps = {
  data: {
    alerts: {
      end: number;
      start: number;
      tags: string[];
      sender_name: string;
      description: string;
    }[];
    city: string;
    current: {
      clouds: number;
      weather: [{ description: string }];
      dew_point: number;
      feels_like: number;
      humidity: number;
      temp: number;
      uvi: number;
      visibility: number;
      wind_gust: number;
      wind_deg: number;
      wind_speed: number;
      dt: number;
      sunrise: number;
      sunset: number;
    };
    daily: [{ temp: { max: number; min: number }; moon_phase: number }];
    lat: number;
    lon: number;
    timezone: string;
  };
};

/**
 * Renders the current weather information.
 *
 * @component
 * @param {Object} data - The weather data object.
 * @returns {JSX.Element} The CurrentWeather component.
 */
const CurrentWeather = ({ data }: CurrentWeatherProps): JSX.Element => {
  const alert = data.alerts;
  const city = data.city.substr(0, data.city.indexOf(","));
  const clouds = data.current.clouds;
  const dailyHigh = Math.floor(data.daily[0].temp.max);
  const dailyLow = Math.floor(data.daily[0].temp.min);
  const description = data.current.weather[0].description;
  const dew_point = Math.floor(data.current.dew_point);
  const heatIndex = Math.floor(data.current.feels_like);
  const humidity = data.current.humidity;
  const moonPhase = getMoonPhase(data.daily[0].moon_phase);
  const temp = Math.floor(data.current.temp);
  const uvi = data.current.uvi;

  const locale = "en-US";
  const currentTime =
    parseTime(data.current.dt, locale, data.timezone) || "N/A";
  const sunrise = parseTime(data.current.sunrise, locale, data.timezone);
  const sunset = parseTime(data.current.sunset, locale, data.timezone);
  const visibilityValue = getMiles(data.current.visibility);
  const visibilityString =
    visibilityValue > 6.0 ? "6.0" : visibilityValue.toFixed(2);
  const visibilityNumber = parseFloat(visibilityString);

  const wind_gust =
    Math.floor(data.current.wind_gust) < 0 ||
    typeof data.current.wind_gust === "undefined"
      ? 0
      : Math.floor(data.current.wind_gust);
  const windDirection = getWindDirection(data.current.wind_deg);
  const windSpeed = Math.floor(data.current.wind_speed);
  const timezone = data.timezone.replace(/[^a-zA-Z ]/g, ", ");

  const fToCLow = toCelsius(dailyLow);
  const fToCHigh = toCelsius(dailyHigh);
  const fToTemp = toCelsius(temp);

  // Merging Bottom component logic here
  const bottomData = [
    {
      id: "Feels like",
      result: `${toCelsius(heatIndex)}°C | ${heatIndex}°F`,
    },
    {
      id: "Dew Point",
      result: `${toCelsius(dew_point)}°C | ${dew_point}°F`,
    },
    { id: "Humidity", result: `${humidity}%` },
    { id: "Wind", result: `${toKph(windSpeed)} kph | ${windSpeed} mph` },
    { id: "Direction", result: windDirection },
    { id: "Gust", result: `${toKph(wind_gust)} kph | ${wind_gust} mph` },
    { id: "Sunrise", result: sunrise },
    { id: "Sunset", result: sunset },
    { id: "UV Index", result: uvi.toString() },
    { id: "Clouds", result: `${clouds}%` },
    {
      id: "Visibility",
      result: `${toKph(visibilityNumber)} km | ${visibilityString} mi`,
    },
    { id: "Moon", result: moonPhase },
    { id: "Time Zone", result: timezone },
    { id: "Latitude", result: data.lat.toString() },
    { id: "Longitude", result: data.lon.toString() },
  ];

  return (
    <div className="w-auto h-full text-white backdrop-contrast-100 drop-shadow-md weather sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
      <div className="flex items-center justify-between top">
        <div className="flex justify-between text-xs capitalize section-row drop-shadow-md">
          <span className="flex justify-between text-lg font-semibold capitalize drop-shadow-md sm:text-2xl md:text-3xl section-row">
            {city} | {currentTime}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between middle">
        <div className="temperature font-semibold w-auto	tracking-tighter my-2.5	mx-0 sm:text-xl drop-shadow-md md:text-2xl">
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
        <div className="temperature	text-6xl sm:text-7xl w-auto	tracking-tighter my-2.5	mx-0 drop-shadow-md">
          <p>{fToTemp}°C</p>
          <p>{temp}°F</p>
        </div>
      </div>
      <div className="flex items-center justify-between bottom">
        <div className="w-full p-1 details">
          {bottomData.map((e, i) => (
            <div
              key={i}
              className="flex justify-between text-sm drop-shadow-md section-row"
            >
              <span className="text-left capitalize text-neutral-100 section-name sm:text-lg md:text-xl 2xl:text-2xl drop-shadow-md">
                {e.id}
              </span>
              <span className="font-semibold text-right section-result drop-shadow-md sm:text-xl md:text-2xl 2xl:text-2xl">
                {e.result}
              </span>
            </div>
          ))}
          {Array.isArray(alert) && alert.length > 0 && (
            <div className="py-4">
              {alert.map((weather, index) => {
                const finish = new Date(weather.end * 1000);
                const begin = new Date(weather.start * 1000);
                return (
                  <div key={index}>
                    <p className="pb-3 uppercase sm:pb-4 tase sm:text-2xl drop-shadow-md">
                      Warning:{" "}
                      <span className="p-1 capitalize">{weather.tags[0]}</span>
                    </p>
                    <p className="pb-3 sm:pb-4 sm:text-lg md:text-xl drop-shadow-md">
                      Issued by {weather.sender_name} at{" "}
                      {begin.toLocaleTimeString()} {begin.toLocaleDateString()}{" "}
                      until {finish.toLocaleTimeString()}{" "}
                      {finish.toLocaleDateString()}.
                    </p>
                    <p className="pb-3 xl:text-lg sm:pb-4 2xl:text-xl drop-shadow-md">
                      {weather.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Forecast data={data} timezone={data.timezone} />
    </div>
  );
};

export default CurrentWeather;
