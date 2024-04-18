"use client";

import { formatDate, processAlerts } from "../utils/weatherUtils";
import { WarningsProps } from "../models/componentProps";

/**
 * https://stackoverflow.com/a/20940191/11986604
 */

/**
 * Renders weather warnings based on the provided alert data.
 *
 * @param {WarningsProps} props - The component props.
 * @param {Alert[]} props.alert - The array of alert objects.
 * @returns {JSX.Element | null} The rendered weather warnings or null if no alerts are present.
 */
const Warnings = ({ alert }: WarningsProps): JSX.Element | null => {
  if (!alert || alert.length === 0) {
    return null;
  }

  const uniqueAlerts = processAlerts(alert);

  return (
    <div className="py-4">
      {uniqueAlerts.map((weather, index) => (
        <div key={index} className="alert-message">
          <p className="py-4 uppercase text-2xl">
            Warning: <span className="capitalize">{weather.tags[0]}</span>
          </p>
          <p className="text-lg">
            Issued by {weather.sender_name} at {formatDate(weather.start)} until{" "}
            {formatDate(weather.end)}.
          </p>
          <p className="my-4">{weather.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Warnings;
