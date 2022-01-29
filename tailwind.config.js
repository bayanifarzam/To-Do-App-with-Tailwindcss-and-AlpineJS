module.exports = {
  content: ["./src/**/*.{html,js}","index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  
    variants: {
        scrollbar: ['rounded']
    }
}
