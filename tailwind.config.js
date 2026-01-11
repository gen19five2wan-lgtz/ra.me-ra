/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-tent': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        'warm-brown': {
          50: '#faf5f0',
          100: '#f4e8dd',
          200: '#e8d1bb',
          300: '#d9b599',
          400: '#c99576',
          500: '#b8754f',
          600: '#9d5f3f',
          700: '#7e4a33',
          800: '#66392a',
          900: '#543024',
        },
        'deep-wine': {
          50: '#fdf4f4',
          100: '#fbe7e7',
          200: '#f6d4d4',
          300: '#edb3b3',
          400: '#e08888',
          500: '#ce595a',
          600: '#b63f3f',
          700: '#9a3131',
          800: '#802b2b',
          900: '#6c2828',
        },
      },
    },
  },
  plugins: [],
}
