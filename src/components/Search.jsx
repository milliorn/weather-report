import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { X_RAPID_KEY } from "../.env";

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const GeoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": X_RAPID_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?limit=5&offset=0&minPopulation=8000&sort=-population&namePrefix=${inputValue}`,
      GeoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.country}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
