/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Josefin Sans", "sans-serif"],
      secondary: ["Alata", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "hsl(0, 0%, 41%)",
        secondary: "hsl(0, 0%, 55%)",
      },
      backgroundImage: {
        "hero-mobile": "url('/src/assets/mobile/image-hero.jpg')",
        "hero-desktop": "url('/src/assets/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
