import React, { useEffect } from "react";
import Footer from "./Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="bg-black text-white py-16 px-8">
      {/* Contenedor principal */}
      <div className="container mt-20 mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start animate-fadeIn">
        {/* Sección de texto y datos */}
        <div className="space-y-8">
          <h1 className="text-4xl font-extrabold mb-4 text-[#4d79ff]">
            CONTÁCTANOS
          </h1>
          <p className="text-lg text-gray-400">
            En <span className="text-[#4d79ff]">Kafé con K</span>, estamos aquí
            para ayudarte. Si tienes alguna pregunta, no dudes en ponerte en
            contacto con nosotros.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <i className="fas fa-phone-alt text-2xl"></i>
              <a
                href="tel:+34912345678"
                className="text-lg text-gray-300 hover:text-[#4d79ff] transition"
              >
                +34 912 345 678
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-envelope text-2xl"></i>
              <a
                href="mailto:info@kafeconk.com"
                className="text-lg text-gray-300 hover:text-[#4d79ff] transition"
              >
                info@kafeconk.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-map-marker-alt text-2xl"></i>
              <a
                href="https://maps.app.goo.gl/WrrwxHgcRvktTAmP8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-300 hover:text-[#4d79ff] transition"
              >
                C. de Narváez, 43-37, Madrid, 28009, España
              </a>
            </div>
          </div>
        </div>

        {/* Sección de imágenes con móviles */}
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 animate-fadeIn">
          {/* Móvil izquierdo */}
          <div className="relative bg-black border-4 border-gray-800 rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2019/09/12/18/29/street-cafe-4472312_1280.jpg"
              alt="Kafé con K interior"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Formulario de contacto */}
      <div className="container mx-auto mt-16">
        <h2 className="text-4xl font-extrabold mb-6 text-[#4d79ff]">
          Envíanos un mensaje
        </h2>
        <p className="text-lg mb-8 text-gray-400">
          ¿Tienes alguna pregunta o sugerencia? ¡Nos encantaría saber de ti!
          Rellena el formulario a continuación y nos pondremos en contacto
          contigo lo antes posible.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slideDown">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-[#4d79ff]"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-[#4d79ff]"
                placeholder="Tu email"
              />
            </div>
          </div>
          <div className="space-y-6">
            <label htmlFor="message" className="block text-sm font-bold mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-[#4d79ff]"
              placeholder="Tu mensaje"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#4d79ff] hover:bg-[#3b4d7f] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
