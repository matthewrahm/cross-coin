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
        // Cross coin heavenly colors
        cross: {
          gold: '#FFD700',
          sky: '#87CEEB',
          heavenly: '#E6F3FF',
          cross: '#2C3E50',
          light: '#F8FAFC',
        }
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '2rem',
        pill: '9999px',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.06)',
        cross: '0 8px 32px rgba(255, 215, 0, 0.15)',
        heavenly: '0 12px 40px rgba(135, 206, 235, 0.2)'
      }
    },
  },
  plugins: [],
}

export default config


