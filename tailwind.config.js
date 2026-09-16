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
          green: "#00F076",
          emerald: "#10B981",
          darkgreen: "#055030",
          cyan: "#22D3EE",
          neon: "#38EF7D",
        },
        dark: {
          950: "#030507",
          900: "#06090E",
          850: "#0A0E17",
          800: "#0F1522",
          700: "#161E2E",
          600: "#222D42",
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-green': '0 0 30px -5px rgba(0, 240, 118, 0.35)',
        'glow-green-lg': '0 0 60px -10px rgba(0, 240, 118, 0.45)',
        'glow-cyan': '0 0 35px -5px rgba(34, 211, 238, 0.3)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'phone-3d': '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 30px 2px rgba(0, 240, 118, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
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
