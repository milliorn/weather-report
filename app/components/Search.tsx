"use client";

import { useState } from "react";
import { GroupBase, SingleValue } from "react-select";
import {
  AsyncPaginate,
  LoadOptions
} from "react-select-async-paginate";
import {
  FetchResponseData,
  GeoApiOptionsType,
  LoadOptionsResponse,
  SearchData,
  SearchProps,
} from "../models/props";

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

const geoApiOptions: GeoApiOptionsType = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPID_KEY || "",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

/**
 * Search component for searching cities.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.onSearchChange - The function to be called when the search value changes.
 * @returns {JSX.Element} The Search component.
 */
const Search = ({ onSearchChange }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<SearchData | null>(null);

  const loadOptions: LoadOptions<
    SearchData,
    GroupBase<SearchData>,
    string
  > = async (inputValue: string): Promise<LoadOptionsResponse> => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000&sort=-population&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const responseData: FetchResponseData = await response.json();

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return {
        options: responseData.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.country}`,
        })),
      };
    } catch (error) {
      console.error("Failed to load options:", error);
      return { options: [] };
    }
  };

  const handleOnChange = (newValue: SingleValue<SearchData>) => {
    setSearch(newValue);
    if (newValue) onSearchChange(newValue);
  };

  return (
    <label>
      <AsyncPaginate
        /* fix for Warning: Prop `id` did not match. Server: "react-select-6-live-region" Client: "react-select-2-live-region"
      https://github.com/JedWatson/react-select/issues/5459#issuecomment-1312245530
      */
        debounceTimeout={300}
        id="searchbar"
        instanceId={"searchbar"}
        loadOptions={loadOptions}
        onChange={handleOnChange}
        placeholder="Click here and type city name."
        value={search}
      />
    </label>
  );
};

export default Search;
