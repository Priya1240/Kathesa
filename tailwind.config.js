module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        grass: "url('../photos/shutterstock_572451373.jpg')",
      }),
      colors: (theme) => ({
        navyellow: "#EAF205"
      })
    },
  },
  plugins: [],
}

