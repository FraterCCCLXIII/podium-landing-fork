/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme colors - more complete palette
        dark: {
          bg: '#000000',
          'bg-secondary': '#0a0a0a',
          'bg-tertiary': '#111111',
          'bg-card': '#0d0d0d',
          'bg-hover': '#1a1a1a',
          text: '#ffffff',
          'text-secondary': '#b3b3b3',
          'text-muted': '#808080',
          'text-accent': '#ffffff',
          border: '#1a1a1a',
          'border-light': '#2a2a2a',
          'border-accent': '#333333',
          accent: '#007AFF',
          'accent-hover': '#0056CC',
          'accent-secondary': '#F300FF',
          success: '#00C851',
          warning: '#ffbb33',
          error: '#ff4444',
          'gradient-start': '#007AFF',
          'gradient-end': '#F300FF',
        },
        // Light theme colors
        light: {
          bg: '#ffffff',
          'bg-secondary': '#f8f9fa',
          'bg-tertiary': '#e9ecef',
          'bg-card': '#ffffff',
          'bg-hover': '#f1f3f4',
          text: '#000000',
          'text-secondary': '#6b7280',
          'text-muted': '#9ca3af',
          'text-accent': '#000000',
          border: '#e5e7eb',
          'border-light': '#d1d5db',
          'border-accent': '#cbd5e0',
          accent: '#007AFF',
          'accent-hover': '#0056CC',
          'accent-secondary': '#F300FF',
          success: '#00C851',
          warning: '#ffbb33',
          error: '#ff4444',
          'gradient-start': '#007AFF',
          'gradient-end': '#F300FF',
        }
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      });
    },
  ],
}


