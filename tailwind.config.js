module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    colors: {
      blue: {
        DEFAULT: "#03B5AA",
        dark: "#0C1B33",
      },
      gray: {
        DEFAULT: "#B2AA8E",
      }, 
      purple: { 
        DEFAULT: "#7A306C",
      },
      yellow: {
        DEFAULT: "#DBFE87",
      }
    },
    extend: {
      fontFamily: {
        "poppins": ["Poppins"]
    },
      backgroundImage: {
        "pattern": "url('/public/img/oriental-tiles.png')",
      },
  },
},
  variants: {
    extend: {},
  },
  plugins: [],
}
