import "./App.css";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import {
  TIME_API_KEY,
  TIME_URL,
  WEATHER_API_KEY,
  WEATHER_API_URL,
} from "./.env";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    const currentTimeFetch = fetch(
      `${TIME_URL}${TIME_API_KEY}&lat=${latitude}&long=${longitude}`
    );

    Promise.all([currentWeatherFetch, currentTimeFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const timeResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setCurrentTime({ city: searchData.label, ...timeResponse });
      })
      .catch(console.log);
  };

  return (
    <div
      className="max-w-full	bg-no-repeat bg-cover my-0 mx-auto"
      style={{
        backgroundImage: `url("https://source.unsplash.com/random")`,
      }}
    >
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && (
        <CurrentWeather data={currentWeather} time={currentTime} />
      )}
    </div>
  );
}

export default App;
