// Importing necessary utilities and config
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

// Simplified fetch function
async function fetchCityData(apiUrl: string, options: FetchOptions): Promise<any> {
  const response = await fetch(apiUrl, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return data;
}

function handleError(res: NextApiResponse, error: Error): void {
  console.error("Failed to load city data:", error);
  res.status(HTTP_INTERNAL_SERVER_ERROR).json({ error: "Failed to fetch data" });
}

// API handler
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { query } = req.query as { query: string };

  const apiUrl = `${GEO_API_URL}/cities?minPopulation=1000&sort=-population&namePrefix=${query}`;

  if (!API_KEY) {
    console.error("Missing API Key for X-RapidAPI");
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({ error: "API Key is not configured." });
    return;
  }

  try {
    const data = await fetchCityData(apiUrl, { method: "GET", headers });
    res.status(HTTP_OK).json(data);
  } catch (error: any) {
    handleError(res, error);
  }
}
