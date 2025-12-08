/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media', // Detecta modo oscuro según el sistema
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        bordo: '#2f0707',
        crema: '#e6dedb',
        cremaClaro: '#f2eee8',
        darkBg: '#1a1a1a',
        darkText: '#f5f5f5',
      },
      animation: {
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
