/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
	fontFamily: {
	  italiana: ['Italiana', 'serif'],
	},
	colors: {
	accent: '#F2E3D5',
	seconndary: '#026773',
	secondary: '#3CA6A6',
	primary: '#024959',
	onBackground: '#3CA6A6',
	}
    },
  },
  plugins: [],
}
