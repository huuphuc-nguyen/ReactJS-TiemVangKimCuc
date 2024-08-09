/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'primary': 'rgb(198 139 0)',
      },
      keyframes:{
        'tool-tip': {
          '0%': { opacity: 0, transform: 'translate(-50%,-10px) scale(0)' },
          '100%': { opacity: 1, transform: 'translate(-50%,0) scale(1)'},
        },
        'fade-in': {  
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {  
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'slide-left-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-left-out': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'tool-tip': 'tool-tip 0.1s ease 0.5s forwards', // delay 0.3s before showing the tool-tip
        'fade-in': 'fade-in 0.3s ease-in-out forwards',
        'fade-out': 'fade-out 0.05s ease-in-out forwards',
        'slide-left-in': 'slide-left-in 0.2s ease-in-out forwards',
        'slide-left-out': 'slide-left-out 0.2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

