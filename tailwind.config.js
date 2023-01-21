/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'slide-up': 'slide-up 2s ease',
      },
      keyframes: {
        'slide-up': {
          from: {
            transform: 'translateY(200px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      fontFamily: {
        prompt: ['var(--font-prompt)'],
        karla: ['var(--font-karla)'],
        source: ['var(--font-source-code-pro)'],
      },
    },
  },
  plugins: [],
};
