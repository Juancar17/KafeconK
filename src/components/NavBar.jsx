import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Usar React Router para enlaces dinámicos

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY + 10) {
      // Ocultar navbar si el usuario hace scroll hacia abajo más de 10px
      setShowNavbar(false);
    } else if (currentScrollY < lastScrollY - 10) {
      // Mostrar navbar si el usuario hace scroll hacia arriba más de 10px
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <nav className="flex items-center justify-between p-4 lg:px-8 bg-trasparent bg-opacity-80 shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            {/* Texto del logo */}
            <span className="ml-2 text-3xl font-extrabold text-white font-custom">
              Kafé con
              <span className="text-[#4d79ff] text-5xl"> K</span>
            </span>
          </Link>
        </div>

        {/* Menu Items (Centered) */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          <Link
            to="/"
            className="text-sm font-semibold text-white relative group hover:text-[#4d79ff]"
          >
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4d79ff] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/nosotros"
            className="text-sm font-semibold text-white relative group hover:text-[#4d79ff]"
          >
            Nosotros
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4d79ff] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/productos"
            className="text-sm font-semibold text-white relative group hover:text-[#4d79ff]"
          >
            Productos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4d79ff] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contacto"
            className="text-sm font-semibold text-white relative group hover:text-[#4d79ff]"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4d79ff] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-white hover:text-[#4d79ff]"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-80 shadow-md md:hidden">
            <div className="flex flex-col items-center space-y-4 p-4">
              <Link
                to="/"
                className="text-white hover:text-[#4d79ff]"
                onClick={() => setIsMenuOpen(false)} // Cerrar menú al hacer clic
              >
                Inicio
              </Link>
              <Link
                to="/nosotros"
                className="text-white hover:text-[#4d79ff]"
                onClick={() => setIsMenuOpen(false)} // Cerrar menú al hacer clic
              >
                Nosotros
              </Link>
              <Link
                to="/productos"
                className="text-white hover:text-[#4d79ff]"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </Link>
              <Link
                to="/contacto"
                className="text-white hover:text-[#4d79ff]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
