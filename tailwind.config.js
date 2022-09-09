/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens:{
      'sm' : '500px',
      'md' :  '768px',
      'lg' : '861px',
      'xl' : '1024px',
      '2xl' : '1440px',
      '3xl' : '1920px',
      '4xl' : '2500px',
    },
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
