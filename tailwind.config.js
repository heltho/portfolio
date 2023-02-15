/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scooter: {
          DEFAULT: "#32C4D8",
          50: "#D6DFFF",
          100: "#BBEBF2",
          200: "#99E2EC",
          300: "#77D8E5",
          400: "#54CEDF",
          500: "#32C4D8",
          600: "#229FB0",
          700: "#197581",
          800: "#104A52",
          900: "#072023",
        },
        "white-alt": "#DFDFDF",
        dark: "#2F333D",
        light: "#363C4A",
      },
    },
  },
  plugins: [],
};
