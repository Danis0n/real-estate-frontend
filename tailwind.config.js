/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#30caa0","800":"#0e6252","900":"#1e3a8a"}
      },
      backgroundImage: {
        'home-bg': 'url(../public/bg.jpg)',
        'footer-bg': 'url(../public/footer-bg.jpg)',
      }
    },
  },
  plugins: [],
}
