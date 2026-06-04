/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fff9e6',
          100: '#ffefb3',
          200: '#ffe082',
          300: '#ffd257',
          400: '#ffc933',
          500: '#ffbf19',
          600: '#f1ad12',
          700: '#d9930e',
          800: '#b9770a',
          900: '#8d5f06',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(255, 190, 25, 0.25)',
        soft: '0 10px 30px rgba(0, 0, 0, 0.45)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
      backdropBlur: {
        xl: '40px',
      },
    },
  },
  plugins: [],
};
