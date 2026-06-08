/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory:      '#FAF6EF',
        champagne:  '#F0E6CC',
        gold:       '#C9A84C',
        'gold-pale':'#E8D5A3',
        teal:       '#6B8FAF',
        'teal-dark':'#4A6E8A',
        ink:        '#2C1F0E',
        'ink-soft': '#5C4A38',
        coral:      '#E8836A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}


