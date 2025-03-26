/* eslint-disable no-magic-numbers */
"use client";

/* ─── API Constants ─────────────────────────────── */
// Contains endpoints and API-specific settings.
export const API = {
  WEATHER_API_URL: "https://api.openweathermap.org/data/3.0"
} as const;

/* ─── Conversion Factors ────────────────────────── */
// Contains unit conversion constants.
export const Conversion = {
  CELSIUS_CONVERSION_FACTOR: 5 / 9,
  FAHRENHEIT_BASE: 32,
  FAHRENHEIT_CONVERSION_FACTOR: 9 / 5,
  FAHRENHEIT_TO_CELSIUS: 0.5556,
  KPH_CONVERSION_FACTOR: 1.609344,
  MM_TO_INCHES: 25.4,
  MILES_CONVERSION_FACTOR: 0.000621371192
} as const;

/* ─── Display / UI Constants ────────────────────── */
// Contains constants related to the UI and user input.
export const Display = {
  IMAGE_URL: `url("https://picsum.photos/2560/1440.webp/?blur=1")`,
  MIN_VALUE_LENGTH: 3,
  SLICE_END_INDEX: 3
} as const;

/* ─── Domain Thresholds ───────────────────────────── */
// Contains thresholds for domain-specific logic.
export const Thresholds = {
  POPULATION_THRESHOLD: 1000,
  RAIN_PRECISION: 2
} as const;

/* ─── Moon Phase Constants ────────────────────────── */
// Contains constants for moon phases.
export const MoonPhases = {
  HALF_PHASE: 0.5,
  QUARTER_PHASE: 0.25,
  THREE_QUARTER_PHASE: 0.75
} as const;

/* ─── Percent Constants ───────────────────────────── */
// Contains percentage values.
export const Percent = {
  PERCENT_MULTIPLIER: 100
} as const;

/* ─── Time Constants ──────────────────────────────── */
// Contains constants related to time intervals.
export const Time = {
  MILLISECONDS_PER_SECOND: 1000,
  NUM_HOURS: 24,
  TIMESTAMP_MULTIPLIER: 1000
} as const;

/* ─── Weather Parsing Constants ───────────────────── */
// Contains constants for parsing weather data.
export const WeatherParsing = {
  DIRECTION_SEGMENTS: 16,
  MAX_VISIBILITY_MILES: 6.0,
  WIND_DIRECTION_DIVISOR: 22.5
} as const;

/* ─── Wet Bulb Temperature Constants ──────────────── */
// Contains constants used for wet bulb temperature calculations.
export const WetBulb = {
  ES_CONSTANT: 1.676331,
  FREEZING_POINT_F: 32,
  RH_ADDITION_CONSTANT: 8.313659,
  RH_CONSTANT: 0.023101,
  RH_CONVERSION_FACTOR: 0.00391838,
  RH_EXPONENT: 1.5,
  RH_MULTIPLY_CONSTANT: 0.151977,
  RH_SUBTRACTION_CONSTANT: 4.686035
} as const;
