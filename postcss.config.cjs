// module.exports = {
//     plugins: {
//       tailwindcss: {},
//       autoprefixer: {},
//       'postcss-import': {},
//       'tailwindcss/nesting': 'postcss-nesting',
//     }
//   }

// module.exports = {
//     plugins: [
//       require('postcss-nesting')
      
//     ],
//   };

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  }
}