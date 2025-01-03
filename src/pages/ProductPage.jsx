import React, { useEffect } from "react";
import useOnScreen from "../useOnScreen";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Palmerita de Hojaldre",
      price: "0,90 €",
      image:
        "https://media.istockphoto.com/id/1490072170/es/foto/un-pastel-de-hojaldre-t%C3%ADpico-de-la-ciudad-de-torrelavega-en-cantabria-espa%C3%B1a-postre-con-crema.jpg?s=2048x2048&w=is&k=20&c=gdOZF8xjpX6CSHV7jjWeN8QORalGYK2mYZfmJP9umyM=",
    },
    {
      id: 2,
      name: "Palmera de Hojaldres",
      price: "2,60 €",
      image:
        "https://cdn.pixabay.com/photo/2021/10/25/13/38/pastries-6740947_640.jpg",
    },
    {
      id: 3,
      name: "Napolitana de Chocolate",
      price: "3,10 €",
      image:
        "https://cdn.pixabay.com/photo/2024/02/22/11/53/naples-8589989_640.jpg",
    },
    {
      id: 4,
      name: "Bayonesa",
      price: "3,30 €",
      image:
        "https://cdn.pixabay.com/photo/2019/10/18/11/13/cookies-4558850_640.jpg",
    },
    {
      id: 5,
      name: "Cookies",
      price: "3,60 €",
      image:
        "https://cdn.pixabay.com/photo/2018/10/15/12/31/biscuit-3748865_640.jpg",
    },
    {
      id: 6,
      name: "Tejas de Almendra",
      price: "6,50 €",
      image:
        "https://cdn.pixabay.com/photo/2018/07/08/09/34/almond-3523569_640.jpg",
    },
    {
      id: 7,
      name: "Croissant de Mantequilla",
      price: "2,50 €",
      image:
        "https://cdn.pixabay.com/photo/2019/09/29/19/20/sweet-4514136_640.jpg",
    },
    {
      id: 8,
      name: "Magdalena Tradicional",
      price: "1,20 €",
      image:
        "https://cdn.pixabay.com/photo/2020/03/18/15/49/cupcakes-4944589_640.jpg",
    },
    {
      id: 9,
      name: "Panecillos Integrales ",
      price: "0,90 €",
      image:
        "https://cdn.pixabay.com/photo/2022/07/14/15/32/cinnamon-7321464_640.jpg",
    },
    {
      id: 10,
      name: "Tartaleta de Fresas con Nata",
      price: "15,00 €",
      image:
        "https://cdn.pixabay.com/photo/2016/03/27/19/23/tart-1283822_640.jpg",
    },
    {
      id: 11,
      name: "Bizcocho de Chocolate",
      price: "12,00 €",
      image:
        "https://cdn.pixabay.com/photo/2018/07/09/13/19/cake-3526123_640.jpg",
    },
    {
      id: 12,
      name: "Rosquillas Glaseadas",
      price: "2,00 €",
      image:
        "https://cdn.pixabay.com/photo/2013/09/05/19/31/donuts-179248_640.jpg",
    },
  ];

  const categories = [
    "Bollería",
    "Pastelería",
    "Pan Sin Gluten",
    "Productos Salados",
    "Otros Productos",
  ];

  const allergens = [
    "Sin Alérgenos",
    "Sin Apio",
    "Sin Frutos Secos",
    "Sin Huevo",
    "Sin Leche",
    "Sin Pescado",
    "Sin Sésamo",
    "Sin Soja",
    "Sin Sulfitos",
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const options = { root: null, rootMargin: "0px", threshold: 0.1 };
  const [filterRef, isFilterVisible] = useOnScreen(options);

  return (
    <section className="bg-black text-white min-h-screen py-12 px-4 lg:px-8">
      {/* Encabezado */}
      <header className="mt-32 text-center mb-12 animate-slideDown">
        <h1 className="text-5xl font-bold text-[#4d79ff] mb-6">
          Un dulce para cada ocasión
        </h1>
        <p className="text-lg text-gray-400">
          Descubre nuestra selección de productos artesanos y disfruta de un
          momento dulce.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto animate-fadeIn">
        {/* Filtros */}
        <aside
          ref={filterRef}
          className={`hidden lg:block sticky top-24 bg-black p-6 rounded-lg shadow-lg h-[500px] ${
            isFilterVisible ? "border-[#4d79ff]" : "border-gray-700"
          }`}
        >
          <FilterSection title="Categoría" items={categories} />

          <FilterSection title="Alérgenos" items={allergens} />

          <button className="mt-8 bg-gradient-to-r from-[#4d79ff] to-[#3b4d7f] hover:from-[#3b4d7f] hover:to-[#4d79ff] text-white w-full py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
            Filtrar productos 🔍
          </button>
        </aside>

        {/* Productos */}
        <main className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-fadeIn">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </main>
      </div>
    </section>
  );
};

const FilterSection = ({ title, items }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold text-[#4d79ff] mb-6">{title}</h2>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index}>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="form-checkbox text-[#4d79ff] rounded"
            />
            <span className="text-gray-300">{item}</span>
          </label>
        </li>
      ))}
    </ul>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
    <img
      src={product.image}
      alt={product.name}
      className="h-48 w-full object-cover"
    />
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
      <p className="text-xl text-[#4d79ff] font-bold mb-4">{product.price}</p>
      <button className="bg-gradient-to-r from-[#4d79ff] to-[#3b4d7f] hover:from-[#3b4d7f] hover:to-[#4d79ff] text-white px-4 py-2 rounded-md shadow hover:shadow-lg transition duration-300">
        🛒 Añadir al carrito
      </button>
    </div>
  </div>
);

export default ProductPage;
