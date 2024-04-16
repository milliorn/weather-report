"use client";

import { GroupBase } from "react-select";
import { Response } from "react-select-async-paginate";

type CityOptions = {
  value: string;
  label: string;
}

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
}

type SearchData = {
  value: string;
  label: string;
}

type GeoApiOptionsType = {
  method: string;
  headers: {
    "X-RapidAPI-Host": string;
    "X-RapidAPI-Key": string;
  };
}


type LoadOptionsResponse = Response<SearchData, GroupBase<SearchData>, any>; // Add 'any' if additional data type is not specified

export type {
  CityOptions,
  FetchResponseData,
  GeoApiOptionsType,
  LoadOptionsResponse,
  SearchData
};

