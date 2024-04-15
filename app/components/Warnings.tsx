"use client";

import { format } from "date-fns";
import { WarningsProps } from "../models/props";

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
export const Warnings = ({ alert }: WarningsProps): JSX.Element | null => {
  if (!alert || !alert.length) return null;

  if (Array.isArray(alert) && alert.length > 0) {
    return (
      <div className="py-4">
        {alert.map((weather, index) => (
          <div key={index} className="alert-message">
            <p className="pb-3 uppercase sm:pb-4 text-2xl drop-shadow-md">
              Warning: <span className="p-1 capitalize">{weather.tags[0]}</span>
            </p>
            <p className="pb-3 sm:pb-4 text-lg md:text-xl drop-shadow-md">
              Issued by {weather.sender_name} at{" "}
              {format(new Date(weather.start * 1000), "p")} on{" "}
              {format(new Date(weather.start * 1000), "PPP")} until{" "}
              {format(new Date(weather.end * 1000), "p")} on{" "}
              {format(new Date(weather.end * 1000), "PPP")}.
            </p>
            <p className="pb-3 text-lg sm:pb-4 2xl:text-xl drop-shadow-md">
              {weather.description}
            </p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};
