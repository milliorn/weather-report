type BottomProps = {
  alert: any[];
  clouds: number;
  dew_point: number;
  heatIndex: number;
  humidity: number;
  lat: number;
  lon: number;
  moonPhase: string;
  sunrise: string;
  sunset: string;
  timezone: string;
  uvi: number;
  visibility: number;
  windDirection: string;
  windSpeed: number;
  wind_gust: number;
};

type WeatherDetail = {
  id: string;
  result: string | number;
};

export type {
  BottomProps,
  WeatherDetail,
}