import { useState } from "react";
import { WEATHER_API_KEY } from "./.env";
import CurrentWeather from "./components/CurrentWeather";
import Search from "./components/Search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/onecall?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
      })
      .catch(console.log);
  };

  return (
    <div
      className="min-h-screen mx-auto my-0 bg-cover"
      style={{
        backgroundImage: `url("https://source.unsplash.com/random/?dark")`,
      }}
    >
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
