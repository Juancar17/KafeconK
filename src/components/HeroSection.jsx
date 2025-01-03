import React from "react";
import { Link } from "react-router-dom"; // Usar React Router para enlaces dinámicos
import useOnScreen from "../useOnScreen";

const HeroSection = () => {
  // Configuración de las opciones para IntersectionObserver
  const options = {
    root: null, // Usa el viewport como contenedor raíz
    rootMargin: "0px",
    threshold: 0.5, // El 50% del elemento debe ser visible
  };

  // Hook personalizado para detectar visibilidad
  const [ref, isVisible] = useOnScreen(options);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        ref={ref} // Vinculamos el ref al Hero Section
        className="flex-grow relative w-full bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('../1.jpg')", // Cambia a la ruta real de la imagen
          backgroundSize: "cover",
        }}
      >
        {/* Overlay para oscurecer la imagen */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Contenido del Hero Section */}
        <div className="relative z-10 max-w-3xl text-white px-4 flex flex-col items-center gap-y-6 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold animate-moveUp delay-100">
            ¡Bienvenido a <span className="text-[#4d79ff]">Kafé con K</span>!
          </h1>
          <p className="text-base md:text-lg animate-moveUp delay-200">
            El lugar perfecto para disfrutar de un buen café junto a tus mejores
            amigos, humanos y peludos.
          </p>
          <h3 className="text-2xl md:text-4xl font-extrabold animate-moveUp delay-100">
            🐾 Aquí, tus mascotas siempre son bienvenidas. 🐾
          </h3>

          <Link
            to="/productos"
            className="mt-4 md:mt-6 px-4 py-2 md:px-6 md:py-3 bg-[#4d79ff] text-white text-sm md:text-lg font-semibold rounded-full border-2 border-[#4d79ff] hover:bg-transparent hover:text-[#4d79ff] transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            Descubre más
          </Link>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default HeroSection;
