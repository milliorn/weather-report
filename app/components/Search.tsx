"use client";

import { useCallback, useMemo, useState } from "react";
import { SingleValue } from "react-select";
import { AsyncPaginate } from "react-select-async-paginate";
import { LoadOptionsResponse, SearchData } from "../models/apiTypes";
import { MapCityToOptionType, SearchProps } from "../models/componentProps";
import { fetchCities } from "../utils/MiscUtils";
import { Display } from "../config";

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

  /**
   * Maps a city object to an option object for a select input.
   *
   * @param city - The city object to be mapped.
   * @returns An object with `value` and `label` properties.
   */
  const mapCityToOption = useCallback(
    (city: MapCityToOptionType): { value: string; label: string } => ({
      value: `${city.latitude} ${city.longitude}`,
      label: `${city.name}, ${city.country}`
    }),
    []
  );

  /**
   * Loads options for the search input based on the provided input value.
   * @param inputValue - The input value to search for.
   * @returns A promise that resolves to a LoadOptionsResponse object containing the options.
   */
  const loadOptions = useMemo(
    () =>
      async (inputValue: string): Promise<LoadOptionsResponse> => {
        const inputTrimmed = inputValue.trim();

        if (inputTrimmed.length < Display.MIN_VALUE_LENGTH) {
          return { options: [] };
        }

        try {
          const responseData = await fetchCities(inputTrimmed);
          return {
            options: responseData.data.map(mapCityToOption)
          };
        } catch (error) {
          console.error("Failed to load options:", error);
          return { options: [] };
        }
      },
    [mapCityToOption]
  );

  /**
   * Handles the change event of the search input.
   *
   * @param {SingleValue<SearchData>} newValue - The new value of the search input.
   */
  const handleOnChange = useCallback(
    (newValue: SingleValue<SearchData>) => {
      setSearch(newValue);
      if (newValue) {
        onSearchChange(newValue);
      }
    },
    [onSearchChange]
  );

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
