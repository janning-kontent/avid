/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        manufacturing: {
          light: '#983123',
          DEFAULT: '#732318',
          dark: '#4D1710',
        },
        kontentai: '#3dcca8',
        elitebuild: '#0078d2',
        primary: {
          light: '#F3E5F5',
          DEFAULT: '#7E57C2',
          dark: '#4527A0',
        },
        secondary: {
          light: '#E1F5FE',
          DEFAULT: '#03A9F4',
          dark: '#0288D1',
        },
        tertiary: {
          light: '#FFFDE7',
          DEFAULT: '#FFC107',
          dark: '#FFA000',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
 .my-element {
  background-color: theme('colors.manufacturing.DEFAULT');
}
