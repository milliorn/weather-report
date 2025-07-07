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
 * Returns the saturation vapor pressure in hPa at temperature t (Celsius)
 */
const saturationVaporPressure = (t: number): number => {
  // Tetens formula, valid for 0 < t < 50 C
  return 6.112 * Math.exp((17.62 * t) / (243.12 + t));
};

/**
 * Calculates wet bulb temperature in Celsius using psychrometric formula (includes pressure).
 * @param temperature - The temperature in Celsius.
 * @param relativeHumidity - The relative humidity in %.
 * @param pressure - The atmospheric pressure in hPa.
 * @returns The wet bulb temperature in Celsius.
 */
const wetBulbTemperatureCelsius = (
  temperature: number,
  relativeHumidity: number,
  pressure: number
): number => {
  // Calculate actual vapor pressure
  const e = (relativeHumidity / 100) * saturationVaporPressure(temperature);

  // Psychrometric constant (hPa/C)
  const gamma = 0.00066 * pressure;

  // Iterative search for wet bulb temperature
  let twb = temperature; // initial guess: dry bulb temp
  let diff = 1;
  let count = 0;
  while (Math.abs(diff) > 0.01 && count < 100) {
    const es_twb = saturationVaporPressure(twb);
    diff = es_twb - gamma * (temperature - twb) - e;
    twb = twb - diff / 10; // Convergence step
    count++;
  }
  return twb;
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

  // Calculate wet bulb temperature in Celsius (with pressure!)
  const wetBulbTemperatureC = wetBulbTemperatureCelsius(
    temperatureCelsius,
    relativeHumidity,
    pressure
  );

  // Convert wet bulb temperature back to Fahrenheit
  const conversionToFahrenheit =
    wetBulbTemperatureC * Conversion.FAHRENHEIT_CONVERSION_FACTOR;

  // Add freezing point to get final result
  const wetBulbTemperatureF = conversionToFahrenheit + WetBulb.FREEZING_POINT_F;

  return wetBulbTemperatureF;
};

export { getMiles, mmToInches, calculateWetBulbTemperature };
