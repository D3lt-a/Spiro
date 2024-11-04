/** @type {import('tailwindcss').Config} */

const colors = {
  primary: '#3a501c',       // Dark moss green
  secondary: '#707071',     // Dim gray
  background: '#141413',    // Night
  text: '#DFFF00',          // Eerie black
  accent: '#080804',        // Black
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: colors,
  },
  plugins: [],
}

