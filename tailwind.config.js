/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pretendard: ["Pretendard", "sans-serif"],
        notosans: ["Noto Sans", "sans-serif"],
        nanummyeongjo: ["NanumMyeongjo", "sans-serif"],
        nanumsonwrite: ["NanumGoDigANiGoGoDing", "sans-serif"],
        nanumsonpyeonji: ["NanumSonPyeonJiCe", "sans-serif"],
      },
      screens: {
        "min-1155": "1155px",
      },
      colors: {
        beige: "#FFE2AD",
      },
      boxShadow: {
        custom: "0 2px 12px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "fade-out": "fadeOut 0.3s ease-in-out",
        blinkOnce: "blink 0.6s ease-in-out forward",
        click: "click 0.2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        },
        blinkOnce: {
          "0%": { outlineColor: "red" },
          "50%": { outlineColor: "transparent" },
          "100%": { outlineColor: "red" },
        },
        click: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
