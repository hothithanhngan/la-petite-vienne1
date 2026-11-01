/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#12100E',
        'brand-card': '#1A1614',
        'brand-card-hover': '#241E1A',
        'brand-border': '#3A2E28',
        'brand-border-subtle': '#2A221E',
        'brand-cacao': '#6B4226',
        'brand-cacao-hover': '#825230',
        'brand-gold': '#D4AF37',
        'brand-text-light': '#E5DCD3',
        'brand-text-muted': '#A69385',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Merriweather', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
