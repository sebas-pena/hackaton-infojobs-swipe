/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/store/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#167db7',
          50: '#f1f9fe',
          100: '#e3f1fb',
          200: '#c1e3f6',
          300: '#8acdef',
          400: '#4bb3e5',
          500: '#2499d3',
          600: '#167db7',
          700: '#136191',
          800: '#145378',
          900: '#164564',
          950: '#0e2d43'
        }
      },
      boxShadow: {
        custom: '0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)'
      },
      fontFamily: {
        rubic: ['--rubic', 'sans-serif'],
        coolvetica: ['var(--font-coolvetica)', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'custom-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1'
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.7'
          }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'custom-pulse': 'custom-pulse 1s ease-out infinite'
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(to right, #8e9eab, #eef2f3)'
      }
    }
  },
  plugins: []
}
