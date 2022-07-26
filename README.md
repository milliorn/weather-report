# React Current Weather App

[![CodeQL](https://github.com/milliorn/Current-Weather/actions/workflows/codeql.yml/badge.svg)](https://github.com/milliorn/Current-Weather/actions/workflows/codeql.yml)
[![Dependency Review](https://github.com/milliorn/Current-Weather/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/milliorn/Current-Weather/actions/workflows/dependency-review.yml)
[![Lint Code Base](https://github.com/milliorn/Current-Weather/actions/workflows/super-linter.yml/badge.svg)](https://github.com/milliorn/Current-Weather/actions/workflows/super-linter.yml)
[![DevSkim](https://github.com/milliorn/Current-Weather/actions/workflows/devskim.yml/badge.svg)](https://github.com/milliorn/Current-Weather/actions/workflows/devskim.yml)
[![njsscan sarif](https://github.com/milliorn/Current-Weather/actions/workflows/njsscan.yml/badge.svg)](https://github.com/milliorn/Current-Weather/actions/workflows/njsscan.yml)
[![OSSAR](https://github.com/milliorn/Current-Weather/actions/workflows/ossar.yml/badge.svg)](https://github.com/milliorn/Current-Weather/actions/workflows/ossar.yml)
[![pages-build-deployment](https://github.com/milliorn/Current-Weather/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/milliorn/Current-Weather/actions/workflows/pages/pages-build-deployment)
[![pmd](https://github.com/milliorn/Current-Weather/actions/workflows/pmd.yml/badge.svg)](https://github.com/milliorn/Current-Weather/actions/workflows/pmd.yml)

## Getting Started

This project was bootstrapped with [React](https://github.com/facebook/create-react-app) and [Tailwind CSS](https://tailwindcss.com/docs/guides/create-react-app). It is powered by [OpenWeather](https://openweathermap.org/), [GeoDB Cities](https://rapidapi.com/wirefreethought/api/geodb-cities/) and [Unsplash](https://unsplash.com/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run predeploy`

Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build.

### `npm run deploy`

This script will push the contents of the `build` folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist. For more information see the section about [GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages).
