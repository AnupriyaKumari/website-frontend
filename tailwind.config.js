module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screen : {
      'lg': {'max': '992px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '660px'},
      // => @media (max-width: 767px) { ... }
    },
  },
  plugins: [],
};
