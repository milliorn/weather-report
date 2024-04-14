"use client";

import React, { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Search from "./components/Search";
import { SearchData } from "./models/props";

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState<any>(null);

  /**
   * Handles the change event of the search input.
   * Fetches weather data based on the selected location and updates the current weather state.
   *
   * @param searchData - The selected search data containing the latitude and longitude.
   */
  const handleOnSearchChange = (searchData: SearchData | null) => {
    if (searchData === null) {
      setCurrentWeather(null);
      return; // Return early if there is no search data
    }

    const [latitude, longitude] = searchData.value.split(" ");
    const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

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
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
      })
      .catch((error) => {
        console.warn("Failed to fetch weather data:", error);
        setCurrentWeather(null); // Optionally reset weather data on error
      });
  };

  const imageUrl = `url("https://source.unsplash.com/random/?weather")`;

  return (
    <div
      className="min-h-screen mx-auto my-0 bg-cover"
      style={{ backgroundImage: imageUrl }}
    >
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}
