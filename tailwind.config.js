module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        'basic': 1.3,
      },
      fontFamily: {
        'Montserrat' : ['Montserrat', 'serif'],
        'Besley' : ['Besley', 'serif'],
        'Roboto' : ['Roboto', 'serif'],
      }
    }
    
  },
  variants: {
  extend: {},
  },
  plugins: [],
};