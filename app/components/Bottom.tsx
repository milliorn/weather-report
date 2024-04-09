import { toCelsius, toKph } from "../helper";
import { Warnings } from "./Warnings";

type BottomProps = {
  alert: never;
  clouds: number;
  dew_point: number;
  heatIndex: number;
  humidity: number;
  lat: number;
  lon: number;
  moonPhase: string;
  sunrise: string;
  sunset: string;
  timezone: string;
  uvi: number;
  visibility: number;
  windDirection: string;
  windSpeed: number;
  wind_gust: number;
};

export const Bottom = (props: BottomProps): JSX.Element => {
  const {
    alert,
    clouds,
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
    wind_gust,
  } = props;

  const data = [
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
      result: `${toKph(visibility)} km | ${Math.floor(visibility)} mi`,
    },
    { id: "Moon", result: moonPhase },
    { id: "Time Zone", result: timezone },
    { id: "Latitude", result: lat.toString() },
    { id: "Longitude", result: lon.toString() },
  ];

  const BuildBottom = () =>
    data.map((e, i) => (
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
    ));

  return (
    <div className="flex items-center justify-between bottom">
      <div className="w-full p-1 details">
        {BuildBottom()}
        <Warnings alert={alert} />
      </div>
    </div>
  );
};
