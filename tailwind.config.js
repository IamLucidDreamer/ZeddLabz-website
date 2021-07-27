module.exports = {
  purge: {
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('../assets/img/hero-bg.PNG')",
        'cta': "url('../assets/img/cta-bg.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
