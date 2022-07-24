import React from "react";
import {
  Accordion,
  AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel
} from "react-accessible-accordion";
import "../css/Forecast.css";
import { getWindDirection, toCelsius } from "../helper";

export const Forecast = ({ data }) => {
  return (
    <div>
      <Accordion allowZeroExpanded className="mt-4">
        {data.daily.map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex items-center h-16 px-1 py-5 m-1 text-sm bg-transparent border-t border-b border-l border-r border-white drop-shadow-md daily-item rounded-xl ">
                  <span className="flex-auto ml-2 font-semibold day">
                    {dayOfWeek(item)}
                  </span>
                  <span className="min-max">
                    {toCelsius(item.temp.min)}°C | {toCelsius(item.temp.max)}°C
                    {" | "}
                    {Math.floor(item.temp.min)}°F | {Math.floor(item.temp.max)}
                    °F
                  </span>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Clouds : </label>
                  <label>{getClouds(item)}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity : </label>
                  <label>{getHumidity(item)}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>UV Index : </label>
                  <label>{getUV(item)}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind : </label>
                  <label>{getDirection(item)}</label>
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
