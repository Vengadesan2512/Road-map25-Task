/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  daisyui:{
    themes:["cupcake"]
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

