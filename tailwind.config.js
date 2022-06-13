/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        amazon_dark : '#131921',
        amazon_light : '#222f3e'
      }
    },
  },
  plugins: [],
}
