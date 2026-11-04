/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ethan: {
          offwhite: '#F2F4F6',
          charcoal: '#111110',
          charcoalLight: '#191918',
          charcoalCard: '#1E1E1C',
          softblue: '#9FCAFC',
          softblueHover: '#88BCFB',
          neutralgrey: '#A8A9A8',
          borderDark: '#2C2C2A',
          borderLight: '#E2E5E9',
        },
        background: {
          light: '#F2F4F6',
          dark: '#111110',
          cardLight: '#FFFFFF',
          cardDark: '#191918',
          subtleDark: '#222220',
        },
        border: {
          light: '#E2E5E9',
          dark: '#2C2C2A',
        },
        brand: {
          cyan: '#9FCAFC',
          softblue: '#9FCAFC',
          blue: '#3B82F6',
          indigo: '#6366F1',
          emerald: '#10B981',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        syne: ['Syne', 'sans-serif'],
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
