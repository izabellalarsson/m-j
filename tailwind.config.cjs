/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        italiana: ['Italiana', 'serif'],
      },
      boxShadow: {
        squareBox: '12px 14px #3F5A45',
      },
      colors: {
        secondary: '#FCF7E3',
        accent: '#F2EDAA',
        primary: '#3F5A45',
        grey: '#323232',
      },
    },
  },
  plugins: [],
}
