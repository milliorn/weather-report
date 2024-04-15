"use client";

import { GroupBase } from "react-select";
import { Response } from "react-select-async-paginate";

type BottomProps = {
  alert: any[];
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

type WeatherDetail = {
  id: string;
  result: string | number;
};

type WeatherItem = {
  clouds: number;
  humidity: number;
  moon_phase: number;
  sunrise: number;
  sunset: number;
  uvi: number;
  pop: number;
  dew_point: number;
  rain?: number;
  wind_speed: number;
  wind_gust: number;
  weather: [ { description: string } ];
  temp: {
    min: number;
    max: number;
  };
  dt: number;
}

type ForecastProps = {
  data: {
    daily: WeatherItem[];
  };
  timezone: string;
}

type BuildPanelProps = {
  item: WeatherItem;
}

type CityOptions = {
  value: string;
  label: string;
}

type FetchResponseData = {
  data: {
    name: string;
    country: string;
    latitude: number;
    longitude: number;
  }[];
}

type SearchData = {
  value: string;
  label: string;
}

type GeoApiOptionsType = {
  method: string;
  headers: {
    "X-RapidAPI-Host": string;
    "X-RapidAPI-Key": string;
  };
}

type WarningsProps = {
  alert: Alert[];
}

type Alert = {
  description: string;
  end: number;
  sender_name: string;
  start: number;
  tags: string[];
}

type WeatherData = {
  alerts: Alert[];
  city: string;
  current: {
    clouds: number;
    weather: { description: string }[];
    dew_point: number;
    feels_like: number;
    humidity: number;
    temp: number;
    uvi: number;
    visibility: number;
    wind_gust?: number;
    wind_deg: number;
    wind_speed: number;
    sunrise: number;
    sunset: number;
    dt: number;
  };
  daily: WeatherItem[];
  timezone: string;
  lat: number;
  lon: number;
}

type CurrentWeatherProps = {
  data: CurrentWeatherData;
}

type CurrentWeatherData = {
  alerts: Alert[];
  city: string;
  current: {
    clouds: number;
    weather: { description: string }[];
    dew_point: number;
    feels_like: number;
    humidity: number;
    temp: number;
    uvi: number;
    visibility: number;
    wind_gust?: number;
    wind_deg: number;
    wind_speed: number;
    sunrise: number;
    sunset: number;
    dt: number;
  };
  daily: WeatherItem[];
  lat: number;
  lon: number;
  timezone: string;
}

type TopProps = {
  city: string;
  currentTime: string;
}

type SearchProps = {
  onSearchChange: (searchData: SearchData | null) => void;
}

type LoadOptionsResponse = Response<SearchData, GroupBase<SearchData>, any>; // Add 'any' if additional data type is not specified

type MiddleProps = {
  dailyHigh: number;
  dailyLow: number;
  description: string;
  temp: number;
};

export type {
  Alert,
  BottomProps,
  BuildPanelProps,
  CityOptions,
  CurrentWeatherData,
  CurrentWeatherProps,
  FetchResponseData,
  ForecastProps,
  GeoApiOptionsType,
  LoadOptionsResponse,
  MiddleProps,
  SearchData,
  SearchProps,
  TopProps,
  WarningsProps,
  WeatherData,
  WeatherDetail,
  WeatherItem,
};
