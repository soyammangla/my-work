import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<h2>Cart Page</h2>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
