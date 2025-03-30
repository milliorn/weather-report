"use client";

import { format } from "date-fns";
import { Time } from "../config";

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
  // Validate that time is a finite number.
  if (!Number.isFinite(time)) {
    console.warn("parseTime: Invalid timestamp received", time);
    return "Invalid time";
  }

  // Use the constant from config instead of the literal 1000
  const dateTime = new Date(time * Time.MILLISECONDS_PER_SECOND);

  if (isNaN(dateTime.getTime())) {
    console.warn("parseTime: Date conversion failed", time);
    return "Invalid time";
  }

  // Format the date and return the time portion
  const parts = dateTime
    .toLocaleString(locale, { timeZone: timezone })
    .split(",");
  return parts.length > 1 ? parts.pop()!.trim() : parts[0];
};

/**
 * Formats a timestamp into a string representation.
 * @param timestamp - The timestamp to format.
 * @returns The formatted string representation of the timestamp.
 */
const formatDate = (timestamp: number) => {
  return format(
    new Date(timestamp * Time.MILLISECONDS_PER_SECOND),
    "p 'on' PPP"
  );
};

export { formatDate, parseTime };
