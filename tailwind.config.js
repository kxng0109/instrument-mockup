/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'custom-blue' : '#6c83ff',
        'custom-pink' : '#ffa98e',
      },
    },
  },
  plugins: [],
}
