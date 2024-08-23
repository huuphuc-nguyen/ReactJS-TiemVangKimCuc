/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(198 139 0)',
      },
      keyframes:{
        'tool-tip': {
          '0%': { opacity: 0, transform: 'translate(-50%,-10px) scale(0)' },
          '100%': { opacity: 1, transform: 'translate(-50%,0) scale(1)'},
        },
        'fade-in':{
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        },
        'slide-in':{
          '0%': {transform: 'translateX(-100%)', opacity: '0'},
          '100%': {transform: 'translateX(0)', opacity: '1'}
      
        },
      },
      animation:{
        'tool-tip': 'tool-tip 0.1s ease 0.3s forwards',
        'fade-in': 'fade-in 1s ease-out',
        'slide-in': 'slide-in 0.8s ease-out',
      },
    },
  },
  plugins: [],
}

