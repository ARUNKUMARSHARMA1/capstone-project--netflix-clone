/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class', // class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: '#E50914',
        'primary-dark': '#B20710',
        surface: '#141414',
        card: '#1A1A1A',
        'card-hover': '#242424',
        accent: '#F5C518',
        muted: '#6D6D6E',
      },
      fontFamily: {
        display: ['Bebas Neue', 'cursive'],
        sans: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'shimmer': 'shimmer 1.5s infinite',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'slide-up': 'slideUp 0.35s ease forwards',
        'scale-in': 'scaleIn 0.2s ease forwards',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-800px 0' },
          '100%': { backgroundPosition:  '800px 0' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to:   { opacity: 1 },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: 0, transform: 'scale(0.96)' },
          to:   { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
