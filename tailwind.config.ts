import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      xsm: "520px",
      // => @media (min-width: 520px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        redressed: ["Redressed", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/assets/images/Hero_bg.png')",
        hero2: "url('/assets/images/Hero_bg2.jpg')",
        hero3: "url('/assets/images/Hero_bg3.jpg')",
        hero4: "url('/assets/images/Hero_bg4.jpg')",
        hero5: "url('/assets/images/Hero_bg5.jpg')",
        hero6: "url('/assets/images/Hero_bg6.png')",
        hero7: "url('/assets/images/Hero_bg7.jpg')",
        hero8: "url('/assets/images/Hero_bg8.jpg')",
        card: "url('/assets/images/thumbnail-background.svg')",
      },
      colors: {
        "dark-1": "#0B0B0D",
        "green-1": "#8CFFD8",
        "gray-1": "#777777",
        light: "#ffffff",
        "dutch-white": "#ECDBBA",
        "rose-red": "#C84B31",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
