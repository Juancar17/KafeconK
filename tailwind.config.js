/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Habilitar modo oscuro basado en clase
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-out",
        moveUp: "moveUp 1s ease-out",
        slideDown: "slideDown 1s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        moveUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Fuente limpia y moderna
        roboto: ["Roboto", "sans-serif"], // Fuente versátil
        custom: ["'Pacifico'", "cursive"], // Fuente única para títulos distintivos
      },
      colors: {
        lightBackground: "#ffffff", // Fondo claro
        darkBackground: "#1a202c", // Fondo oscuro
        lightText: "#000000", // Texto oscuro en modo claro
        darkText: "#f7fafc", // Texto claro en modo oscuro
        primary: "#4d79ff", // Azul para elementos destacados
        secondary: "#00004d", // Azul oscuro
        accent: "#ff9900", // Color de acento
      },
    },
  },
  plugins: [],
};
