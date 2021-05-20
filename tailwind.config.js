module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '24': '6rem',
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {
      colors: {
        'dark-gray': '#636166',
        'light-gray':'#EDEDED',
        'sharp-indigo':'#4406EC',
        'grayish-indigo': '#636166',
        'sleek-gray': '#B7B7B7',
        'header-blue': '#2C0C6A',
        'subheader-gray': '#877E9E',
        'ceramic-gray':'#F2F2F2',
        'sharp-gray': '#8B8F96',
        'blueish-gray': '#F4F3F8',
        'washed-gray':'#C4C5C6'
      },
      width: {
        '508': '508px',
        '20p': '20px'
      },

      height: {
        '20p': '20px'
      },
      transitionProperty: {
        'width': 'width',
        'left': 'left'
      },
      inset: {
        '9mm':'9px'
      },
      outline: {
        'hidden': 'none'
      }
    },
  },
  variants: {
    extend: {
      textColor: ['hover', 'active', 'responsive']
    },
  },
  plugins: [],
}
