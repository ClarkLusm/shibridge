/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Sora"'],
      'body': ['"Sora"'],
    },
    colors: {
      'blue': '#3D6EFF',
      'gray': '#637592',
      'midnight': '#191D24',
      'black': '#111318',
      'black0': '#080A0C',
      'green': '#00DBB6',
      'red': '#E03232',
    },
    screens: {
      sm: '600px',
      md: '728px',
      lg: '1024px',
    },
    extend: {},
  },
  plugins: [],
}

