import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container border-t border-gray-700 pt-6 mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Sección de contacto */}
        <div>
          <h2 className="text-lg font-bold text-[#4d79ff] mb-6">Contacto</h2>
          <ul className="space-y-4">
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:info@kafeconk.com"
                className="text-gray-400 hover:text-[#4d79ff] transition"
              >
                info@kafeconk.com
              </a>
            </li>
            <li>
              <span className="font-medium">Teléfono:</span>{" "}
              <a
                href="tel:+34912345678"
                className="text-gray-400 hover:text-[#4d79ff] transition"
              >
                +34 912 345 678
              </a>
            </li>
            <li>
              <span className="font-medium">Dirección:</span>{" "}
              <a
                href="https://maps.app.goo.gl/WrrwxHgcRvktTAmP8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#4d79ff] transition"
              >
                C. de Narváez, 43-37, Madrid, 28009, España
              </a>
            </li>
          </ul>
        </div>

        {/* Sección de redes sociales */}
        <div>
          <h2 className="text-lg font-bold text-[#4d79ff] mb-6">Síguenos</h2>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#4d79ff] transition"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#4d79ff] transition"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#4d79ff] transition"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>

        {/* Sección de horario */}
        <div>
          <h2 className="text-lg font-bold text-[#4d79ff] mb-6">Horario</h2>
          <ul className="space-y-4">
            <li>
              Lunes - Viernes:{" "}
              <span className="font-medium">8:00 AM - 8:00 PM</span>
            </li>
            <li>
              Sábado: <span className="font-medium">9:00 AM - 9:00 PM</span>
            </li>
            <li>
              Domingo: <span className="font-medium">Cerrado</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-500">
          &copy; 2025 Kafé con K. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
