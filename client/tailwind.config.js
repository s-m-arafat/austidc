
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-texture': "url('/src/images/head_texture_trans.png')",
      }
    },
  },
  plugins: [require('daisyui')],
}
