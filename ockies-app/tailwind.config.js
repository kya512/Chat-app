/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors :{
        "secondary" : "#A0A0A0",
        "interactif" :"#FFD700",
        "reaction" : "#FF4500"
      }
    },
  },
  plugins: [],
}