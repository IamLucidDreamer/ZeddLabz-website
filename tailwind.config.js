module.exports = {
  purge: {
    content: ['.public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/assets/img/hero-bg.png')",
        'cta': "url('/assets/img/cta-bg.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
