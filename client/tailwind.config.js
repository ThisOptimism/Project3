module.exports = {
  purge: [], //! if we have problems during deployment with TW, check this page https://tailwindcss.com/docs/guides/create-react-app - i didn't do the remove unused style section
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      'animation': {
        'gradient-x':'gradient-x 15s ease infinite',
        'gradient-y':'gradient-y 15s ease infinite',
        'gradient-xy':'gradient-xy 15s ease infinite',
      },
      'keyframes': {
        'gradient-xy': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
