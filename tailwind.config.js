module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../images/main-bg.svg')",
        'section-pattern': "url('../images/pattern.svg')",
        'bullets': "url('../images/bullets.png')",
        'newsletter': "url('../images/footer.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
