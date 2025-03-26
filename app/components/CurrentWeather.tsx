"use client";

import { CurrentWeatherProps } from "../models/componentProps";
import { parseCity, parseTime, parseWeatherData } from "../utils/MiscUtils";
import Bottom from "./Bottom";
import Forecast from "./Forecast";
import HourlyWeather from "./HourlyWeather";
import Middle from "./Middle";
import Top from "./Top";

/**
 * Renders the current weather component.
 *
 * @param {CurrentWeatherProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const CurrentWeather = ({ data }: CurrentWeatherProps): JSX.Element => {
  const {
    alert,
    clouds,
    dailyHigh,
    dailyLow,
    description,
    dewPoint,
    heatIndex,
    humidity,
    moonPhase,
    temp,
    timezone,
    uvi,
    visibility,
    windDirection,
    windGust,
    windSpeed
  } = parseWeatherData(data);

  const city = parseCity(data.city);
  const currentTime = parseTime(data.current.dt, "en-US", data.timezone);
  const sunrise = parseTime(data.current.sunrise, "en-US", data.timezone);
  const sunset = parseTime(data.current.sunset, "en-US", data.timezone);

  // console.log(data);
  // console.log(data.current.temp);

  return (
    <div className="w-auto h-full text-white backdrop-contrast-100 drop-shadow-md mt-4 mx-auto px-4 pb-4 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 backdrop-filter bg-opacity-50">
      <Top city={city} currentTime={currentTime} />
      <Middle
        dailyHigh={dailyHigh}
        dailyLow={dailyLow}
        description={description}
        temp={temp}
      />
      <Bottom
        alert={alert}
        clouds={clouds}
        dew_point={dewPoint}
        heatIndex={heatIndex}
        humidity={humidity}
        lat={data.lat}
        lon={data.lon}
        moonPhase={moonPhase}
        pressure={data.current.pressure}
        sunrise={sunrise}
        sunset={sunset}
        temp={temp}
        timezone={timezone}
        uvi={uvi}
        visibility={visibility}
        windDirection={windDirection}
        windSpeed={windSpeed}
        wind_gust={windGust}
      />
      <HourlyWeather hourly={data.hourly} timezone={timezone} />
      <Forecast data={data} timezone={data.timezone} />
    </div>
  );
};

export default CurrentWeather;
