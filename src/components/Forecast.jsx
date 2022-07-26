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
  getWindDirection,
  mmToInches,
  parseTime,
  toCelsius,
  toKph,
} from "../helper";

export const Forecast = (props) => {
  const { data, timezone } = props;

  const BuildPanel = (data) => {
    const clouds = data.item.clouds + "%";
    const description = data.item.weather[0].description;
    const humidity = data.item.humidity + "%";
    const moon = getMoonPhase(data.item.moon_phase);
    const sunrise = parseTime(data, data.item.sunrise, "en-US", timezone);
    const sunset = parseTime(data, data.item.sunset, "en-US", timezone);
    const uvi = data.item.uvi;
    const winDirection = getWindDirection(data.item.wind_deg);

    const dewPoint =
      toCelsius(data.item.dew_point) + "°C | " + data.item.dew_point + "°F";

    const rain =
      data.item.rain < 0 || typeof data.item.rain === "undefined"
        ? "0.00"
        : data.item.rain +
          "mm | " +
          mmToInches(data.item.rain).toFixed(2) +
          "in";

    const windSpeed =
      toKph(data.item.wind_speed) + " kph | " + data.item.wind_speed + " mph";

    const windGust =
      toKph(data.item.wind_gust) + " kph | " + data.item.wind_gust + " mph";

    const collection = [
      { id: "Forecast", result: description },
      { id: "Dew Point", result: dewPoint },
      { id: "Clouds", result: clouds },
      { id: "Humidity", result: humidity },
      { id: "Rain", result: rain },
      { id: "UV Index", result: uvi },
      { id: "Moon", result: moon },
      { id: "Wind", result: windSpeed },
      { id: "Gust", result: windGust },
      { id: "Direction", result: winDirection },
      { id: "Sunrise", result: sunrise },
      { id: "Sunset", result: sunset },
    ];

    return collection.map((e, i) => {
      return (
        <div
          key={i}
          className="flex items-center justify-between h-8 capitalize daily-details-grid-item"
        >
          <span className="drop-shadow-md">{e.id}</span>
          <span className="text-neutral-300 drop-shadow-md">{e.result}</span>
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
                <BuildPanel item={item} idx={idx} />
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
