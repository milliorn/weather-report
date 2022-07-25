import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "../css/Forecast.css";
import { getWindDirection, toCelsius } from "../helper";

export const Forecast = ({ data }) => {
  return (
    <div className="mt-4">
      <Accordion allowZeroExpanded>
        {data.daily.map((item, idx) => (
          <AccordionItem key={idx}>
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
              <div className="sm:text-lg md:text-xl 2xl:text-2xl daily-details-grid">
                <div className="flex items-center justify-between h-8 daily-details-grid-item ">
                  <label>Clouds : </label>
                  <span>{getClouds(item)}%</span>
                </div>
                <div className="flex items-center justify-between h-8 daily-details-grid-item ">
                  <label>Humidity : </label>
                  <span>{getHumidity(item)}%</span>
                </div>
                <div className="flex items-center justify-between h-8 daily-details-grid-item ">
                  <label>UV Index : </label>
                  <span>{getUV(item)}</span>
                </div>
                <div className="flex items-center justify-between h-8 daily-details-grid-item ">
                  <label>Wind : </label>
                  <span>{getDirection(item)}</span>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  function getDirection(item) {
    return getWindDirection(item.wind_deg);
  }

  function getUV(item) {
    return item.uvi;
  }

  function getHumidity(item) {
    return item.humidity;
  }

  function getClouds(item) {
    return item.clouds;
  }

  function dayOfWeek(item) {
    return new Date(item.dt * 1000)
      .toString()
      .split(" ")
      .slice(0, 3)
      .join(" ")
      .trim();
  }
};
