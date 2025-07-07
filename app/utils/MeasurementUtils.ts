"use client";

import { Conversion, WetBulb } from "../config";

/**
 * Converts meters to miles.
 * @param meters - The distance in meters.
 * @returns The distance in miles.
 */
const getMiles = (meters: number): number =>
  meters * Conversion.MILES_CONVERSION_FACTOR;

/**
 * Converts millimeters to inches.
 * @param data - The value in millimeters to be converted.
 * @returns The converted value in inches.
 */
const mmToInches = (data: number): number => data / Conversion.MM_TO_INCHES;

/**
 * Calculates the wet bulb temperature in Celsius.
 * @param temperature - The temperature in Celsius.
 * @param relativeHumidity - The relative humidity.
 * @returns The wet bulb temperature in Celsius.
 */
const wetBulbTemperatureCelsius = (
  temperature: number,
  relativeHumidity: number
): number => {
  // First term calculation with atan of the square root term
  const firstTerm =
    temperature *
    Math.atan(
      WetBulb.RH_MULTIPLY_CONSTANT *
        Math.sqrt(relativeHumidity + WetBulb.RH_ADDITION_CONSTANT)
    );

  // Second term is straightforward atan addition
  const secondTerm = Math.atan(temperature + relativeHumidity);

  // Third term subtracts the atan of the constant adjusted humidity
  const thirdTerm = Math.atan(relativeHumidity - WetBulb.ES_CONSTANT);

  // Fourth term combines several operations and needs careful grouping
  const fourthTerm =
    WetBulb.RH_CONVERSION_FACTOR *
    Math.pow(relativeHumidity, WetBulb.RH_EXPONENT) *
    Math.atan(WetBulb.RH_CONSTANT * relativeHumidity);

  // Result combines all terms with appropriate additions and subtractions
  const result =
    firstTerm +
    secondTerm -
    thirdTerm +
    (fourthTerm - WetBulb.RH_SUBTRACTION_CONSTANT);

  return result;
};

/**
 * Calculates the wet bulb temperature in Fahrenheit.
 * @param temperature - The temperature in Fahrenheit.
 * @param relativeHumidity - The relative humidity as a percentage.
 * @param pressure - The atmospheric pressure in hPa.
 * @returns The wet bulb temperature in Fahrenheit.
 */
const calculateWetBulbTemperature = (
  temperature: number,
  relativeHumidity: number,
  pressure: number
): number => {
  // Convert input temperature from Fahrenheit to Celsius
  const temperatureCelsius =
    (temperature - WetBulb.FREEZING_POINT_F) *
    Conversion.CELSIUS_CONVERSION_FACTOR;

  // Calculate wet bulb temperature in Celsius
  const wetBulbTemperatureC = wetBulbTemperatureCelsius(
    temperatureCelsius,
    relativeHumidity
  );

  // Convert wet bulb temperature back to Fahrenheit
  const conversionToFahrenheit =
    wetBulbTemperatureC * Conversion.FAHRENHEIT_CONVERSION_FACTOR;

  // Add freezing point to get final result
  const wetBulbTemperatureF = conversionToFahrenheit + WetBulb.FREEZING_POINT_F;

  return wetBulbTemperatureF;
};

export { getMiles, mmToInches, calculateWetBulbTemperature };
