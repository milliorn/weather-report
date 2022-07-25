import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { getWindDirection, toCelsius, dayOfWeek } from "../helper";

export const Forecast = ({ data }) => {
  return (
    <div className="mt-4">
      <Accordion allowZeroExpanded>
        {data.daily.map((item, idx) => (
          <AccordionItem key={`${idx}_${item}`}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="py-1">
                  <div className="flex items-center h-16 px-1 py-5 m-1 text-sm bg-transparent border-t border-b border-l border-r border-white hover:border-transparent drop-shadow-md daily-item rounded-xl ">
                    <span className="flex-auto ml-2 font-semibold day sm:text-lg xl:text-xl 2xl:text-2xl">
                      {dayOfWeek(item)}
                    </span>
                    <span className="min-max sm:text-lg xl:text-xl 2xl:text-2xl">
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
              <div className="grid flex-auto py-1.5 px-4 gap-y-0 gap-x-5 sm:text-lg md:text-xl 2xl:text-2xl daily-details-grid">
                <div className="flex items-center justify-between h-8 daily-details-grid-item ">
                  <span>Clouds : </span>
                  <span>{item.clouds}%</span>
                </div>
                <div className="flex items-center justify-between h-8 daily-details-grid-item ">
                  <span>Humidity : </span>
                  <span>{item.humidity}%</span>
                </div>
                <div className="flex items-center justify-between h-8 daily-details-grid-item ">
                  <span>UV Index : </span>
                  <span>{item.uvi}</span>
                </div>
                <div className="flex items-center justify-between h-8 daily-details-grid-item ">
                  <span>Wind : </span>
                  <span>{getWindDirection(item.wind_deg)}</span>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
