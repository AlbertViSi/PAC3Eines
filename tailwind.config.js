/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'portada': "url('../images/portada.png')",
      },
      borderWidth: {
        3: '3px',
      },
      colors: {
        'uoc-bg': '#a3f4ff', // Sustituto para el color de la plantilla $uoc-bg
        brown: '#A52A2A',
        aqua: '#00FFFF',
        'uoc-corporate': '#000078',
      },
      flexGrow: {
        3: '3', // Agrega `flex-grow: 3;` como una utilidad personalizada
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        serif: ['Georgia', '"Times New Roman"', 'serif'],
      },
    },
    screens: {
      sm: '500px', // Redefinir el punto de interrupción
    },
  },
  plugins: [],
}