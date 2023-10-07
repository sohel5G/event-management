/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#C42885',
        'hoverPrimaryColor': '#AC2B85'
      }
    },


  },
  plugins: [
    require("daisyui")
  ]
}

