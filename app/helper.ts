import {
  DIRECTION_SEGMENTS,
  FAHRENHEIT_BASE,
  FAHRENHEIT_TO_CELSIUS,
  HALF_PHASE,
  KPH_CONVERSION_FACTOR,
  MILES_CONVERSION_FACTOR,
  MM_TO_INCHES,
  POPULATION_THRESHOLD,
  QUARTER_PHASE,
  SLICE_END_INDEX,
  THREE_QUARTER_PHASE,
  WIND_DIRECTION_DIVISOR
} from "./config";

/**
 * Returns the moon phase based on the given phase value.
 * @param {number} phase - The phase value of the moon (between 0 and 1).
 * @returns {string} - The moon phase type.
 * @example
 * getMoonPhase(0.5); // "Full Moon"
 * getMoonPhase(0.75); // "Last Quarter"
 * getMoonPhase(0.1); // "Waxing Crescent"
 * getMoonPhase(0.9); // "Waning Crescent"
 * getMoonPhase(0); // "New Moon"
 */
const getMoonPhase = (phase: number): string => {
  if (phase > 0 && phase < QUARTER_PHASE) {
    return "Waxing Crescent";
  } else if (phase === QUARTER_PHASE) {
    return "First Quarter";
  } else if (phase > QUARTER_PHASE && phase < HALF_PHASE) {
    return "Waxing Gibbous";
  } else if (phase === HALF_PHASE) {
    return "Full Moon";
  } else if (phase > HALF_PHASE && phase < THREE_QUARTER_PHASE) {
    return "Waning Gibbous";
  } else if (phase === THREE_QUARTER_PHASE) {
    return "Last Quarter";
  } else if (phase > THREE_QUARTER_PHASE && phase < 1) {
    return "Waning Crescent";
  } else {
    return "New Moon";
  }
};

/**
 * Converts a temperature from Fahrenheit to Celsius.
 * @param {number} num - The temperature in Fahrenheit.
 * @returns {number} The temperature in Celsius.
 * @example
 * toCelsius(32); // 0
 * toCelsius(212); // 100
 * toCelsius(98.6); // 37
 */
const toCelsius = (num: number): number =>
  Math.floor((num - FAHRENHEIT_BASE) * FAHRENHEIT_TO_CELSIUS);

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
  ][ Math.round(direction / WIND_DIRECTION_DIVISOR) % DIRECTION_SEGMENTS ];

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
 * Parses the given time value and returns a formatted date string based on the provided locale and timezone.
 * @param {number} time - The time value to parse (in seconds).
 * @param {string} locale - The locale to use for formatting the date string.
 * @param {string} timezone - The timezone to use for formatting the date string.
 * @returns {string} The formatted date string.
 * @example
 * parseTime(1620000000, "en-US", "America/New_York"); // "5/3/2021, 12:00:00 AM"
 */
const parseTime = (time: number, locale: string, timezone: string): string => {
  const dateTime = new Date(0);
  dateTime.setUTCSeconds(time);

  return dateTime
    .toLocaleString(locale, { timeZone: timezone })
    .split(",")
    .pop() as string;
};

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
 * Returns the day of the week for a given item.
 * @param {Object} item - The item object containing the dt property.
 * @returns {string} The day of the week.
 * @example
 * dayOfWeek({ dt: 1620000000 }); // "Mon"
 * dayOfWeek({ dt: 1620086400 }); // "Tue"
 * dayOfWeek({ dt: 1620172800 }); // "Wed"
 * dayOfWeek({ dt: 1620259200 }); // "Thu"
 * dayOfWeek({ dt: 1620345600 }); // "Fri"
 * dayOfWeek({ dt: 1620432000 }); // "Sat"
 * dayOfWeek({ dt: 1620518400 }); // "Sun"
 */
const dayOfWeek = (item: { dt: number }): string =>
  new Date(item.dt * POPULATION_THRESHOLD).toString()
    .split(" ")
    .slice(0, SLICE_END_INDEX)
    .join(" ")
    .trim();

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

export {
  getMoonPhase,
  toCelsius,
  getWindDirection,
  toKph,
  parseTime,
  getMiles,
  dayOfWeek,
  mmToInches
};
