import { MILES_CONVERSION_FACTOR, MM_TO_INCHES } from "../config";

/**
 * Converts meters to miles.
 * @param {number} meters - The distance in meters.
 * @returns {number} The distance in miles.
 * @example
 * getMiles(1609.34); // 1
 * getMiles(8046.72); // 5
 * getMiles(32186.9); // 20
 */
const getMiles = (meters: number): number => meters * MILES_CONVERSION_FACTOR;

/**
 * Converts millimeters to inches.
 * @param {number} data - The value in millimeters to be converted.
 * @returns {number} The converted value in inches.
 * @example
 * mmToInches(25.4); // 1
 * mmToInches(50.8); // 2
 * mmToInches(76.2); // 3
 * mmToInches(101.6); // 4
 */
const mmToInches = (data: number): number => data / MM_TO_INCHES;

export { getMiles, mmToInches };
