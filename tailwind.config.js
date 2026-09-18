/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#FFFFFF",
          emerald: "#E5E5E5",
          darkgreen: "#1C1C1C",
          cyan: "#D4D4D4",
          neon: "#F5F5F5",
        },
        dark: {
          950: "#000000",
          900: "#050505",
          850: "#0A0A0A",
          800: "#121212",
          700: "#181818",
          600: "#242424",
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-green': '0 0 25px -4px rgba(255, 255, 255, 0.25)',
        'glow-green-lg': '0 0 50px -8px rgba(255, 255, 255, 0.3)',
        'glow-cyan': '0 0 25px -4px rgba(255, 255, 255, 0.2)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.7), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'phone-3d': '0 25px 60px -15px rgba(0, 0, 0, 0.95), 0 0 25px 2px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
