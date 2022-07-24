import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const GeoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const fetchResponse = await fetch(
        `${GEO_API_URL}/cities?offset=0&minPopulation=1&sort=-population&namePrefix=${inputValue}`,
        GeoApiOptions
      );
      const response = await fetchResponse.json();
      return {
        options: response.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.country}`,
          };
        }),
      };
    } catch (err) {
      console.error(err);
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <label>
      <AsyncPaginate
        id="searchbar"
        placeholder="Click here and type city name."
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </label>
  );
};

export default Search;
