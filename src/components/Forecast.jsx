import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import {
  dayOfWeek,
  getMoonPhase,
  mmToInches,
  parseTime,
  toCelsius,
  toKph,
} from "../helper";

/**
 * This pagination builds the panels below the bottom element
 * @param {*} props
 * @returns
 */
export const Forecast = (props) => {
  const { data, timezone } = props;

  /**
   * This builds the panel by mapping over the data and pushing its value into elements
   * @param {*} value
   * @returns
   */
  const BuildPanel = (value) => {
    const clouds = value.item.clouds + "%";
    const description = value.item.weather[0].description;
    const humidity = value.item.humidity + "%";
    const moon = getMoonPhase(value.item.moon_phase);
    const sunrise = parseTime(value, value.item.sunrise, "en-US", timezone);
    const sunset = parseTime(value, value.item.sunset, "en-US", timezone);
    const uvi = value.item.uvi;
    const rain = value.item.pop * 100 + "%"; //Rain is given to us from 0-1, 1 meaning 100%
    const dewPoint =
      toCelsius(value.item.dew_point) + "°C | " + value.item.dew_point + "°F";

    const precipitation =
      value.item.rain < 0 || typeof value.item.rain === "undefined"
        ? "0.00"
        : value.item.rain +
          "mm | " +
          mmToInches(value.item.rain).toFixed(2) +
          "in";

    const windSpeed =
      toKph(value.item.wind_speed) + " kph | " + value.item.wind_speed + " mph";

    const windGust =
      toKph(value.item.wind_gust) + " kph | " + value.item.wind_gust + " mph";

    const collection = [
      { id: "Forecast", result: description },
      { id: "Dew Point", result: dewPoint },
      { id: "Clouds", result: clouds },
      { id: "Humidity", result: humidity },
      { id: "Rain", result: rain },
      { id: "Precipitation", result: precipitation },

      { id: "UV Index", result: uvi },
      { id: "Moon", result: moon },
      { id: "Wind", result: windSpeed },
      { id: "Gust", result: windGust },
      { id: "Sunrise", result: sunrise },
      { id: "Sunset", result: sunset },
    ];

    return collection.map((e, i) => {
      return (
        <div
          key={e + " " + i}
          className="flex items-center justify-between h-8 capitalize daily-details-grid-item"
        >
          <span className="text-neutral-100 drop-shadow-md">{e.id}</span>
          <span className="drop-shadow-md">{e.result}</span>
        </div>
      );
    });
  };

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
              <div className="grid grid-cols-1 sm:grid-cols-2 flex-auto py-1.5 px-4 gap-y-0 gap-x-5 sm:text-lg md:text-xl 2xl:text-2xl daily-details-grid">
                <BuildPanel item={item} />
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
