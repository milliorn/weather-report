"use client";

import { GroupBase } from "react-select";
import { Response } from "react-select-async-paginate";

type CityOptions = {
  label: string;
  value: string;
};

/**
 * Represents the response data structure returned by the fetch API.
 */
type FetchResponseData = {
  data: {
    country: string;
    latitude: number;
    longitude: number;
    name: string;
  }[];
};

type SearchData = {
  label: string;
  value: string;
};

type GeoApiOptionsType = {
  method: string;
  headers: {
    "X-RapidAPI-Host": string;
    "X-RapidAPI-Key": string;
  };
};

// Add 'any' if additional data type is not specified
type LoadOptionsResponse = Response<SearchData, GroupBase<SearchData>, unknown>;

export type {
  CityOptions,
  FetchResponseData,
  GeoApiOptionsType,
  LoadOptionsResponse,
  SearchData
};
