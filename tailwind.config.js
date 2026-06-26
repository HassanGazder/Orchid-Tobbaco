export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
      boxShadow: {
        premium: "0 30px 90px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
