/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports ={
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : ["Roboto", "sans-serif"]
      },
      gridTemplateColumns : {
        '70/30' : "70% 28%"
      }
    },
  },
  plugins: [],
}