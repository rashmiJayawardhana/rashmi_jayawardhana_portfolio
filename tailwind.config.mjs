/** @type {import('tailwindcss').Config} */
export default {
  // Only these folders are scanned for class names. Classes written anywhere else (for example /data) are purged from the CSS.
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#F3F8F3',   // light mode section bands and mobile menu
        darkHover: '#173A34',    // dark mode raised surfaces: cards, bands, mobile menu
        darkTheme: '#081518',    // dark mode page background
        accent: '#567257',       // brand green for fills, borders, and light mode accent text
        accentSoft: '#9CBA9C',   // lighter green for accent TEXT in dark mode, where `accent` is too dim to read
        darkText: '#E4EAE5',     // dark mode body text; off-white avoids the glare of pure white on a dark background
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
  // Dark styles apply when the `dark` class is on <html>, which useDarkMode toggles.
  darkMode: 'selector',
  plugins: [],
};
