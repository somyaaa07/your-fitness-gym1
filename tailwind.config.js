/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        bg: "#060806",
        surface: "#0E100E",
        surface2: "#151815",
        primary: "#A3E635",
        primaryDark: "#65A30D",
        secondary: "#4D7C0F",
        heading: "#F3F4EE",
        body: "#CACDC4",
        muted: "#7C8074",
        offwhite: "#FFFFFF",
      },
      fontFamily: {
        teko: ["Anton", "sans-serif"],
        rajdhani: ["Oswald", "sans-serif"],
        inter: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at center, rgba(163,230,53,0.15) 0%, rgba(6,8,6,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(163,230,53,0.25)",
        glowBlue: "0 0 30px rgba(77,124,15,0.25)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
        fadeIn: "fadeIn 1s ease-out forwards",
        floatSlow: "floatSlow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};