/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        kotra: ["KOTRAHOPE"],
      },
      colors: {
        skyblue: "#E9F3FF",
        blue: "#A6C7EF",
        grey: "#B4B4B4",
        black: "#000000",
      },
    },
  },
};
