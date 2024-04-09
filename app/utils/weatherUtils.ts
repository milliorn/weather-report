/**
 * https://www.visualcrossing.com/resources/documentation/weather-api/how-to-include-sunrise-sunset-and-moon-phase-data-into-your-api-requests/
 */
/**
 * Returns the moon phase based on the given phase value.
 * @param {number} phase - The phase value of the moon (between 0 and 1).
 * @returns {string} - The moon phase type.
 */
export function getMoonPhase(phase: number): string {
  let phaseType = "";

  if (phase > 0 && phase < 0.25) { phaseType = "Waxing Crescent"; }
  else if (phase === 0.25) { phaseType = "First Quarter"; }
  else if (phase > 0.25 && phase < 0.5) { phaseType = "Waxing Gibbous"; }
  else if (phase === 0.5) { phaseType = "Full Moon"; }
  else if (phase > 0.5 && phase < 0.75) { phaseType = "Waning Gibbous"; }
  else if (phase === 0.75) { phaseType = "Last Quarter"; }
  else if (phase > 0.75 && phase < 1) { phaseType = "Waning Crescent"; }
  else { phaseType = "New Moon"; }

  return phaseType;
}

/**
 * Converts a temperature from Fahrenheit to Celsius.
 *
 * @param {number} num - The temperature in Fahrenheit.
 * @returns {number} The temperature in Celsius.
 */
export function toCelsius(num: number): number {
  return Math.floor((num - 32) * 0.5556);
}

/**
 * https://stackoverflow.com/a/57769076/11986604
 * Returns the wind direction based on the given angle.
 * @param {number} direction - The wind direction angle in degrees.
 * @returns {string} - The wind direction as a string.
 */
export function getWindDirection(direction: number): string | undefined {
  return [
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
    "N/NW",
  ][ Math.round(direction / 22.5) % 16 ];
}

/**
 * Converts speed from miles per hour to kilometers per hour.
 *
 * @param {number} speed - The speed in miles per hour.
 * @returns {number} The speed in kilometers per hour.
 */
export function toKph(speed: number): number {
  return Math.floor(speed * 1.609344);
}

/**
 * https://stackoverflow.com/a/8016205/11986604
 * split the string and pop the value we need, discard the rest.
 * Parses the given time value and returns a formatted date string based on the provided locale and timezone.
 *
 * @param {number} time - The time value to parse (in seconds).
 * @param {string} locale - The locale to use for formatting the date string.
 * @param {string} timezone - The timezone to use for formatting the date string.
 * @returns {string} The formatted date string.
 */
export function parseTime(time: number, locale: Intl.LocalesArgument, timezone: string | undefined): string | undefined {
  const dateTime = new Date(0);
  dateTime.setUTCSeconds(time);
  return dateTime
    .toLocaleString(locale, {
      timeZone: timezone,
    })
    .split(",")
    .pop();
}

/**
 * https://stackoverflow.com/a/20674508/11986604
 * Converts meters to miles.
 *
 * @param {number} meters - The distance in meters.
 * @returns {number} The distance in miles.
 */
export function getMiles(meters: number): number {
  return meters * 0.000621371192;
}

/**
 * Returns the day of the week for a given item.
 *
 * @param {Object} item - The item object containing the dt property.
 * @returns {string} The day of the week.
 */
export function dayOfWeek(item: { dt: number; }): string {
  return new Date(item.dt * 1000)
    .toString()
    .split(" ")
    .slice(0, 3)
    .join(" ")
    .trim();
}

/**
 * Converts millimeters to inches.
 *
 * @param {number} data - The value in millimeters to be converted.
 * @returns {number} The converted value in inches.
 */
export function mmToInches(data: number): number {
  return data / 25.4;
}
