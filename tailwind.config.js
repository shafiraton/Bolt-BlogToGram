/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700', // Gold
          dark: '#E6B800',
          light: '#FFE44D',
        },
        secondary: {
          DEFAULT: '#FF8C42', // Creative Orange
          dark: '#FF6B2B',
          light: '#FFAD75',
        },
        accent: {
          DEFAULT: '#9B5DE5', // Creative Purple
          dark: '#8346C4',
          light: '#B37EEA',
        },
        creative: {
          pink: '#FF69B4',
          blue: '#00C6CF',
          yellow: '#FFF338',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-creative': 'linear-gradient(45deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}