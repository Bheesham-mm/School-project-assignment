/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        skyblue: 'rgb(0 187 174)',
        skyBlueT: '#00bbae'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'bottom-gray': '0 4px 6px rgb(128 128 128 / 15%)', // Custom gray bottom shadow
      },
      keyframes: {
        updown: {
          '0%, 100%': { marginTop: '0px' }, // Start and end at original position
          '50%': { marginTop: '20px' },    // Move down by 12px at the midpoint
        },
      },
      animation: {
        updown: 'updown 1s infinite', // Name and duration of the animation
      },
    },
  },
  plugins: [],
};