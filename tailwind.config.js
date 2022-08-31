/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'custom-blue' : '#6c83ff',
        'custom-pink' : '#ffa98e',
      },
      zIndex:{
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
    },
  },
  plugins: [],
}
