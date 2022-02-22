module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        '1/2': '50%',
        '1/3': '33%',
      },
      fontFamily: {
        Lato: ["Lato, sans-serif"],
      },
      colors: {
        'light-purple': '#654ea3',
        'purple-pinky': '#A87FB5',
        'pretty-pink': '#eaafc8',
        'light-orange': '#DDA479',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}