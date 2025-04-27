/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': {
          100: 'var(--bg-100)',
          200: 'var(--bg-200)',
          300: 'var(--bg-300)',
        },
        'text': {
          100: 'var(--text-100)',
          200: 'var(--text-200)',
        },
        'primary': {
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
        },
        'accent': {
          100: 'var(--accent-100)',
          200: 'var(--accent-200)',
        },
      },
      maxWidth: {
        'container': '100px',
      },
      transitionDuration: {
        '300': '300ms',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'scroll-left': 'scroll-left 3s linear infinite',
      }
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [],
}