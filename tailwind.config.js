/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'dm':    ['"DM Sans"', 'sans-serif'],
        'sans':  ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        'primary': {
          50: '#C6D6F0',   // Light blue
          100: '#5B8FDB',  // Medium blue
          500: '#0047AB',  // Primary blue
          800: '#001D4A',  // Dark blue
          900: '#05142C',  // Darkest blue
        },
        'white': '#FFFFFF',
        'portal': {
          'white': '#FFFFFF',
          'blue-primary': '#0047AB',
          'blue-light': '#C6D6F0',
          'blue-dark': '#001D4A',
          'blue-medium': '#5B8FDB',
          'white': '#FFFFFF',
          'blue-darkest': '#05142C',
        }
      }
    },
  },
  plugins: [],
}