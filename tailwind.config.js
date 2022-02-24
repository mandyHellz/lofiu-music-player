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
        Lobster: ["Lobster, cursive, sans-serif"],
        Comfortaa: ["Comfortaa, cursive, sans-serif"],
      },
      colors: {
        'light-purple': '#654ea3',
        'purple-pinky': '#A87FB5',
        'pretty-pink': '#eaafc8',
        'coral-pink': "#D5767E",
        'light-orange': '#DDA479',
        'medium-coral': '#DA826C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}