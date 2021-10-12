module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../images/main-bg.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
