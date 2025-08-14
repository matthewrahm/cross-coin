import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#faf8f4',
        accent1: '#ffcfdf',
        accent2: '#fde2e4',
        accent3: '#d4f0f0',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '2rem',
        pill: '9999px',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.06)'
      }
    },
  },
  plugins: [],
}

export default config


