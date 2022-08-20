/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

const newUtilities = {
  ".nav-links": {
    "font-size": "1rem",
    "line-height": "1.5rem",
    "font-weight": "500",
    "color": "#6b7280",
    "transition": "all 300ms",
  },

  ".nav-links:hover": {
    "color": "#4f46e5",
  },
};

const newComponents = {
  ".nav-circle": {
    position: "relative",
    "&:hover:before": {
      position: "absolute",
      content: "''",
      width: "7px",
      height: "7px",
      backgroundColor: "#4f46e5",
      borderRadius: "50%",
      left: "50%",
      bottom: "-10px",
      transform: "translateX(-50%)",
    },
  },
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "white": "#FCFBFA",
      "light-gray": "#ddd",
      "md-gray": "#777",
      "dark-gray": "#232323",
      "purple": "#3B2F4A",
      "indigo": "#4f46e5",
      "dark-indigo": "#36309e",
      "midnight": "#131045",
      "light-brown": "#E5CCB8",
      "dark-brown": "#B8AAA7",
      "pink": "#F0BBE3",
      "light-purple": "#7E6A80",
      "orange": "#EAA451",
      "red": colors.red,
      "green": colors.green,
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addComponents, addUtilities }) {
      addComponents(newComponents);
      addUtilities(newUtilities);
    }),
  ],
};
