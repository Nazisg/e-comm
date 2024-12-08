/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#FB7181',
        'blue': '#40BFFF',
        'gray': '#9098B1'
      },
      backgroundColor: {
        'red': '#FB7181',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #000000 -73.06%, rgba(0, 0, 0, 0) 100%)',
        'hero-image': 'url("./src/shared/media/imgs/banner.png")',
        'mobile-image':'url("./src/shared/media/imgs/mobile-banner.png")'
      },
      boxShadow: {
        'boxshadow': '0px 10px 25px 0px #66666626;'
      }
    },
  },
  plugins: [],
}

