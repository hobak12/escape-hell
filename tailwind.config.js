/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DC2626",
        header: "#292524",
        default: "#171717",
        date: "#C0C0C0",
      },
    },
  },
  plugins: [],
};
