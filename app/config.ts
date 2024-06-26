"use client";

const DIRECTION_SEGMENTS = 16;
const FAHRENHEIT_BASE = 32;
const FAHRENHEIT_TO_CELSIUS = 0.5556;
const HALF_PHASE = 0.5;
const IMAGE_URL = `url("https://source.unsplash.com/random/?weather")`;
const KPH_CONVERSION_FACTOR = 1.609344;
const MAX_VISIBILITY_MILES = 6.0;
const MILES_CONVERSION_FACTOR = 0.000621371192;
const MILLISECONDS_PER_SECOND = 1000;
const MIN_VALUE_LENGTH = 3;
const MM_TO_INCHES = 25.4;
const NUM_HOURS = 24;
const PERCENTAGE = 100;
const PERCENT_MULTIPLIER = 100;
const POPULATION_THRESHOLD = 1000;
const QUARTER_PHASE = 0.25;
const RAIN_PRECISION = 2;
const SLICE_END_INDEX = 3;
const THREE_QUARTER_PHASE = 0.75;
const TIMESTAMP_MULTIPLIER = 1000;
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const WIND_DIRECTION_DIVISOR = 22.5;

/* wet bulb temperature constants */

// eslint-disable-next-line no-magic-numbers
const CELSIUS_CONVERSION_FACTOR = 5 / 9;
const ES_CONSTANT = 1.676331;
const FREEZING_POINT_F = 32;
// eslint-disable-next-line no-magic-numbers
const FAHRENHEIT_CONVERSION_FACTOR = 9 / 5;
const PRESSURE_CONVERSION_FACTOR = 100;
const RH_ADDITION_CONSTANT = 8.313659;
const RH_CONSTANT_A = 0.023101;
const RH_CONVERSION_FACTOR = 0.00391838;
const RH_EXPONENT = 1.5;
const RH_MULTIPLY_CONSTANT = 0.151977;
const RH_SUBTRACTION_CONSTANT = 4.686035;
const SATURATION_CONSTANT_A = 0.611;
const SATURATION_CONSTANT_B = 17.368;
const SATURATION_CONSTANT_C = 238.88;

/* end wet bulb temperature constants */

export {
  CELSIUS_CONVERSION_FACTOR,
  DIRECTION_SEGMENTS,
  ES_CONSTANT,
  FAHRENHEIT_BASE,
  FAHRENHEIT_CONVERSION_FACTOR,
  FAHRENHEIT_TO_CELSIUS,
  FREEZING_POINT_F,
  HALF_PHASE,
  IMAGE_URL,
  KPH_CONVERSION_FACTOR,
  MAX_VISIBILITY_MILES,
  MILES_CONVERSION_FACTOR,
  MILLISECONDS_PER_SECOND,
  MIN_VALUE_LENGTH,
  MM_TO_INCHES,
  NUM_HOURS,
  PERCENTAGE,
  PERCENT_MULTIPLIER,
  PRESSURE_CONVERSION_FACTOR,
  POPULATION_THRESHOLD,
  QUARTER_PHASE,
  RAIN_PRECISION,
  RH_ADDITION_CONSTANT,
  RH_CONSTANT_A,
  RH_CONVERSION_FACTOR,
  RH_EXPONENT,
  RH_MULTIPLY_CONSTANT,
  RH_SUBTRACTION_CONSTANT,
  SATURATION_CONSTANT_A,
  SATURATION_CONSTANT_B,
  SATURATION_CONSTANT_C,
  SLICE_END_INDEX,
  THREE_QUARTER_PHASE,
  TIMESTAMP_MULTIPLIER,
  WEATHER_API_URL,
  WIND_DIRECTION_DIVISOR
};
