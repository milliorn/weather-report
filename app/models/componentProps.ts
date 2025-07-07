"use client";

import { SearchData } from "./apiTypes";
import { Alert, WeatherItem } from "./weatherTypes";

type BottomProps = {
  alert: Alert[];
  clouds: number;
  dew_point: number;
  heatIndex: number;
  humidity: number;
  lat: number;
  lon: number;
  moonPhase: string;
  pressure: number;
  sunrise: string;
  sunset: string;
  temp: number;
  timezone: string;
  uvi: number;
  visibility: number;
  windDirection: string;
  windSpeed: number;
  wind_gust: number;
};

type ForecastProps = {
  data: {
    daily: WeatherItem[];
  };
  timezone: string;
};

type BuildPanelProps = {
  item: WeatherItem;
  timezone: string;
};

type WarningsProps = {
  alert: Alert[];
};

type CurrentWeatherProps = {
  data: CurrentWeatherData;
};

type TopProps = {
  city: string;
  currentTime: string;
};

type MiddleProps = {
  dailyHigh: number;
  dailyLow: number;
  description: string;
  temp: number;
};

type SearchProps = {
  onSearchChange: (searchData: SearchData | null) => void;
};

/**
 * Represents the data structure for the current weather.
 */
type CurrentWeatherData = {
  alerts: Alert[];
  city: string;
  current: {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: { description: string }[];
    wind_deg: number;
    wind_gust?: number;
    wind_speed: number;
  };
  daily: WeatherItem[];
  hourly: HourlyWeatherItem[];
  lat: number;
  lon: number;
  timezone: string;
};

type HourlyWeatherItem = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  pop: number;
  temp: number;
  visibility: number;
  wind_deg: number;
  wind_speed: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  uvi: number;
};

type HourlyWeatherProps = {
  hourly: HourlyWeatherItem[];
  timezone: string;
};

type MapCityToOptionType = {
  country: string;
  latitude: number;
  longitude: number;
  name: string;
};

export type {
  BottomProps,
  BuildPanelProps,
  CurrentWeatherData,
  CurrentWeatherProps,
  ForecastProps,
  HourlyWeatherItem,
  HourlyWeatherProps,
  MapCityToOptionType,
  MiddleProps,
  SearchProps,
  TopProps,
  WarningsProps
};
