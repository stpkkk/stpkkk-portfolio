/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Roboto',
      tertiary: 'Aldrich',
      title: 'DM Serif Display',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: { max: '640px' },
      md: '768px',
      lg: '960px',
      isMobile: { max: '996px' },
      xl: { max: '1200px' },
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg4.png')",
        myPhoto: "url('./assets/hero.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
