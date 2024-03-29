import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        identity: {
          primary: "#dc0a2d",
        },
        type: {
          bug: "#a7b723",
          dark: "#75574C",
          dragon: "#7037FF",
          electric: "#F9CF30",
          fairy: "#E69EAC",
          fighting: "#C12239",
          fire: "#F57D31",
          flying: "#A891EC",
          ghost: "#70559B",
          normal: "#AAA67F",
          grass: "#74CB48",
          ground: "#DEC16B",
          ice: "#9AD6DF",
          poison: "#A43E9E",
          psychic: "#FB5584",
          rock: "#B69E31",
          steel: "#B7B9D0",
          water: "#6493EB",
        },
        grayscale: {
          dark: "#1D1D1D",
          medium: "#666666",
          light: "#E0E0E0",
          background: "#EFEFEF",
          white: "#FFFFFF",
          wireframe: "#B8B8B8",
        },
      },
      boxShadow: {
        drop2dp: "0px 1px 3px 1px rgba(0, 0, 0, 0.20)",
        drop6dp: "0px 3px 12px 3px rgba(0, 0, 0, 0.20)",
        inner2dp: "0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset",
      },
      keyframes: {
        widthKeyFrame: {
          "0%": { width: "0" },
        },
      },
      animation: {
        widthAnimation: 'widthKeyFrame 1s',
      },
      screens: {
        'xs': '425px'
      }
    },
  },
  plugins: [],
};
export default config;
