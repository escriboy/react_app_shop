/** @type {import('tailwindcss').Config} */
const url = require('url');
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#9d4edd',
        back: '#fff',
        product_bg: 'rgb(246,237,244)',
        product_detail: '#4cbfa6',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`,
      },
    },
  },
  plugins: [],
};
