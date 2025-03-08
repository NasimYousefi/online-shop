/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#000000',
        'custom-dark-blue': '#0E103D',
        'custom-purple': '#69306D',
        'custom-white': '#FFFFFF',
        'custom-purple-50': '#FAF5FF',
        'custom-purple-200': '#E9D5FF',
      }
    },
  },
  plugins: [],
}

