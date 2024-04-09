/**
 * Returns the moon phase based on the given phase value.
 * @param {number} phase - The phase value of the moon (between 0 and 1).
 * @returns {string} - The moon phase type.
 */
export function getMoonPhase(phase: number): string {
  let phaseType = "";

  const NEW_MOON_THRESHOLD = 0;
  const WAXING_CRESCENT_THRESHOLD = 0.25;
  const FIRST_QUARTER_THRESHOLD = 0.5;
  const WAXING_GIBBOUS_THRESHOLD = 0.75;
  const FULL_MOON_THRESHOLD = 1;

  if (phase > NEW_MOON_THRESHOLD && phase < WAXING_CRESCENT_THRESHOLD) {
    phaseType = "Waxing Crescent";
  } else if (phase === WAXING_CRESCENT_THRESHOLD) {
    phaseType = "First Quarter";
  } else if (phase > WAXING_CRESCENT_THRESHOLD && phase < FIRST_QUARTER_THRESHOLD) {
    phaseType = "Waxing Gibbous";
  } else if (phase === FIRST_QUARTER_THRESHOLD) {
    phaseType = "Full Moon";
  } else if (phase > FIRST_QUARTER_THRESHOLD && phase < WAXING_GIBBOUS_THRESHOLD) {
    phaseType = "Waning Gibbous";
  } else if (phase === WAXING_GIBBOUS_THRESHOLD) {
    phaseType = "Last Quarter";
  } else if (phase > WAXING_GIBBOUS_THRESHOLD && phase < FULL_MOON_THRESHOLD) {
    phaseType = "Waning Crescent";
  } else {
    phaseType = "New Moon";
  }

  return phaseType;
}

/**
 * Converts a temperature from Fahrenheit to Celsius.
 *
 * @param {number} num - The temperature in Fahrenheit.
 * @returns {number} The temperature in Celsius.
 */
export function toCelsius(num: number): number {
  const FAHRENHEIT_TO_CELSIUS_MULTIPLIER = 0.5556;
  const FAHRENHEIT_TO_CELSIUS_OFFSET = 32;
  return Math.floor((num - FAHRENHEIT_TO_CELSIUS_OFFSET) * FAHRENHEIT_TO_CELSIUS_MULTIPLIER);
}

const DIRECTIONS = [
  "N", "N/NE", "N/E", "E/NE", "E", "E/SE", "SE", "S/SE", "S", "S/SW", "SW", "W/SW", "W", "W/NW", "NW", "N/NW",
];

/**
 * Returns the wind direction based on the given angle.
 * @param {number} direction - The wind direction angle in degrees.
 * @returns {string} - The wind direction as a string.
 */
export function getWindDirection(direction: number): string | undefined {
  const ANGLE_DIVISOR = 22.5;
  return DIRECTIONS[ Math.round(direction / ANGLE_DIVISOR) % DIRECTIONS.length ];
}

const MILES_TO_KILOMETERS = 1.609344;

/**
 * Converts speed from miles per hour to kilometers per hour.
 *
 * @param {number} speed - The speed in miles per hour.
 * @returns {number} The speed in kilometers per hour.
 */
export function toKph(speed: number): number {
  return Math.floor(speed * MILES_TO_KILOMETERS);
}

/**
 * Parses the given time value and returns a formatted date string based on the provided locale and timezone.
 *
 * @param {number} time - The time value to parse (in seconds).
 * @param {string} locale - The locale to use for formatting the date string.
 * @param {string} timezone - The timezone to use for formatting the date string.
 * @returns {string} The formatted date string.
 */
export function parseTime(time: number, locale: Intl.LocalesArgument, timezone: string | undefined): string | undefined {
  const SECONDS_TO_MILLISECONDS = 1000;
  const dateTime = new Date(time * SECONDS_TO_MILLISECONDS);
  return dateTime
    .toLocaleString(locale, { timeZone: timezone })
    .split(",")
    .pop()?.trim();
}

const METERS_TO_MILES = 0.000621371192;

/**
 * Converts meters to miles.
 *
 * @param {number} meters - The distance in meters.
 * @returns {number} The distance in miles.
 */
export function getMiles(meters: number): number {
  return meters * METERS_TO_MILES;
}

/**
 * Returns the day of the week for a given item.
 *
 * @param {Object} item - The item object containing the dt property.
 * @returns {string} The day of the week.
 */
export function dayOfWeek(item: { dt: number }): string {
  const SECONDS_TO_MILLISECONDS = 1000;
  const DAYS_OF_WEEK_TO_KEEP = 3;

  return new Date(item.dt * SECONDS_TO_MILLISECONDS)
    .toString()
    .split(" ")
    .slice(0, DAYS_OF_WEEK_TO_KEEP)
    .join(" ")
    .trim();
}

const MILLIMETERS_TO_INCHES = 25.4;

/**
 * Converts millimeters to inches.
 *
 * @param {number} data - The value in millimeters to be converted.
 * @returns {number} The converted value in inches.
 */
export function mmToInches(data: number): number {
  return data / MILLIMETERS_TO_INCHES;
}
