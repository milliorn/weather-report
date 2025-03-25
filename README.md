# Weather-report App

[![pages-build-deployment](https://github.com/milliorn/Current-Weather/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/milliorn/Current-Weather/actions/workflows/pages/pages-build-deployment)
[![CodeQL](https://github.com/milliorn/Current-Weather/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/milliorn/Current-Weather/actions/workflows/github-code-scanning/codeql)

This repository contains a weather application built with **Next.js**, **Tailwind CSS**, and **TypeScript**, providing current weather information for user-searched locations. It integrates with the **OpenWeatherMap One Call 3.0 API** to fetch accurate weather data, and uses **GeoDB Cities** for location suggestions.

The interface is clean, responsive, and enriched with dynamic imagery to enhance user experience.

## Features

- Search for the current weather by city or town
- Displays temperature, humidity, wind speed, cloudiness, and more
- Fetches data from OpenWeatherMap’s One Call 3.0 API
- Location suggestions powered by GeoDB Cities API
- Background imagery using [Lorem Picsum](https://picsum.photos/)
- Fully responsive and accessible design

## Live Demo

To see the Current Weather application in action, visit the [live demo](https://current-weather-one.vercel.app/).

## Technologies Used

- **Next.js** – React framework for SSR and file-based routing
- **React** – UI library for components and rendering
- **TypeScript** – Static type checking
- **Tailwind CSS** – Utility-first CSS framework
- **OpenWeatherMap API** – Real-time weather data
- **GeoDB Cities API** – City autocomplete suggestions
- **Lorem Picsum** – Background imagery
- **Vercel** – Deployment and hosting

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/milliorn/Current-Weather.git`
2. Navigate to the project directory: `cd Current-Weather`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

⚠️ Make sure to create a .env.local file with your WEATHER_API_KEY for the app to function correctly.

## Contributing

Contributions are welcome! If you encounter any issues or have ideas for new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/api/one-call-3) for weather data  
- [GeoDB Cities](https://rapidapi.com/wirefreethought/api/geodb-cities) for city suggestions  
- [Lorem Picsum](https://picsum.photos/) for dynamic weather imagery  
- Thanks to all open-source maintainers and contributors who made this project possible.

