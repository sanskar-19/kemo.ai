const { colors } = require('@mui/material');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'island-background': 'url("/images/hero-background.png")',
      },

      fontFamily: {
        'plex-mono': "var(--plex-mono)",
        'greycliff': "GreyCliff",
      },
      colors: {
        'dark': "var(--dark)",
        'green': "var(--green)",
        'lightgreen': "var(--light-green)"
      },
      boxShadow: {
        'highlights-card': "0px 0px 16px rgba(0, 128, 128, 0.16);",
      }

    },
  },
  plugins: [],
}
