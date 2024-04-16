"use client";

import { TopProps } from "../models/componentProps";

/**
 * Renders the top section of the page.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.city - The city name.
 * @param {string} props.currentTime - The current time.
 * @returns {JSX.Element} The rendered top section.
 */
const Top = (props: TopProps): JSX.Element => {
  const { city, currentTime } = props;
  const data = [city, currentTime];

  return (
    <div className="flex items-center justify-between top">
      {data.map((item, index) => (
        <div
          key={`${index}_${item}`}
          className="flex justify-between text-xs capitalize section-row drop-shadow-md"
        >
          <span className="text-lg font-semibold capitalize drop-shadow-md sm:text-2xl md:text-3xl">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Top;
