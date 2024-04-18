"use client";

import { GeoApiOptionsType } from "./models/apiTypes";

const DIRECTION_SEGMENTS = 16;
const FAHRENHEIT_BASE = 32;
const FAHRENHEIT_TO_CELSIUS = 0.5556;
const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
const HALF_PHASE = 0.5;
const IMAGE_URL = `url("https://source.unsplash.com/random/?weather")`;
const KPH_CONVERSION_FACTOR = 1.609344;
const MILES_CONVERSION_FACTOR = 0.000621371192;
const MILLISECONDS_PER_SECOND = 1000;
const MM_TO_INCHES = 25.4;
const PERCENT_MULTIPLIER = 100;
const POPULATION_THRESHOLD = 1000;
const QUARTER_PHASE = 0.25;
const RAIN_PRECISION = 2;
const SLICE_END_INDEX = 3;
const THREE_QUARTER_PHASE = 0.75;
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const WIND_DIRECTION_DIVISOR = 22.5;

const GEO_API_OPTIONS: GeoApiOptionsType = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPID_KEY || "",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
  }
};

export {
  DIRECTION_SEGMENTS,
  FAHRENHEIT_BASE,
  FAHRENHEIT_TO_CELSIUS,
  GEO_API_OPTIONS,
  GEO_API_URL,
  HALF_PHASE,
  IMAGE_URL,
  KPH_CONVERSION_FACTOR,
  MILES_CONVERSION_FACTOR,
  MILLISECONDS_PER_SECOND,
  MM_TO_INCHES,
  PERCENT_MULTIPLIER,
  POPULATION_THRESHOLD,
  QUARTER_PHASE,
  RAIN_PRECISION,
  SLICE_END_INDEX,
  THREE_QUARTER_PHASE,
  WEATHER_API_URL,
  WIND_DIRECTION_DIVISOR
};
