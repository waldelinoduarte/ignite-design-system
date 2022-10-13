/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32
      },
      
      colors: {
        transparent: 'transparent',
        black: "#000",
        white: "#fff",

        gray: {
          100: '#e1e1e6',
          200: '#c4c4cc',
          400: '#7c7c8a',
          800: '#202024',
          900: '#121214',
        },
        
        cyan: {
          300: '#81d8f7',
          500: '#9be1fb',
        }
       
      },

      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
