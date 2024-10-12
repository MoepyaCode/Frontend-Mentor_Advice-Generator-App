/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      colors: {
        blue: {
          dark: {
            main: '#202733',
            grayish: '#313A48',
          },
          grayish: '#4F5D74',
        },
        cyan: {
          light: '#CEE3E9',
        },
        green: {
          neon: '#53FFAA',
        }
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}