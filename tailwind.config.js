/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1a202c",
        "secondary-color": "#2d3748",
        "tertiary-color": "#4a5568",
      },
      keyframes: {
        "contact-input": {
          "0%": {
            width: "0",
            "padding-left": "0",
            "padding-right": "0",
          },
          "100%": {
            width: "20rem",
            "padding-left": "1rem",
            "padding-right": "1rem",
          },
        },
        ripple: {
          "75%, 100%": {
            transform: "scale(4)",
            opacity: "0",
          },
        },
        revealFromBottom: {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        revealFromLeft: {
          "0%": {
            transform: "translateX(-50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        revealFromRight: {
          "0%": {
            transform: "translateX(50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        dropdown: "dropdown 250ms ease-in-out both",
        "contact-input": "contact-input 1s ease-in-out 2s both",
        ripple: "ripple 1s cubic-bezier(0, 0, 0.2, 1) both;",
        revealFromBottom: "revealFromBottom 1.8s ease-out both;",
        revealFromLeft: "revealFromLeft 1.8s ease-out both;",
        revealFromRight: "revealFromRight 1.8s ease-out both;",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
}