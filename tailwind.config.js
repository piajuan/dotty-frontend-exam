/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        base: {
          100: "#333333",
        },
        primary: '#282828',
        secondary: '#178BC1',
        accent: '#144659',
      },
      fontFamily: {
        body: ['"Open Sans", sans-serif'],
      },
      backgroundImage: {
        home: 'url("../public/img/bg.png")'
      },
      container: {
        padding: '1rem',
      },
    },
  },
 
}

