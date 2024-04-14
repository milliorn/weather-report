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

type WeatherItem = {
  clouds: number;
  humidity: number;
  moon_phase: number;
  sunrise: number;
  sunset: number;
  uvi: number;
  pop: number;
  dew_point: number;
  rain?: number;
  wind_speed: number;
  wind_gust: number;
  weather: [ { description: string } ];
  temp: {
    min: number;
    max: number;
  };
  dt: number;
}

type ForecastProps = {
  data: {
    daily: WeatherItem[];
  };
  timezone: string;
}

type BuildPanelProps = {
  item: WeatherItem;
}

export type {
  BottomProps,
  WeatherDetail,
  WeatherItem,
  ForecastProps,
  BuildPanelProps
}