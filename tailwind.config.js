/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Existing CSS variable references (backward compatible)
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        'border-strong': 'var(--color-border-strong)',
        primary: 'var(--color-text)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        'accent-secondary': 'var(--color-accent-secondary)',
        // Vice City neon palette
        'neon-pink': '#ff2d95',
        'neon-blue': '#00d4ff',
        'neon-purple': '#b44dff',
        'neon-cyan': '#00f5d4',
        'bg-dark': '#050508',
        'bg-surface': '#0d0d1a',
        'text-main': '#f0f0ff',
        'text-muted': '#8888bb',
      },
      fontFamily: {
        mono: ['SF Mono', 'Cascadia Code', 'Consolas', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'glow-pulse-fast': 'glow-pulse 1s ease-in-out infinite alternate',
      },
      keyframes: {
        'glow-pulse': {
          '0%': {
            boxShadow: '0 0 5px rgba(255,45,149,0.3), 0 0 10px rgba(255,45,149,0.1)',
          },
          '100%': {
            boxShadow: '0 0 15px rgba(255,45,149,0.6), 0 0 30px rgba(255,45,149,0.3), 0 0 60px rgba(255,45,149,0.1)',
          },
        },
      },
    },
  },
  plugins: [],
};
