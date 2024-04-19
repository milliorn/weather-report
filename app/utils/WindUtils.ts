import {
  DIRECTION_SEGMENTS,
  KPH_CONVERSION_FACTOR,
  WIND_DIRECTION_DIVISOR
} from "../config";

/**
 * Returns the wind direction based on the given angle.
 * @param {number} direction - The wind direction angle in degrees.
 * @returns {string} - The wind direction as a string.
 * @example
 * getWindDirection(0); // "N"
 * getWindDirection(45); // "NE"
 * getWindDirection(90); // "E"
 * getWindDirection(135); // "SE"
 * getWindDirection(180); // "S"
 * getWindDirection(225); // "SW"
 * getWindDirection(270); // "W"
 * getWindDirection(315); // "NW"
 * getWindDirection(360); // "N"
 */
const getWindDirection = (direction: number): string =>
  [
    "N",
    "N/NE",
    "N/E",
    "E/NE",
    "E",
    "E/SE",
    "SE",
    "S/SE",
    "S",
    "S/SW",
    "SW",
    "W/SW",
    "W",
    "W/NW",
    "NW",
    "N/NW"
  ][Math.round(direction / WIND_DIRECTION_DIVISOR) % DIRECTION_SEGMENTS];

/**
 * Converts speed from miles per hour to kilometers per hour.
 * @param {number} speed - The speed in miles per hour.
 * @returns {number} The speed in kilometers per hour.
 * @example
 * toKph(60); // 96
 * toKph(30); // 48
 * toKph(45); // 72
 * toKph(100); // 160
 */
const toKph = (speed: number): number =>
  Math.floor(speed * KPH_CONVERSION_FACTOR);

/**
 * Returns the wind gust value, rounded down to the nearest integer.
 * If the wind gust value is undefined or less than 0, it returns 0.
 *
 * @param windGust - The wind gust value.
 * @returns The rounded down wind gust value.
 */
const getWindGust = (windGust?: number) =>
  typeof windGust === "undefined" || windGust < 0 ? 0 : Math.floor(windGust);

export { getWindDirection, getWindGust, toKph };
