/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "backgray": "url('/back1.png')",
        "backcolor": "url('/back2.png')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        staat: ["Staatliches", "sans-serif"]
      },
      colors: {
        primary: "#ff7b00"
      }
    },
  },
  plugins: [],
};
