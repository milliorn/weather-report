"use client";

import { GeoApiOptionsType } from "./models/apiTypes";

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
const IMAGE_URL = `url("https://source.unsplash.com/random/?weather")`;
const PERCENT_MULTIPLIER = 100;
const RAIN_PRECISION = 2;
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

const GEO_API_OPTIONS: GeoApiOptionsType = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPID_KEY || "",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
  }
};

export { WEATHER_API_URL, IMAGE_URL, GEO_API_URL, GEO_API_OPTIONS, PERCENT_MULTIPLIER, RAIN_PRECISION };
