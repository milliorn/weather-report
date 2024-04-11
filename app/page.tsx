import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import CurrentWeather from "./components/CurrentWeather";

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const GeoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_KEY || "",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export default function Home(): JSX.Element {
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [search, setSearch] = useState<any>(null);

  const loadOptions = async (inputValue: string) => {
    try {
      const fetchResponse = await fetch(
        `${GEO_API_URL}/cities?offset=0&minPopulation=1&sort=-population&namePrefix=${inputValue}`,
        GeoApiOptions
      );
      const response = await fetchResponse.json();
      return {
        options: response.data.map((city: any) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.country}`,
          };
        }),
      };
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(`Error fetching data: ${err}`);
      return { options: [] };
    }
  };

  const handleOnSearchChange = (searchData: any) => {
    // Change the type of searchData to any
    setSearch(searchData);
    const [latitude, longitude] = searchData.value.split(" ");
    const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
    );

    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
      })
      // eslint-disable-next-line no-console
      .catch(console.warn);
  };

  const imageUrl = `url("https://source.unsplash.com/random/?weather")`;

  return (
    <div
      className="min-h-screen mx-auto my-0 bg-cover"
      style={{
        backgroundImage: imageUrl,
      }}
    >
      <label>
        <AsyncPaginate
          id="searchbar"
          placeholder="Click here and type city name."
          debounceTimeout={600}
          value={search}
          onChange={handleOnSearchChange}
          loadOptions={loadOptions}
        />
      </label>
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}
