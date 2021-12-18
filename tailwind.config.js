// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  mode: "jit",
  future: {},
  purge: [],
  theme: {
    extend: {},
    listStyleTypes: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman'
    },
  },
  variants: {},
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer')
    // ...
  ]
}