/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        mint: '#EBF3E8',
        lavender: '#FCFBFB',
      },
      backgroundImage:{
        'title-image':`url("./homeimages/background.jpg")`
      }
    },
  },
  
  plugins: [],
}