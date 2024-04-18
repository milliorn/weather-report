"use client";

import { BuildPanelProps } from "../models/componentProps";
import { formatWeatherData } from "../utils/weatherUtils";

/**
 * Renders a panel displaying daily weather information.
 * @param item - The weather data for the day.
 * @param timezone - The timezone to display the weather data in.
 * @returns An array of JSX elements representing the daily weather panel.
 */
const DailyWeatherPanel = ({
  item,
  timezone
}: BuildPanelProps): JSX.Element[] => {
  const weatherData = formatWeatherData(item, timezone);

  return weatherData.map((data, i) => (
    <div
      key={`${data.id}_${i}`}
      className="flex items-center justify-between h-8 capitalize"
    >
      <span className="text-neutral-100 drop-shadow-md">{data.id}</span>
      <span className="drop-shadow-md">{data.result}</span>
    </div>
  ));
};

export default DailyWeatherPanel;
