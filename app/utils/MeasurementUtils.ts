"use client";

import { CELSIUS_CONVERSION_FACTOR, ES_CONSTANT, FAHRENHEIT_CONVERSION_FACTOR, FREEZING_POINT_F, MILES_CONVERSION_FACTOR, MM_TO_INCHES, PERCENTAGE, PRESSURE_CONVERSION_FACTOR, RH_ADDITION_CONSTANT, RH_CONSTANT_A, RH_CONVERSION_FACTOR, RH_EXPONENT, RH_MULTIPLY_CONSTANT, RH_SUBTRACTION_CONSTANT, SATURATION_CONSTANT_A, SATURATION_CONSTANT_B, SATURATION_CONSTANT_C } from "../config";

/**
 * Converts meters to miles.
 * @param meters - The distance in meters.
 * @returns The distance in miles.
 */
const getMiles = (meters: number): number => meters * MILES_CONVERSION_FACTOR;

/**
 * Converts millimeters to inches.
 * @param data - The value in millimeters to be converted.
 * @returns The converted value in inches.
 */
const mmToInches = (data: number): number => data / MM_TO_INCHES;

const wetBulbTemperatureCelsius = (temperature: number, relativeHumidity: number): number => {
  let result = (temperature * Math.atan(RH_MULTIPLY_CONSTANT * Math.sqrt(relativeHumidity + RH_ADDITION_CONSTANT))) +
    Math.atan(temperature + relativeHumidity) -
    Math.atan(relativeHumidity - ES_CONSTANT) +
    ((RH_CONVERSION_FACTOR * Math.pow(relativeHumidity, RH_EXPONENT) * Math.atan(RH_CONSTANT_A * relativeHumidity)) - RH_SUBTRACTION_CONSTANT);

  return result;
};

const calculateWetBulbTemperature = (temperature: number, relativeHumidity: number, pressure: number): number => {
  let celsius = (temperature - FREEZING_POINT_F) * CELSIUS_CONVERSION_FACTOR;
  let wetBulbCelsius = wetBulbTemperatureCelsius(celsius, relativeHumidity);
  return (wetBulbCelsius * FAHRENHEIT_CONVERSION_FACTOR) + FREEZING_POINT_F;
};

export { getMiles, mmToInches, calculateWetBulbTemperature };
