"use client";

import { useState } from "react";
import { ActionMeta, GroupBase, SingleValue } from "react-select";
import { AsyncPaginate, LoadOptions } from "react-select-async-paginate";
import {
  FetchResponseData,
  GeoApiOptionsType,
  SearchData,
} from "../models/props";

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

const GeoApiOptions: GeoApiOptionsType = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPID_KEY || "", // Default to an empty string if undefined
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const Search = ({
  onSearchChange,
}: {
  onSearchChange: (searchData: SearchData | null) => void;
}): JSX.Element => {
  const [search, setSearch] = useState<SearchData | null>(null);

  const loadOptions: LoadOptions<
    SearchData,
    GroupBase<SearchData>,
    string
  > = async (inputValue) => {
    try {
      const fetchResponse = await fetch(
        `${GEO_API_URL}/cities?offset=0&minPopulation=1&sort=-population&namePrefix=${inputValue}`,
        GeoApiOptions
      );
      const response: FetchResponseData = await fetchResponse.json();
      return {
        options: response.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.country}`,
        })),
      };
    } catch (err) {
      console.error(err);
      return { options: [] };
    }
  };

  const handleOnChange = (
    newValue: SingleValue<SearchData>,
    actionMeta: ActionMeta<SearchData>
  ) => {
    setSearch(newValue);
    onSearchChange(newValue);
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
