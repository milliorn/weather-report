"use client";

import { format } from "date-fns";
import { WarningsProps } from "../models/componentProps";

/**
 * https://stackoverflow.com/a/20940191/11986604
 */

/**
 * Renders a warning component based on the provided alert data.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.alert - The alert data.
 * @returns {JSX.Element|null} The rendered warning component or null if no alert data is provided.
 */
const Warnings = ({ alert }: WarningsProps): JSX.Element | null => {
  if (!alert || alert.length === 0) return null;

  // Create a map to deduplicate alerts based on a unique identifier
  const uniqueAlertMap = new Map();

  alert.forEach((a) => {
    const key = `${a.sender_name}_${a.start}_${a.end}_${a.tags.join("_")}`; // Create a unique key based on the sender name, start, end, and tags
    if (!uniqueAlertMap.has(key)) {
      // If the alert is not already in the map, add it
      uniqueAlertMap.set(key, a); // Add the alert to the map
    }
  });

  const uniqueAlerts = Array.from(uniqueAlertMap.values()); // Get the unique alerts from the map

  return (
    <div className="py-4">
      {uniqueAlerts.map((weather, index) => {
        const startDate = new Date(weather.start * 1000);
        const endDate = new Date(weather.end * 1000);

        return (
          <div key={index} className="alert-message">
            <p className="pb-3 uppercase text-2xl">
              Warning: <span className="capitalize">{weather.tags[0]}</span>
            </p>
            <p className="text-lg">
              Issued by {weather.sender_name} at {format(startDate, "p")} on{" "}
              {format(startDate, "PPP")} until {format(endDate, "p")} on{" "}
              {format(endDate, "PPP")}.
            </p>
            <p>{weather.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Warnings;
