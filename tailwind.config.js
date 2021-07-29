module.exports = {
  purge: [
    "./src/components/**/*.js",
    "./src/pages/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['"Untitled Sans"', 'ui-sans-serif']
      },
      colors: {
        ds: {
          black: "#404040",
          grey: "#808080",
          white: "#f7f7f7",
          orange: "#ff4e00"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
