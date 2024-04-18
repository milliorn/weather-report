"use client";

import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Search from "./components/Search";
import { IMAGE_URL, WEATHER_API_URL } from "./config";
import { SearchData } from "./models/apiTypes";
import { CurrentWeatherData } from "./models/componentProps";

export default function Home() {
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherData | null>(null);

  /**
   * Handles the change event of the search input.
   * Fetches weather data based on the selected location and updates the current weather state.
   *
   * @param searchData - The selected search data containing the latitude and longitude.
   */
  const handleOnSearchChange = (searchData: SearchData | null) => {
    if (searchData === null) {
      setCurrentWeather(null);
      // Return early if there is no search data
      return;
    }

    const [latitude, longitude] = searchData.value.split(" ");

    fetch(
      `${WEATHER_API_URL}/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=imperial`
    )
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
        // Optionally reset weather data on error
        setCurrentWeather(null);
      });
  };

  return (
    <div
      className="min-h-screen mx-auto my-0 bg-cover text-white"
      style={{ backgroundImage: IMAGE_URL }}
    >
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}
