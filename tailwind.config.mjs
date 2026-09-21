/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#F3F8F3',
        darkHover: '#173A34',
        darkTheme: '#081518',
        accent: '#567257',
        accentSoft: '#9CBA9C',
        darkText: '#E4EAE5',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff',
      },
      gridTemplateColumns: {
        'auto':'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
};
