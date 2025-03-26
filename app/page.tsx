"use client";

import { useCallback, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Search from "./components/Search";
import { SearchData } from "./models/apiTypes";
import { CurrentWeatherData } from "./models/componentProps";
import { Display } from "./config";

export default function Home() {
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherData | null>(null);

  /**
   * Handles the change event of the search input.
   * Fetches weather data based on the selected location and updates the current weather state.
   *
   * @param searchData - The selected search data containing the latitude and longitude.
   */
  const handleOnSearchChange = useCallback((searchData: SearchData | null) => {
    if (searchData === null) {
      setCurrentWeather(null);
      // Return early if there is no search data
      return;
    }

    const [latitude, longitude] = searchData.value.split(" ");

    fetch(`/api/weather?lat=${latitude}&lon=${longitude}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((weatherResponse) => {
        setCurrentWeather({
          city: searchData.label,
          alerts: weatherResponse.alerts || [],
          ...weatherResponse
        });
      })
      .catch((error) => {
        console.warn("Failed to fetch weather data:", error);
        setCurrentWeather(null);
      });
  }, []);

  return (
    <div
      className="min-h-screen mx-auto my-0 bg-cover text-black bg-black shadow-xl overflow-x-hidden"
      style={{ backgroundImage: Display.IMAGE_URL }}
    >
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather ? (
        <div className="pt-4 text-white bg-black bg-opacity-60 shadow-xl min-h-screen">
          <CurrentWeather data={currentWeather} />
        </div>
      ) : (
        <div className="text-center p-10 text-white bg-black bg-opacity-60 shadow-xl min-h-screen">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold drop-shadow-lg">
            Weather Report
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-8 drop-shadow-md">
            Enter a city in the field above to see the weather in that area.
          </p>
        </div>
      )}
    </div>
  );
}
