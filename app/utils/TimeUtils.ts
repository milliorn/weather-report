import { format } from "date-fns";
import { MILLISECONDS_PER_SECOND } from "../config";

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
 * Formats a timestamp into a string representation.
 * @param timestamp - The timestamp to format.
 * @returns The formatted string representation of the timestamp.
 */
const formatDate = (timestamp: number) => {
  return format(new Date(timestamp * MILLISECONDS_PER_SECOND), "p 'on' PPP");
};

export { formatDate, parseTime };
