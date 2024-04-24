"use client";

type Alert = {
  description: string;
  end: number;
  sender_name: string;
  start: number;
  tags: string[];
};

type WeatherItem = {
  clouds: number;
  dew_point: number;
  humidity: number;
  moon_phase: number;
  pop: number;
  rain?: number;
  sunrise: number;
  sunset: number;
  uvi: number;
  weather: [{ description: string }];
  wind_gust: number;
  wind_speed: number;
  temp: {
    min: number;
    max: number;
  };
  dt: number;
};

type WeatherDetail = {
  id: string;
  result: string | number;
};

/**
 * Represents the weather data for a specific location.
 */
type WeatherData = {
  alerts: Alert[];
  city: string;
  current: {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
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
  lat: number;
  lon: number;
  timezone: string;
};

export type { Alert, WeatherData, WeatherDetail, WeatherItem };
