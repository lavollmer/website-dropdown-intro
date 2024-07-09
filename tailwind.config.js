module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'almost-white': 'hsl(0,0%,98%)',
        'almost-black': 'hsl(0,0%,8%)',
        'medium-gray': 'hsl(0,0%,41%)',
      },
      fontSize: {
        'paragraph': '18px',
      },
      fontFamily: {
        'epilogue': ['Epilogue', 'sans-serif'], // Add this line
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

