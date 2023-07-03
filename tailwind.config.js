// tailwind.config.js
const { withTV } = require('tailwind-variants/transformer')
 
/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content:  ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
})
