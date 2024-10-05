/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      PlaypenSans:["Playpen Sans", "system-ui"],
      Pacifico: ["Pacifico", 'cursive'],
      TulpenOne:["Tulpen One", "sans-serif"],
      IBMPlexMono:[ "IBM Plex Mono", "monospace"],
      Poppins: ["Poppins", "sans-serif"]
    }
  },
  plugins: [],
}

