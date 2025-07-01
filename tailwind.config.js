/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          glow: "glow 2s ease-in-out infinite",
        },
        keyframes: {
          glow: {
            "0%, 100%": {
              filter: "drop-shadow(0 0 0 rgba(59,130,246,0.4))",
            },
          },
        },
      },
    },
    plugins: [],
  }
  
  