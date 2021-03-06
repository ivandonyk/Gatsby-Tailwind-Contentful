module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "ar-dark": {
          DEFAULT: "#050A27",
          1: "#2B2F45",
          2: "#525668",
        },
        "ar-orange": "#F68720",
        "ar-orange": {
          DEFAULT: "#F68720",
          dark: "#A95A33",
        },
        "ar-fountain-blue": "#5CC2BD",
        "ar-picton-blue": "#38B9E2",
        "ar-turquoise": "#38E2A5",
        "ar-mantis": "#82CA69",
        "ar-wattle": "#C7DB4E",
      },
      fontFamily: {
        sans: ["Comfortaa", "sans-serif"],
      },
      backgroundImage: {
        "connection-2": "url(../images/connections-2.svg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
