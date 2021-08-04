module.exports = {
  purge: {
    content: [
      "./src/components/**/*.js",
      "./src/pages/**/*.js"
    ],
    safelist: [
      "border-t", 
      "border-b",
      "border-black",
      "py-2",
      "w-2/5",
      "w-3/5"
    ]
  },
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
