// tailwind.config.js
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          primary: '#0088cc',
          secondary: '#5eb5f7',
          background: '#f5f5f5',
          text: '#212121',
          border: '#e0e0e0',
        }
      }
    },
  },
  plugins: [],
};