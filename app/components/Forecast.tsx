"use client";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { dayOfWeek, toCelsius } from "../helper";
import { ForecastProps } from "../models/props";
import DailyWeatherPanel from "./DailyWeatherPanel";

/**
 * This pagination builds the panels below the bottom element
 * Renders the Forecast component.
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.data - The weather data.
 * @param {string} props.timezone - The timezone.
 * @returns {JSX.Element} The Forecast component.
 */
const Forecast = ({ data, timezone }: ForecastProps): JSX.Element => {
  return (
    <div className="mt-4">
      <Accordion allowZeroExpanded>
        {data.daily.map((item, idx) => (
          <AccordionItem key={`${idx}_${item}`}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="py-1">
                  <div className="flex items-center h-16 px-1 py-5 m-1 text-sm bg-transparent border-t border-b border-l border-r border-white drop-shadow-md rounded-xl hover:border-black hover:font-bold">
                    <span className="flex-auto ml-2 font-semibold day sm:text-lg xl:text-xl 2xl:text-2xl">
                      {dayOfWeek(item)}
                    </span>
                    <span className="sm:text-lg xl:text-xl 2xl:text-2xl">
                      {toCelsius(item.temp.min)}°C | {toCelsius(item.temp.max)}
                      °C
                      {" | "}
                      {Math.floor(item.temp.min)}°F |{" "}
                      {Math.floor(item.temp.max)}
                      °F
                    </span>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="grid grid-cols-1 sm:grid-cols-2 flex-auto py-1.5 px-4 gap-y-0 gap-x-5 sm:text-lg md:text-xl 2xl:text-2xl">
                <DailyWeatherPanel item={item} timezone={timezone} />
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
