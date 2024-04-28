/* eslint-disable camelcase */
import { type MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: "Weather Report",
    short_name: "Weather Report",
    description: "A weather report app built with Next.js and TypeScript. 🌦️",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "./favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
        purpose: "maskable"
      },
      {
        src: "./android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "./android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "./apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
};

export default manifest;
