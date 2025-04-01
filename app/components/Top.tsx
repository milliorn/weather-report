"use client";

import { TopProps } from "../models/componentProps";

/**
 * Renders the top section of the page.
 *
 * Displays the city name and current time.
 *
 * @param {TopProps} props - The component props.
 * @param {string} props.city - The city name.
 * @param {string} props.currentTime - The current time.
 * @returns {JSX.Element} The rendered top section.
 */
const Top = (props: TopProps): JSX.Element => {
  // Destructure props for clarity
  const { city, currentTime } = props;

  return (
    <div className="flex items-center justify-between top">
      <div className="flex justify-between text-xs capitalize section-row drop-shadow-md">
        <span className="text-lg font-semibold capitalize drop-shadow-md sm:text-2xl md:text-3xl">
          {city}
        </span>
      </div>
      <div className="flex justify-between text-xs capitalize section-row drop-shadow-md">
        <span className="text-lg font-semibold capitalize drop-shadow-md sm:text-2xl md:text-3xl">
          {currentTime}
        </span>
      </div>
    </div>
  );
};

export default Top;
