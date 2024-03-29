/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '547px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors:{
        primary: "#ff4800",
        secondary: "#FF7A00",
        navgrey: "#676161",
        headergrey: "#A4A1A1",
        blue: {
          450: '#5F99F7'
        }
      },
      fontFamily:{
        'lato': ['Lato', 'sans-serif']
      },
      height: {
        '128': '40rem',
        '124': '34rem'
      },
      width: {
        '104': '28rem',
        '2/12': '10%'
      }
    },
  },
  plugins: [],
}