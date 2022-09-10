/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens:{
      'sm' : '500px',
      'md' :  '768px',
      'nt' : '861px',
      'lg' : '1024px',
      'xl' : '1440px',
      '2xl' : '1920px',
      '3xl' : '2500px',
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
