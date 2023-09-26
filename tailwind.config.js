/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        accent: '#6D74DE',
        lightAccent: '#95A5E8',
        beige: '#F2F8FF',
        rose: '#dabdca',
        skye: '#D3E1F5',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-domine)'],
      },
    },
  },
  plugins: [],
}
