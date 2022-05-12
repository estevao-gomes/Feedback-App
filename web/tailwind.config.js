module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      borderRadius:{
        md: '4px',
      },
      colors:{
        brand:{
          300: '#996dff',
          500: '#8257e6'
        }
      }, 
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms')
  ],
}
