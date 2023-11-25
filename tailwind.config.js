/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  prefix: 'tw-',
  theme: {
    colors: {
      'text-primary': 'rgba(10, 51, 92, 1)',
      'text-secondary': 'rgba(23, 66, 88, 0.8)',
      'other-yellow': 'rgba(255, 235, 153, 1)',
      'other-light-yellow': 'rgba(255, 235, 153, 1)',
      'other-red': 'rgba(255, 59, 48, 1)',
      'other-black': 'rgba(0, 0, 0, 1)',
      'bg-primary': 'rgba(255, 255, 255, 1)',
      'bg-secondary': 'rgba(238, 244, 246, 1)',
      'border-primary': 'rgba(23, 66, 88, 0.1)',
      'brand-primary': 'rgba(0, 172, 255, 1)',
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
}

