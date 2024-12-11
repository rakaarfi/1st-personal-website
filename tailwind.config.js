/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        dm:'"DM Sans", sans-serif',
        josefinSlab:'"Josefin Slab", serif'
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
