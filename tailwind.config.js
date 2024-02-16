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
      },
      fontFamily: {
        body: ['"Open Sans", sans-serif'],
      }
      
    },
  },
 
}

