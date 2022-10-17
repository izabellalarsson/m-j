/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        italiana: ['Italiana', 'serif'],
      },
      colors: {
        secondary: '#fffbf6',
        primary: '#fe502d',
        grey: '#323232',
      },
    },
  },
  plugins: [],
}
