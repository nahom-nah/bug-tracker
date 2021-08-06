module.exports = {
  mode: "jit",
  purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["responsive", "hover", "focus", "active"],
      cursor: ["hover", "focus"],
    },
  },
  plugins: [],
};
