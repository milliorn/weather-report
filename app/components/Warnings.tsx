"use client";

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
  if (Array.isArray(alert) && alert.length > 0) {
    const weather = alert[0];
    const finish = new Date(weather.end * 1000);
    const begin = new Date(weather.start * 1000);
    const dateBegin = begin.toLocaleDateString();
    const dateEnd = finish.toLocaleDateString();
    const sender_name = weather.sender_name;
    const tag = weather.tags[0];
    const timeEnd = finish.toLocaleTimeString();
    const timeStart = begin.toLocaleTimeString();

    return (
      <div className="py-4">
        <p className="pb-3 uppercase sm:pb-4 tase sm:text-2xl drop-shadow-md">
          Warning: <span className="p-1 capitalize">{tag}</span>
        </p>
        <p className="pb-3 sm:pb-4 sm:text-lg md:text-xl drop-shadow-md">
          Issued by {sender_name} at {timeStart} on {dateBegin} until {timeEnd}{" "}
          on {dateEnd}.
        </p>
        <p className="pb-3 xl:text-lg sm:pb-4 2xl:text-xl drop-shadow-md">
          {weather.description}
        </p>
      </div>
    );
  }

  return null;
};
