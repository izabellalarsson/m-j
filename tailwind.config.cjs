/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        italiana: ['Italiana', 'serif'],
      },
      colors: {
        primary: {
          primary: '#f2e3d4',
          light: '#ffffff',
          dark: '#bfb1a3',
        },
        secondary: {
          secondary: '#3ca6a6',
          light: '#73d8d7',
          dark: '#007777',
        },
        grey: '#323232',
      },
    },
  },
  plugins: [],
}
