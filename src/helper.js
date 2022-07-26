/**
 * https://www.visualcrossing.com/resources/documentation/weather-api/how-to-include-sunrise-sunset-and-moon-phase-data-into-your-api-requests/
 */
export function getMoonPhase(phase) {
  let phaseType = "";

  if (phase > 0 && phase < 0.25) phaseType = "Waxing Crescent";
  else if (phase === 0.25) phaseType = "First Quarter";
  else if (phase > 0.25 && phase < 0.5) phaseType = "Waxing Gibbous";
  else if (phase === 0.5) phaseType = "Full Moon";
  else if (phase > 0.5 && phase < 0.75) phaseType = "Waning Gibbous";
  else if (phase === 0.75) phaseType = "Last Quarter";
  else if (phase > 0.75 && phase < 1) phaseType = "Waning Crescent";
  else phaseType = "New Moon";

  return phaseType;
}

export function toCelsius(num) {
  return Math.floor((num - 32) * 0.5556);
}

/**
 * https://stackoverflow.com/a/57769076/11986604
 */
export function getWindDirection(direction) {
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
  ][Math.round(direction / 22.5) % 16];
}

/**
 * Convert data to kilometers per hour
 * @param {*} speed
 * @returns
 */
export function toKph(speed) {
  return Math.floor(speed * 1.609344);
}

/**
 * https://stackoverflow.com/a/8016205/11986604
 * split the string and pop the value we need, discard the rest.
 */
export function parseTime(data, time, locale, timezone) {
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
 */
export function getMiles(meters) {
  return meters * 0.000621371192;
}

/**
 * get day of week based on epoch
 * @param {*} item
 * @returns
 */
export function dayOfWeek(item) {
  return new Date(item.dt * 1000)
    .toString()
    .split(" ")
    .slice(0, 3)
    .join(" ")
    .trim();
}

/**
 * Convert data to inches
 * @param {*} data
 * @returns
 */
export function mmToInches(data) {
  return data / 25.4;
}
