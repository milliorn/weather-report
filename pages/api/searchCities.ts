import { NextApiRequest, NextApiResponse } from "next";
import { GEO_API_URL, HTTP_INTERNAL_SERVER_ERROR, HTTP_OK } from "./constants";

const API_KEY = process.env.X_RAPID_KEY || "";

const headers = {
  "X-RapidAPI-Key": API_KEY,
  "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
};

type FetchOptions = {
  method: string;
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
}

type CityData = {
  apiUrl: string;
  options: FetchOptions;
}

/**
 * Fetches city data from the specified API endpoint.
 * @param cityData - The city data object containing the API URL and options.
 * @returns A promise that resolves to the fetched city data.
 * @throws An error if the HTTP response is not successful.
 */
async function fetchCityData(cityData: CityData): Promise<unknown> {
  const { apiUrl, options } = cityData;

  const response = await fetch(apiUrl, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return data;
}

/**
 * Handles errors that occur while loading city data.
 * @param res - The NextApiResponse object.
 * @param error - The error that occurred.
 */
function handleError(res: NextApiResponse, error: Error): void {
  console.error("Failed to load city data:", error);
  res.status(HTTP_INTERNAL_SERVER_ERROR).json({ error: "Failed to fetch data" });
}

/**
 * Handles the API request for searching cities.
 *
 * @param req - The NextApiRequest object representing the incoming request.
 * @param res - The NextApiResponse object representing the outgoing response.
 * @returns A Promise that resolves to void.
 */
// eslint-disable-next-line max-statements
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { query } = req.query as { query: string };

  // Construct the API URL with the limit parameter
  const apiUrl = `${GEO_API_URL}/cities?minPopulation=1000&sort=-population&namePrefix=${query}`;

  if (!API_KEY) {
    console.error("Missing API Key for X-RapidAPI");
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({ error: "API Key is not configured." });
    return;
  }

  try {
    const data = await fetchCityData({ apiUrl, options: { method: "GET", headers } });
    res.status(HTTP_OK).json(data);
  } catch (error) {
    if (error instanceof Error) {
      handleError(res, error);
    } else {
      handleError(res, new Error("Unknown error"));
    }
  }
}