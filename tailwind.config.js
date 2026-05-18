/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:         '#F6F3EE',
        beige:         '#EEEBE4',
        dark:          '#1A1816',
        secondary:     '#6B635A',
        tertiary:      '#9B9389',
        accent:        '#7D7D7D',
        'accent-light':'#E8CFCA',
        border:        '#DDD8D0',
        navy:          '#1A1816',
      },
      fontFamily: {
        display:   ['"DM Serif Display"', 'Georgia', 'serif'],
        body:      ['"Instrument Sans"', '-apple-system', 'sans-serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      animation: {
        'marquee':  'marquee 35s linear infinite',
        'fade-up':  'fade-up 0.8s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}