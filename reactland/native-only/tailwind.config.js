/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./src/*.{js,jsx,ts,tsx}"], // Is this right?
  theme: {
    extend: {
      backgroundImage: {
        'galaxy': "url('/')"
      }
    },
  },
  plugins: [],
}
