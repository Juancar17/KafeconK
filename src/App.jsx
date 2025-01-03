import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact"; // Importación del componente
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/productos" element={<ProductPage />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
